# Yardly – szabályok az ügynöknek

Ez a fájl minden Yardly-chatre vonatkozik, amely ezen a repón dolgozik: a fejlesztésre, az üzemeltetésre és az
ügyfélenkénti chatekre is. Ugyanez a fájl van a `yardly-saas`, a `flotta_management` és a `yardly-landing-2`
repóban; ha módosítod, mindhárom helyen módosítsd.

A Yardly flotta- és eszközüzemeltetési szoftver, amelyet egyedi telepítésként értékesítünk. A telepítés vagy az
ügyfél saját szerverén fut, vagy az általunk üzemeltetett, ügyfélenként külön felhős példányon. **Nem SaaS:** az
app.yardly.hu csak bemutató.

## 1. Rendszerek

| Cím | Mi ez | Repó, ág | Ki használja | Szabály |
|---|---|---|---|---|
| yardly.hu | marketingoldal | `yardly-landing-2`, `main` | nyilvános | élesre csak a tulajdonos „mehet élesre” jóváhagyása után |
| app.yardly.hu, api.app.yardly.hu | **bemutató (demó)** kitalált adatokkal | `yardly-saas`, `main` | érdeklődők, a tulajdonos vezetésével | jóváhagyás és előtte adatbázismentés; valós ügyféladat nem kerülhet bele |
| admin.yardly.hu | belső admin: ügyfelek, árajánlatok, kalkulátor, telepítések, demó cégek | `yardly-saas`, `main` | a tulajdonos | jóváhagyás és előtte mentés |
| tesztapp.yardly.hu, tesztadmin.yardly.hu | **a tulajdonos fejlesztési kipróbáló felülete** | `yardly-saas`, `staging` | csak a tulajdonos | zöld CI után szabadon telepíthető; nem demó, ügyfél nem kap hozzáférést, valós ügyféladat nem kerülhet rá |
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

A Bographic Kft. cég az app.yardly.hu-n nem törölhető.

## 3. Informatikai biztonság

- **Never print secrets. Credentials only via env/server; never print, log, commit or store them.**
  Titok nem kerülhet chatbe, repóba, PR-ba, naplóba vagy dokumentumba.
- Titkok helye: AWS SSM Parameter Store (SecureString), illetve a szerveren a `/opt/flotta/deploy/.env.*`
  fájlok (600-as jogosultság). A Billingo API-kulcs csak a Parameter Store-ba kerül.
- Az ügyfél hozzáférési adatait (VPN, szerverjelszó, kulcs) soha ne tárold. Az ügyfél a saját csatornáján adja
  meg őket, a munka idejére.
- Legkisebb jogosultság: ne hozz létre új felhasználót, kulcsot vagy szerepkört, és ne bővíts meglévőt. A
  kiadás-aláíró kulcs (`alias/yardly-release-signing`) csak egy `v*` címkéből indított kiadásból használható;
  ezt ne lazítsd.
- Kétlépcsős azonosítás van minden adminisztratív felületen (alkalmazás-admin, AWS-konzol). Konzolos
  IAM-felhasználót ne hozz létre.
- **Mentés minden éles módosítás előtt:** `pg_dump -Fc` a `/opt/flotta/backups/<időbélyeg>-<név>/` könyvtárba,
  600-as jogosultsággal (7. pont). Éjszakánként automatikus mentés is fut S3-ba, objektumzárral.
- Személyes adat nem kerülhet naplóba. Teszthez, demóhoz és tesztapphoz csak kitalált vagy anonimizált adatot
  használj (EUB C-683/21). A demó cégei kitalált adatokat tartalmaznak (például Minta Logisztika).
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

