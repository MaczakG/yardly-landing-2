# Yardly – szabályok az ügynöknek

Ez a fájl minden Yardly-chatre vonatkozik, amely ezen a repón dolgozik: a fejlesztésre, az üzemeltetésre és az
ügyfélenkénti chatekre is. Ugyanez a fájl van a `yardly-saas`, a `flotta_management` és a `yardly-landing-2`
repóban; ha módosítod, mindhárom helyen módosítsd.

A Yardly flotta- és eszközüzemeltetési szoftver. **Előfizetéses szolgáltatásként (SaaS) értékesítjük** az
app.yardly.hu-n: a cégek maguk regisztrálnak, a kártyát a 14 napos Prémium-próbaidő előtt adják meg (Barion), utána havi
vagy éves díjat fizetnek; éves Üzleti és Prémium díjnál átutalás is lehet. A számlát a Billingo állítja ki. Egyedi
telepítést már nem értékesítünk; a meglévő egyedi szerződéses ügyfél, az ADR, marad (`flotta_management`).

## 1. Rendszerek

| Cím | Mi ez | Repó, ág | Ki használja | Szabály |
|---|---|---|---|---|
| yardly.hu | marketingoldal, árlap, jogi oldalak (ÁSZF) | `yardly-landing-2`, `main` | nyilvános | élesre csak a tulajdonos „mehet élesre” jóváhagyása után |
| app.yardly.hu, api.app.yardly.hu | **éles SaaS** az előfizetők valós adataival | `yardly-saas`, `main` | az előfizető cégek | jóváhagyás és előtte adatbázismentés |
| admin.yardly.hu | belső admin: előfizetők, pénzügy, egyedi ügyfelek (Ügyfelek, Telepítések, Szerződések), rendszer | `yardly-saas`, `main` | a tulajdonos | jóváhagyás és előtte mentés |
| tesztapp.yardly.hu, tesztadmin.yardly.hu | **a tulajdonos fejlesztési kipróbáló felülete** | `yardly-saas`, `staging` | csak a tulajdonos | zöld CI után szabadon telepíthető; ügyfél nem kap hozzáférést, valós ügyféladat nem kerülhet rá; a Barionnál csak tesztkulcs |
| teszt.yardly.hu, api.teszt.yardly.hu | **az ADR ügyfél éles rendszere** | `flotta_management`, `staging` | az ADR | külön kezelendő ügyfélrendszer: jóváhagyás és előtte mentés; később az ADR saját szerverére költözik |
| az ügyfelek saját szerverei | a `flotta_management` aláírt kiadásai | `flotta_management`, `main`, `v*` címkék | az ügyfél | csak ügyfélenkénti chatben, az ügyfél engedélyével (5. pont) |

A `flotta_management` repóban a fejlesztés a `staging` ágon folyik. A `main` ágra az kerül, amit az ügyfelek saját
szerverére kiadunk: a `v*` címkék a `main`-ről készülnek. A `main` automatikusan nem települ sehova.

**Szerver:** `flotta-app`, egy EC2 t3.micro (1 GB RAM) az `eu-central-1` régióban (`i-0010e698685154699`). Rajta
fut minden fenti rendszer, kivéve az ügyfelek saját szervereit.
- A konténerek a `/opt/flotta/deploy` könyvtárban futnak, Docker Compose-zal. A konténerek: `caddy`,
  `api-staging` és `postgres-staging` (ADR), `api-saas-test` és `postgres-saas-test` (tesztapp),
  `api-saas-prod` és `postgres-saas-prod` (app és admin).
- Telepítés:
  - `yardly-saas`: a `/opt/yardly-saas/deploy.sh` kétpercenként húzza le az ágakat; naplója a
    `/var/log/yardly-saas-deploy.log` („`<env>: <sha> is live`”).
  - `flotta_management` `staging`: a GitHub Actions `deploy.yml`, csak `backend/` vagy `frontend/` változásra
    (a `.md` fájlok kivételével). SSH-val lép be, a GitHub `EC2_SSH_KEY` titkával.
  - yardly.hu: a `yardly-landing-rebuild.service`.