Ügyfelenként két dokumentumot írunk alá, a [Yardly – titoktartás és adatfeldolgozás 2.0](https://claude.ai/artifact/DsPjkxQU4EzsxvBxF435mT)
szerint: egy kölcsönös titoktartási megállapodást és egy adatfeldolgozási szerződést. A díjat, a fizetést és a munkát
az admin.yardly.hu-n készült, írásban elfogadott árajánlat rögzíti; minden másra a Ptk. és a szerzői jogi törvény
vonatkozik. A korábbi szerződéscsomag 1.0-t (keretszerződés és mellékletek) nem használjuk. A két megállapodás
szövegét ne változtasd meg; eltérés csak a tulajdonos jóváhagyásával lehet.

| Mit vállaltunk | Határidő vagy mérték | Mit jelent neked |
|---|---|---|
| Adatvédelmi incidens jelzése az ügyfélnek | legkésőbb 48 óra (adatfeldolgozási szerződés 7. pont) | azonnal jelezd a tulajdonosnak, és készítsd elő a GDPR 33. cikk (3) szerinti adatokat |
| Aktívan kihasznált sebezhetőség (CRA 14. cikk) | korai figyelmeztetés 24 órán belül, bejelentés 72 órán belül, zárójelentés 14 napon belül a javítás után; az érintett ügyfelek tájékoztatása | készítsd elő a bejelentést a tulajdonosnak (ENISA egységes bejelentési platform) |
| Súlyos biztonsági esemény (CRA) | 24 óra, 72 óra, zárójelentés 1 hónapon belül | ugyanígy |
| Támogatási időszak (CRA) | főverziónként 5 év a kiadástól; a biztonsági frissítések 10 évig letölthetők | biztonsági javítás minden támogatott verzióra kell, az ügyfélágakra is |
| Támogatott verziók | a legutolsó és az azt megelőző főverzió | ezekre adj javítást |
| Támogatás és válaszidők | az elfogadott árajánlatban vállalt szint szerint (admin.yardly.hu, Árajánlatok) | P1-nél (nem használható a rendszer, vagy kihasznált biztonsági hiba) mindent tegyél félre |
| Felhős üzemeltetés | napi mentés, 30 napig őrizve, egy nem törölhető másolattal (adatfeldolgozási szerződés 4. pont) | a mentés és a helyreállítás mindig működjön |
| Tervezett karbantartás | előre jelezve, munkaidőn kívül | éles leállást ne tervezz munkaidőre |
| Biztonsági frissítések (CRA) | késedelem nélkül | a kiadási jegyzetben jelöld, melyik biztonsági frissítés |
| Alfeldolgozók | AWS (Frankfurt, EU) és Google Workspace; újat legalább 30 nappal előre jelezni kell (adatfeldolgozási szerződés 6. pont), és frissíteni a yardly.hu/alfeldolgozok oldalt | ügyféladatot kapó új külső szolgáltatást ne vezess be jóváhagyás nélkül |
| Adatok helye | felhőben csak az EU-ban (eu-central-1) | más régiót ne használj |
| Adatexport és szolgáltatóváltás (Data Act) | díjmentes; felfüggesztéskor is elérhető; kérésre 30 napon belül, titkosítva | az exportfunkciót soha ne vedd el és ne korlátozd |
| Megszűnés után (felhő) | legfeljebb 30 napos átmeneti időszak, utána legalább 30 napig kérhető az adatok átadása, majd törlés; a mentésekből 30 napon belül tűnnek el (adatfeldolgozási szerződés 9. pont) | a törlési és megőrzési feladatokat ne kapcsold ki |
| Naplók megőrzése | a weboldal hozzáférési naplója 90 nap; a többi az adatkezelési tájékoztató szerint | megőrzési időt ne hosszabbíts |
| Titoktartás | az együttműködés vége után 5 évig; üzleti titok és forráskód addig, amíg titok marad (titoktartási megállapodás) | ügyfélinformációt ne adj tovább, és ne vigyél át másik ügyfélhez |
| Licenc | az ügyfél konténerképet kap, forráskódot nem | forráskódot ne adj ki |

Más jogszabályok:
- Reklám és megkeresés: e-mailes reklámot csak előzetes, kifejezett hozzájárulással szabad küldeni (Grt. 6. §).
  Hideg e-mail-kampányt ne készíts.
- A weboldal és a hirdetések állításai legyenek igazak és igazolhatók. Funkciót csak akkor hirdess, ha az
  élesben is működik.

## 5. Ügyfélenkénti chatek

Egy chat egy ügyféllel foglalkozik. Az ügyfél rövid azonosítója (például `adr`) a chat elején derüljön ki.

- **Elkülönítés:** másik ügyfél nevét, adatát, beállítását vagy kódját ne használd, ne említsd és ne másold át.
  Ha a feladathoz másik ügyfél kellene, állj meg, és kérdezd meg a tulajdonost.
- **Adatforrás:** az ügyfél szerződéses és telepítési adatai az admin.yardly.hu-ban vannak (Ügyfelek,
  Árajánlatok, Telepítések). A repóba legfeljebb nem titkos, személyes adatot nem tartalmazó telepítési
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
- **Árajánlat és szerződés:** az ár az admin.yardly.hu kalkulátorából és árajánlataiból jön, a titoktartási
  megállapodás és az adatfeldolgozási szerződés a 2.0-s mintából (4. pont). Díjat ne találj ki.
- **ADR (teszt.yardly.hu):** külön ügyfél, külön chat. Jelenleg a mi szerverünkön fut, a `flotta_management`
  `staging` ágáról; a tervek szerint az ADR saját szerverére költözik. Addig rá a felhős üzemeltetés szabályai
  vonatkoznak, az adatfeldolgozási szerződés szerint.
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