- Az ügynök a szerverre csak AWS SSM-mel lép be (`aws ssm send-command`, `AWS-RunShellScript`), a 7. pont
  szerint. Az `EC2_SSH_KEY` kulcsot csak a GitHub Actions használja.
- A gépen 1 GB memória van: **egyszerre csak egy nehéz feladat futhat** (docker build, migráció, `pg_dump`).

## 2. Jóváhagyás: mi mehet kérdés nélkül

Kérdés nélkül szabad:
- olvasni, naplót nézni, helyben fordítani és tesztelni;
- a munkamenethez kijelölt `claude/...` ágon dolgozni, és tervezet (draft) PR-t nyitni;
- a `yardly-saas` `staging` ágába beolvasztani zöld CI után (tesztapp, tesztadmin).

A tulajdonos kifejezett jóváhagyása kell ezekhez (egy korábbi jóváhagyás nem vihető át egy új ügyre):
- app.yardly.hu és admin.yardly.hu (`yardly-saas` `main`): előtte adatbázismentés;
- yardly.hu élesítése: „mehet élesre”;
- teszt.yardly.hu (`flotta_management` `staging`): előtte adatbázismentés;
- beolvasztás a `flotta_management` `main` ágába és kiadás (`v*` címke) készítése;
- bármilyen művelet egy ügyfél szerverén vagy ügyfélpéldányon;
- adat törlése vagy felülírása, romboló adatbázis-művelet;
- jogosultság, IAM-szerepkör, kulcs vagy bizalmi szabály (trust policy) módosítása;
- új külső szolgáltatás, amely ügyféladatot kap (a 4. pont szerint ez alfeldolgozó);
- bármi, ami ügyfélnek vagy kívülállónak megy (e-mail, üzenet, szerződés, számla).

A Bographic.kft az app.yardly.hu-n díjmentes belső Prémium-fiók (a bemutatókhoz, 2099-ig aktív): nem törölhető, nem
lehet csak olvasható, és csak kitalált adat lehet benne.

## 3. Informatikai biztonság

- **Never print secrets. Credentials only via env/server; never print, log, commit or store them.**
  Titok nem kerülhet chatbe, repóba, PR-ba, naplóba vagy dokumentumba.
- Titkok helye: AWS SSM Parameter Store (SecureString), illetve a szerveren a `/opt/flotta/deploy/.env.*`
  fájlok (600-as jogosultság). A Barion- és a Billingo-kulcs csak a Parameter Store-ba kerül.
- Az ügyfél hozzáférési adatait (VPN, szerverjelszó, kulcs) soha ne tárold. Az ügyfél a saját csatornáján adja
  meg őket, a munka idejére.
- Legkisebb jogosultság: ne hozz létre új felhasználót, kulcsot vagy szerepkört, és ne bővíts meglévőt. A
  kiadás-aláíró kulcs (`alias/yardly-release-signing`) csak egy `v*` címkéből indított kiadásból használható;
  ezt ne lazítsd.
- Kétlépcsős azonosítás van minden adminisztratív felületen (alkalmazás-admin, AWS-konzol). Konzolos
  IAM-felhasználót ne hozz létre.
- **Mentés minden éles módosítás előtt:** `pg_dump -Fc` a `/opt/flotta/backups/<időbélyeg>-<név>/` könyvtárba,
  600-as jogosultsággal (7. pont). Éjszakánként automatikus mentés is fut S3-ba, objektumzárral.
- Személyes adat nem kerülhet naplóba. Teszthez, bemutatóhoz és a tesztapphoz csak kitalált vagy anonimizált adatot
  használj (EUB C-683/21), például Minta Logisztika. Az app.yardly.hu előfizetőinek adatait csak a feladathoz szükséges
  mértékben nézd meg, és ne másold ki.
- A meglévő védelmeket (ahol az adott repóban megvannak) ne kapcsold ki és ne gyengítsd:
  - titkosított lemez és KMS-sel titkosított mezők;
  - a CSP: ahol nincs benne `unsafe-inline`, ne kerüljön bele. A teszt.yardly.hu felületén a lapok saját inline
    szkriptjei miatt még benne van; ott se lazíts tovább rajta;
  - a jelszóhash erőssége;
  - a bérlők elkülönítését ellenőrző tesztek;
  - EXIF-törlés a feltöltött képekből;
  - a biztonsági események naplója és riasztásai.
- Ellátási lánc:
  - A CI-ellenőrzéseket (titokkeresés, sérülékeny csomagok, SBOM, build és teszt) soha ne kerüld meg, és
    tesztet ne kapcsolj ki.
  - Csomag csak hivatalos forrásból jöhet, rögzített verzióval.
  - Kiadást csak aláírva adunk ki (`docs/kiadasok-ellenorzese.md`).
- Gyanús esemény, szivárgás vagy kihasznált hiba esetén azonnal szólj a tulajdonosnak. A határidők a 4.
  pontban vannak, és a felismeréstől számítanak.

## 4. Kötelezettségek a szerződésből és a jogszabályokból

**Előfizetők (app.yardly.hu):** a regisztrációkor egyetlen jelölőnégyzettel elfogadott ÁSZF 3.0 és az 1. melléklete, az
Adatfeldolgozási feltételek (yardly.hu/aszf, yardly.hu/adatfeldolgozas); a jelölőnégyzet szövege a 27. pont
kikötéseit kifejezetten megnevezi. A szövegek forrása a [jogi dokumentum](https://claude.ai/artifact/WzanE1iWjJ2kVJxJKBCn4u),
a weboldalon szó szerint a `yardly-landing-2` `src/content/legal/*.md` fájljai, a hatályos változat a `Legal__*`
beállításokban. A díjak forrása az app `pricing.json`-ja és a weboldal
`src/content/pricing.mjs`-e: a kettő mindig egyezzen. A szolgáltató alanyi adómentes (AAM): áfát nem számítunk fel.

**Egyedi szerződéses ügyfél (ADR):** a [megbízási szerződés](https://claude.ai/artifact/8cxseanW6UjhkmX9fkiUR3), a
kétoldalú titoktartási megállapodás és az adatfeldolgozási szerződés
([Yardly – titoktartás és adatfeldolgozás 2.0](https://claude.ai/artifact/DsPjkxQU4EzsxvBxF435mT)), a díj az írásban
elfogadott árajánlatából. A PDF-ek az admin.yardly.hu Szerződések oldalán vannak. Új egyedi szerződést nem kötünk.

A szerződések és az ÁSZF szövegét ne változtasd meg; eltérés csak a tulajdonos jóváhagyásával lehet. Az ÁSZF
módosítását 30 nappal, díjemelést 60 nappal előre jelezni kell az előfizetőknek (ÁSZF 24. pont).

Az előfizetőkre az ÁSZF szabályai érvényesek; a legfontosabbak:
- **próbaidő:** 14 nap Prémium, a kártyát előtte kell megadni; a terhelés előtt 7, 3 és 1 nappal e-mailes értesítés;
- **nemfizetés:** 30 nap türelmi idő, utána csak olvasható fiók, 90 nap után törlés, előtte 30 és 7 nappal
  figyelmeztetés;
- **lemondás:** bármikor, a folyó számlázási időszak végére; előre fizetett díj csak az ÁSZF 22.4. pontja szerint jár
  vissza;
- **felelősség:** legfeljebb az előző 12 havi díj, adatvédelmi kárnál a kétszerese; a díjmentes próbaidő alatt 0 Ft;
- **adatexport:** bármikor, díjmentesen; szolgáltatóváltásnál átadás 30 napon belül.

A lenti táblázat SLA-, felhős üzemeltetési és megszűnési sorai az egyedi szerződéses ügyfélre (ADR) vonatkoznak; a
többi mindenkire.

| Mit vállaltunk | Határidő vagy mérték | Mit jelent neked |
|---|---|---|
| Adatvédelmi incidens jelzése az ügyfélnek | legkésőbb 48 óra (adatfeldolgozási szerződés 7. pont) | azonnal jelezd a tulajdonosnak, és készítsd elő a GDPR 33. cikk (3) szerinti adatokat |
| Aktívan kihasznált sebezhetőség (CRA 14. cikk) | korai figyelmeztetés 24 órán belül, bejelentés 72 órán belül, zárójelentés 14 napon belül a javítás után; az érintett ügyfelek tájékoztatása | készítsd elő a bejelentést a tulajdonosnak (ENISA egységes bejelentési platform) |
| Súlyos biztonsági esemény (CRA) | 24 óra, 72 óra, zárójelentés 1 hónapon belül | ugyanígy |
| Támogatási időszak (CRA) | főverziónként 5 év a kiadástól; a biztonsági frissítések 10 évig letölthetők | biztonsági javítás minden támogatott verzióra kell, az ügyfélágakra is |
| Támogatott verziók | a legutolsó és az azt megelőző főverzió | ezekre adj javítást |
| Támogatás és válaszidők | a megbízási szerződés 5. pontja szerint, az árajánlatban vállalt szinten. Első válasz (alap / kiemelt / SLA): P1: 1 munkanap / 4 munkaóra / 2 munkaóra; P2: 1 munkanap / 1 munkanap / 4 munkaóra. Javítási cél SLA-nál: P1 8 munkaóra, P2 3 munkanap | P1-nél (nem használható a rendszer, vagy kihasznált biztonsági hiba) mindent tegyél félre |
| Felhős üzemeltetés | vállalati SLA mellett havi 99,5%; napi mentés, 30 napig őrizve, egy nem törölhető másolattal; legfeljebb 24 óra adatvesztés, helyreállítás 1 munkanapon belül (megbízási szerződés 6. pont) | a mentés és a helyreállítás mindig működjön |
| Tervezett karbantartás | legalább 3 munkanappal előre jelezve, munkaidőn kívül, havonta legfeljebb 4 óra (megbízási szerződés 6.3. pont) | éles leállást ne tervezz munkaidőre |
| Biztonsági frissítések (CRA) | késedelem nélkül, díjmentesen; saját szerveren az ügyfél a P1-et 3 munkanapon, a többit 30 napon belül telepíti (megbízási szerződés 5.7. pont) | a kiadási jegyzetben jelöld, melyik biztonsági frissítés |
| Alfeldolgozók | AWS (Frankfurt, EU) és Google Workspace; újat legalább 30 nappal előre jelezni kell (adatfeldolgozási szerződés 6. pont, Adatfeldolgozási feltételek 9.4. pont), és frissíteni a yardly.hu/alfeldolgozok oldalt. A Barion (önálló adatkezelő) és a Billingo (a saját számlázásunk adatfeldolgozója) nem alfeldolgozó | ügyféladatot kapó új külső szolgáltatást ne vezess be jóváhagyás nélkül |
| Adatok helye | felhőben csak az EU-ban (eu-central-1) | más régiót ne használj |
| Adatexport és szolgáltatóváltás (Data Act) | díjmentes; felfüggesztéskor is elérhető; kérésre 30 napon belül, titkosítva | az exportfunkciót soha ne vedd el és ne korlátozd |
| Felmondás | bármelyik fél bármikor, írásban (Ptk. 6:278. §); ha mi mondunk fel, még 60 napig szolgáltatunk (megbízási szerződés 13. pont) | felmondást csak a tulajdonos küldhet |
| Felelősség | legfeljebb az előző 12 hónapban fizetett díj (megbízási szerződés 10. pont); adatvédelmi kárnál a kétszerese (adatfeldolgozási szerződés 10. pont) | ennél többet, kötbért vagy 48 óránál rövidebb incidensjelzést ne vállalj a tulajdonos nélkül |
| Megszűnés után (felhő) | a leállás legfeljebb 2 hónap múlva, utána legfeljebb 30 napos átmeneti időszak, majd legalább 30 napig kérhető az adatok átadása, utána törlés; a mentésekből 30 napon belül tűnnek el (megbízási szerződés 13.5. pont, adatfeldolgozási szerződés 9. pont) | a törlési és megőrzési feladatokat ne kapcsold ki |
| Naplók megőrzése | a weboldal hozzáférési naplója 90 nap; a többi az adatkezelési tájékoztató szerint | megőrzési időt ne hosszabbíts |
| Titoktartás | az együttműködés vége után 5 évig; üzleti titok és forráskód addig, amíg titok marad (titoktartási megállapodás) | ügyfélinformációt ne adj tovább, és ne vigyél át másik ügyfélhez |
| Licenc | az ügyfél konténerképet kap, forráskódot nem (megbízási szerződés 3. pont) | forráskódot ne adj ki |

Más jogszabályok:
- Reklám és megkeresés: e-mailes reklámot csak előzetes, kifejezett hozzájárulással szabad küldeni (Grt. 6. §).
  Hideg e-mail-kampányt ne készíts.
- A weboldal és a hirdetések állításai legyenek igazak és igazolhatók. Funkciót csak akkor hirdess, ha az
  élesben is működik.

## 5. Ügyfélenkénti chatek

Ez a pont az egyedi szerződéses ügyfélre (ADR) vonatkozik; az előfizetők ügyeit az admin.yardly.hu-n
intézzük. Egy chat egy ügyféllel foglalkozik. Az ügyfél rövid azonosítója (például `adr`) a chat elején derüljön ki.

- **Elkülönítés:** másik ügyfél nevét, adatát, beállítását vagy kódját ne használd, ne említsd és ne másold át.
  Ha a feladathoz másik ügyfél kellene, állj meg, és kérdezd meg a tulajdonost.
- **Adatforrás:** az ügyfél szerződéses és telepítési adatai az admin.yardly.hu-ban vannak (Ügyfelek, Telepítések,
  Szerződések). A repóba legfeljebb nem titkos, személyes adatot nem tartalmazó telepítési
  jegyzet kerülhet: `docs/ugyfelek/<azonosító>.md`.
- **Testreszabás:**
  - Az első választás a beállítás, nem a kód.
  - Ha a változás másnak is hasznos, a fő ágba kerül, beállítással kapcsolhatóan.
  - Ha valóban egyedi, a legutóbbi kiadási címkéből nyiss `customer/<azonosító>` ágat, és az eltéréseket írd le
    a telepítési jegyzetben (CRA).
  - A biztonsági javítások az ügyfélágakra is kötelezők.
- **Telepítés és frissítés az ügyfél szerverén:**
  - Csak aláírt kiadás telepíthető (`v*` címke), ellenőrzött aláírással, a képet lenyomattal (`@sha256:…`)
    rögzítve.
  - Előtte az ügyfél mentést készít, és egyeztetett karbantartási ablak kell.
  - A kiadási jegyzet minden frissítéshez kötelező.
  - A telepítés heartbeatje az admin.yardly.hu-nak jelent. A kulcsa az ügyfél környezeti változójában van,
    chatbe nem kerül.
- **Hozzáférés az ügyfél rendszeréhez:**
  - Csak az ügyfél írásos engedélyével, a feladat idejére, a feladathoz szükséges adatokhoz.
  - Minden alkalmat jegyezz fel a Telepítések bejegyzésében: ki, mikor, mit csinált.
  - Az ügyfél által küldött adatot a feladat után töröld, a levelezésből is.
  - Saját szerveres ügyfélnél ilyenkor az adatfeldolgozási szerződés él.
- **Kommunikáció:** ügyfélnek te nem írsz. Levelet, ajánlatot, kiadási jegyzetet a tulajdonosnak készíts elő.
- **Díj és szerződés:** az egyedi ügyfél díja az elfogadott árajánlatából jön, a szerződései a 4. pont szerintiek. Új
  egyedi szerződést nem kötünk. Díjat ne találj ki.
- **ADR (teszt.yardly.hu):** külön ügyfél, külön chat. Jelenleg a mi szerverünkön fut, a `flotta_management`
  `staging` ágáról; a tervek szerint az ADR saját szerverére költözik. Addig rá a felhős üzemeltetés szabályai
  vonatkoznak, a megbízási és az adatfeldolgozási szerződés szerint.
  - Az ADR chatje csak a `flotta_management` repót (`staging`, `main`) és az ADR rendszerét módosítja. A többi
    rendszerhez (1. pont) és a közös Caddy más oldalaihoz nem nyúl.
  - A költözés után az ADR szerverén a `main` ágról készült aláírt kiadás fut, és SSH-n frissítjük, a fenti
    feltételekkel. A kulcs csak a munka idejére kerül a munkamenet környezeti beállításaiba, chatbe soha.

## 6. Munkamódszer

- A tulajdonossal magyarul, magázva beszélj, kevés kérdéssel. Ha egy döntés az övé, kérdezz; különben dönts, és
  írd le, mit döntöttél.
- **Git:**
  - A munkamenethez kijelölt ágon dolgozz, PR-t tervezetként nyiss, és beolvasztás után az ágat állítsd vissza
    az alapágra.
  - Commit-üzenetbe, PR-ba és kódba ne írj modellazonosítót.
  - Más ágának történetét ne írd át.
- **Feltöltés előtt:**
  - Fordítás és tesztek helyben: `dotnet build`, `dotnet test`, illetve `npm run build`.
  - Az adatbázis-migrációt próbáld ki egy helyi Postgresen.
  - Felületi változásnál nézd meg Playwrighttal asztali és mobil szélességen is.
- **Telepítés után ellenőrizd:**
  - a `/health` végpont 200-at ad;
  - a naplóban nincs `fail` vagy `crit` sor (`docker compose logs --no-log-prefix --since 10m <szolgáltatás>`);
  - az új funkció működik.
- Tilos:
  - két nehéz feladatot egyszerre futtatni a szerveren;
  - tesztet kikapcsolni;
  - üres committal CI-t indítani;
  - figyelmeztetést elnémítani, ahelyett hogy kijavítanád az okát.

## 7. Hasznos parancsok

Parancs futtatása a szerveren (SSM). A kimenetből titok nem kerülhet a chatbe:

```sh
CID=$(aws ssm send-command --region eu-central-1 --instance-ids i-0010e698685154699 \
  --document-name AWS-RunShellScript \
  --parameters "$(python3 -c 'import json,sys; print(json.dumps({"commands":[open(sys.argv[1]).read()],"executionTimeout":["600"]}))' script.sh)" \
  --query Command.CommandId --output text)
aws ssm get-command-invocation --region eu-central-1 --command-id "$CID" --instance-id i-0010e698685154699 \
  --query '[Status,StandardOutputContent,StandardErrorContent]' --output text
```

Mentés éles módosítás előtt (a szerveren; a `postgres-saas-prod` helyére az érintett adatbázis kerül):

```sh
cd /opt/flotta/deploy
B=/opt/flotta/backups/$(date -u +%Y%m%d-%H%M%S)-<név>; mkdir -p "$B" && chmod 700 "$B"
docker compose exec -T postgres-saas-prod sh -c 'pg_dump -U "$POSTGRES_USER" -d "$POSTGRES_DB" -Fc' > "$B/db.dump"
chmod 600 "$B"/*
```

A telepítés naplója: `tail /var/log/yardly-saas-deploy.log`; a weboldalé: `tail /var/log/yardly-landing-rebuild.log`.
