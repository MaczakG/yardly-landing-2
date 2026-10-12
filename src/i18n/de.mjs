// Deutsche Texte. Gleiche Struktur wie hu.mjs.
export default {
  lang: "de",
  dateLocale: "de-DE",

  ui: {
    skip: "Zum Inhalt springen",
    homeLabel: "Yardly Startseite",
    menu: "Menü",
    langLabel: "Sprache wählen",
    nav: {
      home: "Startseite",
      solutions: "Lösungen",
      cases: "Fallstudien",
      blog: "Blog",
      about: "Über uns",
      contact: "Kontakt",
    },
    cta: "Kontakt aufnehmen",
    footer: {
      desc: "Wartungs- und Betriebssoftware für Logistikunternehmen, als Ergänzung zu Ihren bestehenden Systemen.",
      colSolutions: "Lösungen",
      colCompany: "Unternehmen",
      colLegal: "Rechtliches",
      automation: "Workflow-Automatisierung",
      modules: "Module",
      operations: "Betrieb und Sicherheit",
      pricing: "Preise",
      privacy: "Datenschutzerklärung",
      imprint: "Impressum",
      cookies: "Cookie-Einstellungen",
      madeIn: "Entwickelt in Ungarn.",
      rights: "Alle Rechte vorbehalten.",
      top: "Nach oben",
      soon: "demnächst",
    },
    consent: {
      text: "Wir messen Besuche mit Google Analytics, aber nur mit Ihrer Einwilligung.",
      more: "Details",
      accept: "Akzeptieren",
      reject: "Ablehnen",
    },
    readMore: "Weiterlesen",
    minutes: (n) => `${n} Min. Lesezeit`,
    backToBlog: "Zurück zum Blog",
    shotUrl: "yardly.hu",
    shotNote: "Echter Screenshot aus der Yardly-Testumgebung mit Demodaten. Die Oberfläche ist derzeit auf Ungarisch.",
    draft: "Entwurf. Vor dem Livegang müssen die markierten Stellen ausgefüllt und der Text rechtlich geprüft werden. Maßgeblich ist die ungarische Fassung.",
  },

  // -------------------------------------------------------------------------
  home: {
    title: "Wartungsmanagement-Software für die Logistik | Yardly",
    description:
      "Wartung, Fristen und Kosten für Fahrzeuge, Stapler und Lagertechnik an einem Ort, angebunden an Ihre bestehenden Systeme. Kostenlose Erstanalyse.",
    hero: {
      eyebrow: "Wartung und Betrieb",
      title: "Automatisierter Betrieb, zugeschnitten auf Ihre Prozesse.",
      lead: "Yardly ergänzt Ihre bestehenden Systeme und automatisiert die Wartung von Fahrzeugen, Staplern und Geräten, die Überwachung von Fristen und das Reporting. Keine Standardsoftware: Wir passen Yardly an Ihr Unternehmen an und betreuen es auch nach der Einführung.",
      note: "Die erste Analyse ist kostenlos.",
    },
    diagram: {
      title: "Wie Yardly die Systeme eines Unternehmens verbindet",
      desc: "Links die bestehenden Systeme: Unternehmenssoftware, Lagerverwaltung, Dokumentenverwaltung, Tankkartendaten und Tabellen. In der Mitte verbindet Yardly sie. Rechts die automatisierten Abläufe: Serviceplanung, Flotte, Gerätepark, Ablaufwarnungen und Kostenberichte.",
      bar: "Beispiel: die Systeme eines Logistikunternehmens",
      legend: "Datenfluss",
      figLabel: "Abb. 1",
      caption: "Yardly nimmt die Daten dort ab, wo sie heute schon liegen, automatisiert Wartungs- und Betriebsabläufe und macht daraus laufende Berichte.",
      left: [
        { cat: "ERP", name: "Unternehmenssoftware" },
        { cat: "WMS", name: "Lagerverwaltung" },
        { cat: "DMS", name: "Dokumente" },
        { cat: "KRAFTSTOFF", name: "Tankkartendaten" },
        { cat: "EXCEL", name: "Tabellen" },
      ],
      right: [
        { cat: "WARTUNG", name: "Serviceplanung" },
        { cat: "FLOTTE", name: "Fahrzeuge, Fahrer" },
        { cat: "GERÄTEPARK", name: "Stapler, Maschinen" },
        { cat: "FRISTEN", name: "Ablaufwarnungen" },
        { cat: "BERICHTE", name: "Kosten, Auswertungen" },
      ],
      mobileTop: [
        { cat: "ERP", name: "Verwaltung" },
        { cat: "WMS", name: "Lager" },
        { cat: "EXCEL", name: "Tabellen" },
      ],
      mobileBottom: [
        { cat: "WARTUNG", name: "Planung" },
        { cat: "FLOTTE", name: "Fahrzeuge" },
        { cat: "BERICHTE", name: "Kosten" },
      ],
      hub: { title: "Betriebsebene", pills: ["Verbinden", "Steuern", "Auswerten"], status: "Synchron", last: "Letzter Lauf 09:14" },
    },
    benefits: {
      eyebrow: "Ihr Nutzen",
      title: "Weniger Handarbeit. Klare Abläufe. Daten nur einmal erfassen.",
      lead: "Den meisten Unternehmen fehlen keine Systeme, sondern das, was sie verbindet. Was heute in Tabellen und in Köpfen steckt, bringt Yardly in ein übersichtliches System.",
      items: [
        {
          title: "Spart Zeit",
          text: "Wiederkehrende Verwaltung läuft von selbst: Das System berechnet Fälligkeiten, erinnert rechtzeitig und hält Berichte aktuell.",
          ticks: ["Fälligkeit nach Kilometerstand, Betriebsstunden oder Datum", "Mehrstufige Erinnerungen vor jeder Frist", "Bei einem Kunden 10 Minuten statt 8 Stunden im Monat"],
        },
        {
          title: "Klare Abläufe",
          text: "Alle sehen dasselbe: was fällig ist, was überfällig ist, was erledigt ist. Wer was sehen und ändern darf, legen wir pro Rolle fest.",
          ticks: ["Eine Oberfläche für Wartung und Fristen", "Rollenbasierte Rechte und Änderungsprotokoll", "Berichte als PDF und Excel"],
        },
        {
          title: "Keine doppelte Erfassung",
          text: "Yardly verbindet die Systeme, die Sie bereits nutzen. Dieselben Daten müssen nicht mehrfach eingetragen werden.",
          ticks: ["Bestehende Systeme bleiben erhalten", "Individuelle Anbindung an Ihre Software", "Stammdaten werden einmal erfasst"],
        },
      ],
      trace: {
        head: "LAUF · STAPLER #12",
        status: "Fertig · 1 h 41 min",
        steps: [
          { what: "Betriebsstunden empfangen", sub: "Lagerverwaltung", time: "08:00:12" },
          { what: "Fälligkeit berechnet", sub: "Pflichtservice in 14 Tagen", time: "08:00:13" },
          { what: "Erinnerung versendet", sub: "Wartungsverantwortlicher", time: "08:00:14" },
          { what: "Arbeitsauftrag freigegeben", sub: "Standortleitung · manueller Schritt", time: "09:41:02", human: true },
          { what: "Bericht aktualisiert", sub: "Monatlicher Kostenbericht", time: "09:41:05" },
        ],
      },
      board: {
        head: "ANSTEHENDE FRISTEN",
        bad: "2 überfällig",
        warn: "3 fällig",
        rows: [
          { name: "ABC-123", sub: "Hauptuntersuchung", due: "Überfällig", tone: "bad" },
          { name: "Kompressor", sub: "Jährliche Prüfung", due: "8 Tage", tone: "warn" },
          { name: "Stapler #12", sub: "Pflichtservice", due: "14 Tage", tone: "warn" },
          { name: "ABC-133", sub: "Kaskoversicherung", due: "Überfällig", tone: "bad" },
          { name: "Lager B, Reihe 2", sub: "Regalprüfung", due: "32 Tage", tone: "ok" },
        ],
      },
      mesh: {
        title: "Sechs Systeme brauchen direkt verbunden fünfzehn Schnittstellen, über Yardly nur sechs.",
        leftKey: "DIREKT VERBUNDEN",
        leftValue: "15 Schnittstellen",
        rightKey: "ÜBER YARDLY",
        rightValue: "6 Schnittstellen",
      },
    },
    product: {
      eyebrow: "Die Oberfläche",
      title: "Ein Bildschirm zeigt, was Aufmerksamkeit braucht.",
      lead: "Yardly startet mit allem, was überfällig oder bald fällig ist: Dokumente, Prüfungen und Wartungen in einer Liste, darunter der Zustand von Flotte und Gerätepark.",
      alt: "Yardly-Startseite: überfällige und anstehende Dokumente, Prüfungen und Wartungen, darunter die Zahl der Fahrzeuge und Geräte.",
    },
    proof: {
      eyebrow: "Fallstudie",
      title: "10 Minuten im Monat statt 8 Stunden.",
      lead: "Ein Logistikdienstleister für Arzneimittel, Pflanzenschutzmittel und Getränke führte die Wartung seiner Stapler und Lagertechnik in einer komplexen, schwer überschaubaren Excel-Tabelle. Heute läuft derselbe Ablauf automatisch.",
      link: "Zur Fallstudie",
      before: "8 Std.",
      after: "10 Min.",
      unit: "monatlicher Verwaltungsaufwand für die Wartung",
      beforeLabel: "Vorher",
      afterLabel: "Mit Yardly",
      commitTitle: "Was wir jedem Kunden zusagen",
      commits: [
        { title: "Kostenlose Analyse", text: "Das erste Gespräch und die Analyse kosten nichts." },
        { title: "Feste Monatsgebühr", text: "Im Voraus vereinbart und planbar." },
        { title: "Daten in der EU", text: "AWS Frankfurt oder Ihr eigener Server." },
        { title: "Laufende Betreuung", text: "Wir bleiben auch nach der Einführung an Ihrer Seite." },
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Sie vor der Entscheidung wissen sollten.",
      lead: "Ihre Frage ist nicht dabei? Schreiben Sie uns, wir antworten gern.",
      items: [
        {
          q: "Müssen wir unsere bestehenden Systeme ersetzen?",
          a: "Nein. Yardly wird als Ergänzung neben Ihren bewährten Lösungen eingeführt, Ihre bestehenden Systeme bleiben erhalten. Die Daten kommen von dort, wo sie heute schon liegen.",
        },
        {
          q: "An welche Systeme lässt sich Yardly anbinden?",
          a: "Die Anbindung entsteht als individuelle Entwicklung und passt sich daher flexibel an Ihre Software an. In der Analyse prüfen wir, wie jedes System erreichbar ist.",
        },
        {
          q: "Wo werden unsere Daten gespeichert?",
          a: "Auf AWS-Servern in Frankfurt (EU), in einer dedizierten Umgebung, oder auf Ihrem eigenen Server in Ihrem Netzwerk.",
        },
        {
          q: "Wer betreibt das System?",
          a: "Läuft Yardly auf AWS, betreiben wir Server und Anwendung. Läuft es auf Ihrem Server, betreibt Ihre interne oder externe IT den Server und wir die Anwendung.",
        },
        {
          q: "Was passiert, wenn ein Fehler auftritt?",
          a: "Sie melden ihn uns, wir finden die Ursache und beheben ihn so schnell wie möglich. Die Betreuung läuft auch nach der Einführung weiter.",
        },
        {
          q: "Was kostet Yardly?",
          a: "Die Preise sind individuell. Sobald wir Ihren Bedarf genau kennen und besprochen haben, nennen wir den genauen Preis und die Monatsgebühr. Die Analyse ist kostenlos.",
        },
      ],
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Erzählen Sie uns, wo Ihr Ablauf heute hakt.",
      lead: "In einem kurzen Gespräch lernen wir Ihre Vorstellungen kennen und zeigen, wie Yardly helfen kann. Die erste Analyse ist kostenlos.",
      note: "Unverbindlich.",
    },
  },

  // -------------------------------------------------------------------------
  solutions: {
    title: "Wartung, Flottenmanagement, Geräteverwaltung | Yardly",
    description:
      "Wartungsplanung, Fristüberwachung, Flottenmanagement, Geräteverwaltung und Kostenberichte, mit Modulen, die an Ihre Abläufe angepasst werden.",
    hero: {
      eyebrow: "Lösungen",
      title: "Bewährte Module, angepasst an Ihre Prozesse.",
      lead: "Yardly basiert auf fertigen Modulen: Flotte, Wartung, Dokumente, Gerätepark und Berichte. Wir passen sie an Ihre Arbeitsweise an, binden Ihre bestehenden Systeme an und ergänzen Ihre eigenen Geschäftsregeln.",
      fitLabel: "Für wen",
      fit: ["Logistikunternehmen", "Lagerhaltung und Distribution", "Transport", "Mehrere Standorte"],
    },
    automation: {
      eyebrow: "Workflow-Automatisierung",
      title: "Was heute über Tabellen und E-Mails läuft, wird zum System.",
      lead: "Jedes Unternehmen arbeitet anders. Deshalb liefern wir keinen vorgefertigten Ablauf, sondern automatisieren Ihren, neben Ihren bestehenden Systemen.",
      items: [
        {
          label: "Verbinden",
          title: "Bestehende Systeme ergänzen",
          text: "Yardly ergänzt die Systeme, die Sie bereits nutzen, und nimmt die Daten dort ab, wo sie heute liegen.",
          ticks: ["Individuelle Anbindung Ihrer Software", "Tank-, Dokument- und Gerätedaten an einem Ort", "Bestehende Systeme bleiben erhalten"],
        },
        {
          label: "Automatisieren",
          title: "Geschäftslogik nach Ihren Regeln",
          text: "Fälligkeiten, Freigaben, Benachrichtigungen: Die Schritte bauen wir nach Ihrer Arbeitsweise auf.",
          ticks: ["Planung nach Kilometern, Stunden oder Datum", "Freigabe- und Prüfschritte", "Mehrstufige Erinnerungen per E-Mail und SMS"],
        },
        {
          label: "Prognose",
          title: "Planbare Wartung",
          text: "Aus vorhandenen Kilometer- und Nutzungsdaten schätzt das System, wann der nächste Pflichtservice fällig ist.",
          ticks: ["Geschätztes Datum für kilometerbasierte Pläne", "Nachvollziehbare Berechnung aus Ihren Daten", "Kosten- und Euro-pro-km-Rangliste"],
        },
        {
          label: "Berichten",
          title: "Laufende Auswertungen",
          text: "Kosten und Fristen automatisch zusammengefasst, bereit für Buchhaltung und Management.",
          ticks: ["Kosten nach Kategorie und Fahrzeug", "Management-Zusammenfassung als PDF", "CSV- und Excel-Export"],
        },
      ],
    },
    modules: {
      eyebrow: "Module",
      title: "Acht Module, aus denen Ihr System entsteht.",
      lead: "Sie brauchen nicht alle. Nach der Analyse aktivieren und konfigurieren wir genau die, die Sie benötigen.",
      items: [
        { title: "Flottenmanagement", text: "Fahrzeug- und Fahrerstammdaten, Serviceheft, Wartung und Tankvorgänge in einem Register.", ticks: ["Zuordnung zu Standorten und Fahrern", "Verbrauch pro Tankvorgang", "Excel-Import aus Ihrer Liste"] },
        { title: "Dokumente und Ablaufwarnungen", text: "Jedes Dokument hängt an Fahrzeug, Fahrer oder Gerät, mit Ablaufdatum. Das System meldet sich rechtzeitig.", ticks: ["Eigene Dokumenttypen, Versionierung", "Warnung 30, 14, 7 und 1 Tag vorher", "E-Mail und SMS"] },
        { title: "Zustandsprüfung", text: "Eigene Checklisten, die Mitarbeitende am Handy ohne Anmeldung ausfüllen.", ticks: ["Vorlageneditor per Drag-and-drop", "Einmal-Link per E-Mail", "Nachvollziehbare Historie"] },
        { title: "Gerätepark", text: "Stapler, Maschinen, Werkzeuge und IT-Geräte, verwaltet bis zum Lager und Regalplatz.", ticks: ["Eigene Kategorien und Orte", "Verantwortliche Person und Anschaffungswert", "Inventur per E-Mail mit PDF-Bericht"] },
        { title: "Kosten und Berichte", text: "Versicherung, Miete, Kraftstoff und Service nach Kategorie, Fahrzeug und Zeitraum.", ticks: ["Automatische Kategorisierung", "Management-Zusammenfassung als PDF", "Komplette Datenbank als Excel"] },
        { title: "Analyse und Prognose", text: "Aus Ihren eigenen Verlaufsdaten: Kosten pro km, geschätzte Servicetermine, Austauschempfehlungen nach Schwellenwerten.", ticks: ["Geschätzte Termine für Kilometerpläne", "Nachvollziehbare Schwellenwert-Regeln", "Für Fahrzeuge und Geräte"] },
        { title: "Team und Berechtigungen", text: "So viele Rollen wie nötig, mit Rechten pro Funktion und mehreren Standorten.", ticks: ["Eigene Rollen", "Vierstufige Berechtigungsmatrix", "Aufteilung nach Standort"] },
        { title: "Anpassung", text: "Die Oberfläche trägt Ihr Erscheinungsbild, die Listeninhalte bestimmen Sie.", ticks: ["Eigenes Logo und Akzentfarbe", "Bearbeitbare Kataloge", "Änderungsprotokoll"] },
      ],
    },
    tour: {
      eyebrow: "So sieht es aus",
      title: "Ein System, das Ihr Wartungsteam gern öffnet.",
      items: [
        { shot: "maintenance", title: "Fälligkeit nach Kilometern oder Datum", text: "Wartungspläne werden nach Kilometerstand oder Zeitraum angelegt. Das System berechnet Fälligkeiten täglich neu und hebt Überfälliges hervor.", alt: "Wartungspläne pro Fahrzeug mit Fälligkeit und Status." },
        { shot: "forecast", title: "Servicetermine aus Ihren eigenen Daten", text: "Für kilometerbasierte Pläne schätzt das System aus dem Monatsdurchschnitt jedes Fahrzeugs, wann der Service fällig ist. So lässt er sich im Kalender einplanen.", alt: "Wartungsprognose: verbleibende Kilometer und geschätztes Datum pro Fahrzeug." },
        { shot: "equipment", title: "Stapler und Maschinen in einem Register", text: "Jedes Gerät hat Kategorie, Standort, Platz und Status. Service und Inventur erledigen Sie an derselben Stelle.", alt: "Geräteliste mit Staplern, Kategorie, Standort und Status." },
      ],
    },
    process: {
      eyebrow: "So arbeiten wir",
      title: "Von der kostenlosen Analyse bis zur laufenden Betreuung.",
      lead: "Jedes Projekt beginnt mit einem Gespräch und endet nicht mit der Einführung.",
      steps: [
        { label: "Kostenlos", title: "Analyse", text: "Wir lernen Ihre Abläufe und Systeme kennen und finden heraus, wo die meiste Zeit verloren geht." },
        { label: "Gemeinsam", title: "Planung", text: "Wir legen fest, welche Module und welche individuelle Logik Sie brauchen, und erstellen ein Angebot." },
        { label: "Anpassung", title: "Umsetzung", text: "Wir passen das System an, binden Ihre Datenquellen an und übernehmen Ihre bestehenden Listen." },
        { label: "Laufend", title: "Betrieb und Betreuung", text: "Wir bleiben auch nach der Einführung an Ihrer Seite: Fehler analysieren wir und beheben sie so schnell wie möglich." },
      ],
    },
    operations: {
      eyebrow: "Betrieb und Sicherheit",
      title: "Ihre Daten bleiben in der EU oder auf Ihrem eigenen Server.",
      lead: "Sie haben die Wahl zwischen zwei Betriebsarten. System und Sicherheitsmaßnahmen sind in beiden gleich.",
      options: [
        { tag: "Cloud", title: "AWS, Frankfurt (EU)", text: "Wir betreiben die Anwendung im Rechenzentrum von Amazon Web Services in Frankfurt, Server und Anwendung liegen bei uns." },
        { tag: "Vor Ort", title: "Eigener Server", text: "Die Anwendung läuft auf Ihrem Server. Ihre interne oder externe IT betreibt den Server, wir die Anwendung." },
      ],
      securityTitle: "Sicherheitsmaßnahmen",
      security: [
        "Rollenbasierte Rechte pro Funktion",
        "Änderungsprotokoll: wer was wann geändert hat",
        "Verschlüsselte Verbindung (HTTPS/TLS, HSTS)",
        "Zwei-Faktor-Anmeldung mit Code per E-Mail",
        "Daten je Unternehmen getrennt",
        "Penetrationstests",
      ],
    },
    pricing: {
      eyebrow: "Preise",
      title: "Ein individuelles Angebot mit fester Monatsgebühr.",
      text: "Es gibt keine Pakete, denn jedes Projekt ist anders. Nach der kostenlosen Analyse erstellen wir ein Angebot, sobald wir Ihren Bedarf genau kennen. Die Kosten setzen sich aus der Einführung, einer festen, vorab vereinbarten monatlichen Nutzungsgebühr und der laufenden Betreuung zusammen.",
      points: ["Kostenlose Analyse", "Individuelles Angebot", "Feste Monatsgebühr"],
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Beginnen wir mit dem Ablauf, der heute am meisten Zeit kostet.",
      lead: "In einem kurzen Gespräch sehen wir ihn uns gemeinsam an und zeigen, was eine Automatisierung bedeuten würde.",
      note: "Die erste Analyse ist kostenlos.",
    },
  },

  // -------------------------------------------------------------------------
  cases: {
    title: "Fallstudie: Stapler- und Flottenwartung | Yardly",
    description:
      "Wie wir die Stapler- und Flottenwartung eines Logistikunternehmens automatisiert und den monatlichen Aufwand von 8 Stunden auf 10 Minuten gesenkt haben.",
    hero: {
      eyebrow: "Fallstudien",
      title: "Stapler- und Flottenwartung ohne Excel-Tabelle.",
      lead: "Wie aus 8 Stunden monatlicher Verwaltung bei einem Logistikdienstleister 10 Minuten wurden.",
    },
    case: {
      factsTitle: "Der Kunde",
      facts: [
        { k: "Kunde", v: "Logistikdienstleister (anonymisiert)" },
        { k: "Branche", v: "Arzneimittel-, Pflanzenschutz- und Getränkelogistik" },
        { k: "Beteiligte Systeme", v: "GLPI (Geräteverwaltung), Therefore (Dokumentenverwaltung), DKV (Tankkartendaten), MNB (Wechselkurse der ungarischen Nationalbank)" },
        { k: "Schwerpunkt", v: "Wartung, Prognose, Reporting" },
      ],
      sections: [
        { title: "Ausgangslage", text: "Die Wartung von Lagertechnik und Staplern wurde in einer komplexen Excel-Tabelle geführt. Sie war schwer zu überblicken, und die Wartungsverwaltung kostete jeden Monat einen vollen Arbeitstag." },
        { title: "Lösung", text: "Wir haben den gesamten Wartungsablauf für die Stapler und Geräte im Lager sowie die Wartung des Fuhrparks automatisiert. Das System schätzt den Termin jedes Pflichtservices im Voraus, aus vorhandenen Kilometerdaten und Nutzungsmustern. Yardly hat die bestehenden Systeme um laufendes Reporting und Geschäftslogik ergänzt." },
      ],
      resultTitle: "Ergebnis",
      resultText: "Der monatliche Verwaltungsaufwand für die Wartung sank von 8 Stunden auf 10 Minuten.",
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "So eine Tabelle haben wir auch.",
      lead: "Zeigen Sie sie uns, und wir prüfen gemeinsam, was sich automatisieren lässt. Die erste Analyse ist kostenlos.",
      note: "Unverbindlich.",
    },
  },

  // -------------------------------------------------------------------------
  blog: {
    title: "Blog: Wartung, Betrieb, Automatisierung | Yardly",
    description: "Praxisartikel über Wartungsdokumentation, die Prognose von Serviceterminen und die Erweiterung bestehender Systeme.",
    hero: {
      eyebrow: "Blog",
      title: "Praxiswissen zu Betrieb und Wartung.",
      lead: "Kurze, praxisnahe Artikel darüber, wie aus manueller Dokumentation ein übersichtlicher, automatisierter Ablauf wird.",
    },
    postCta: {
      title: "Fragen zu diesem Artikel?",
      text: "Schreiben Sie uns, und wir prüfen, wie das in Ihrem Unternehmen funktionieren würde. Die erste Analyse ist kostenlos.",
    },
  },

  // -------------------------------------------------------------------------
  about: {
    title: "Über uns: individuelle Betriebssoftware | Yardly",
    description:
      "Yardly entwickelt in Budapest Wartungs- und Betriebssoftware für mittelständische Unternehmen, die bestehende Software ergänzt statt ersetzt.",
    hero: {
      eyebrow: "Über uns",
      title: "Weniger Verwaltung, leichterer Arbeitsalltag.",
      lead: "Yardly soll eine konstruktive und wirtschaftliche Lösung sein, die Unternehmen den Betrieb und Mitarbeitenden den Alltag erleichtert und ihnen Zeit zurückgibt.",
    },
    story: {
      eyebrow: "Warum Yardly?",
      title: "Der Name kommt vom Hof, auf dem die Geräte eines Unternehmens arbeiten.",
      paragraphs: [
        "Yard bedeutet auf Englisch Hof oder Betriebsgelände: der Ort, an dem Fahrzeuge, Stapler und Maschinen eines Unternehmens stehen und arbeiten. Davon gibt es viele, und jedes hat eigene Fristen, Services und Kosten.",
        "Gergő Maczák hat Yardly in Budapest gegründet, damit die Verwaltung all dessen nicht mehr in komplizierten Tabellen und Handarbeit steckt, sondern in einem übersichtlichen System, das zur Arbeitsweise des Unternehmens passt.",
      ],
      plan: { title: "Ein Betriebsgelände von oben: Lager mit Staplern, geparkte Fahrzeuge, servicefällige Geräte hervorgehoben.", warehouse: "LAGER", forklifts: "STAPLER", parking: "PARKPLATZ", gate: "EINFAHRT" },
      caption: "Abb. 2 · Der Yard: das Gelände, auf dem die Geräte eines Unternehmens arbeiten. Hervorgehoben: was bald zum Service muss.",
    },
    principles: {
      eyebrow: "Woran wir glauben",
      title: "Vier Grundsätze, nach denen wir arbeiten.",
      lead: "Sie bestimmen, was wir entwickeln und wie wir mit unseren Kunden zusammenarbeiten.",
      items: [
        { title: "Automatisierung hilft, sie ersetzt nicht", text: "Automatisierung nimmt keine Arbeitsplätze weg, sondern erleichtert den Alltag. Sie übernimmt den monotonen, fehleranfälligen Teil." },
        { title: "Wir passen uns Ihren Abläufen an", text: "Wir liefern keine Standardsoftware, sondern eine Anwendung, die zu Ihrem Unternehmen passt und die wir auch nach der Einführung betreuen." },
        { title: "Bestehende Systeme bleiben", text: "Wir ergänzen Ihre bewährten Lösungen. Sie müssen nichts ersetzen, um Ihre Abläufe in Ordnung zu bringen." },
        { title: "Planbare Kosten", text: "Wir arbeiten mit einer festen, vorab vereinbarten Monatsgebühr. So sind die Kosten keine Überraschung, sondern ein planbarer Posten." },
      ],
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Sprechen wir darüber, was Sie heute am meisten Zeit kostet.",
      lead: "Ein kurzes, unverbindliches Gespräch. Die erste Analyse ist kostenlos.",
      note: "",
    },
  },

  // -------------------------------------------------------------------------
  contact: {
    title: "Kontakt: kostenlose Prozessanalyse | Yardly",
    description:
      "Fordern Sie eine kostenlose Analyse an: Wir prüfen Ihre Wartungs- und Betriebsabläufe und erstellen ein individuelles Angebot mit fester Monatsgebühr.",
    hero: {
      eyebrow: "Kontakt",
      title: "Nehmen Sie Kontakt mit uns auf.",
      lead: "Beschreiben Sie kurz, mit welchen Abläufen und Systemen Sie arbeiten. Wir melden uns bei Ihnen und vereinbaren ein Gespräch.",
    },
    stepsLabel: "Wie es weitergeht",
    steps: [
      { title: "Wir melden uns", text: "Gergő Maczák, der Gründer von Yardly, kontaktiert Sie persönlich." },
      { title: "Ein Gespräch", text: "Wir lernen Ihre Vorstellungen kennen und besprechen, wie Yardly helfen kann." },
      { title: "Kostenlose Analyse und Angebot", text: "Auf Basis Ihres genauen Bedarfs erstellen wir ein individuelles Angebot mit fester Monatsgebühr." },
    ],
    direct: [{ k: "E-Mail", email: true }, { k: "Sitz", v: "Budapest, Ungarn" }],
    form: {
      title: "Schreiben Sie uns",
      intro: "Das dauert nur wenige Minuten. Mit Sternchen markierte Felder sind Pflichtfelder.",
      name: "Name",
      email: "Geschäftliche E-Mail",
      company: "Unternehmen",
      role: "Position",
      size: "Unternehmensgröße",
      sizeSelect: "Bitte wählen…",
      sizes: ["Unter 50 Mitarbeitende", "50–149 Mitarbeitende", "150–499 Mitarbeitende", "500 oder mehr Mitarbeitende"],
      systems: "Welche Systeme sind betroffen?",
      systemsHint: "Mehrfachauswahl möglich",
      systemOptions: ["ERP", "Lagerverwaltung (WMS)", "Flotte, Fahrzeuge", "Geräteverwaltung", "Dokumentenverwaltung", "Excel-Tabellen", "Sonstiges"],
      message: "Welchen Ablauf würden Sie zuerst automatisieren?",
      placeholder: "Zum Beispiel: Wir führen die Staplerwartung in Excel, und jede Prüfung dauert einen halben Tag.",
      consent: "Ich willige ein, dass Yardly diese Angaben zur Beantwortung meiner Anfrage verwendet. Details in der",
      consentLink: "Datenschutzerklärung",
      submit: "Nachricht senden",
      note: "Unverbindlich.",
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        company: "Bitte geben Sie Ihr Unternehmen an.",
        size: "Bitte wählen Sie die Unternehmensgröße.",
        consent: "Für eine Antwort benötigen wir Ihre Einwilligung.",
      },
      sending: "Wird gesendet…",
      successTitle: "Vielen Dank, Ihre Nachricht ist angekommen.",
      successText: "Wir melden uns in Kürze, um ein Gespräch zu vereinbaren.",
      mailtoTitle: "Fast geschafft: Bitte noch senden.",
      mailtoText: "Wir haben Ihr E-Mail-Programm mit Ihrer Nachricht geöffnet. Falls es sich nicht geöffnet hat, schreiben Sie uns direkt an {email}.",
      errorText: "Ihre Nachricht konnte gerade nicht gesendet werden. Bitte schreiben Sie uns direkt an {email}.",
      mailSubject: "Anfrage über yardly.hu",
      back: "Zur Startseite",
    },
  },

  // -------------------------------------------------------------------------
  privacy: {
    title: "Datenschutzerklärung | Yardly",
    description: "Wie Yardly personenbezogene Daten verarbeitet, die auf dieser Website angegeben werden oder beim Besuch entstehen.",
    heading: "Datenschutzerklärung",
    intro: "Diese Erklärung gilt für die Website yardly.hu: für Angaben im Kontaktformular, Anfragen per E-Mail und die Besuchsmessung. Für Daten, die bei der Nutzung der Yardly-Anwendung verarbeitet werden, gilt eine eigene Erklärung.",
    body: `
<h2>1. Verantwortlicher</h2>
<p><mark class="ph">[Firmenname]</mark><br>Sitz: <mark class="ph">[Anschrift]</mark>, Budapest, Ungarn<br>Handelsregisternummer: <mark class="ph">[Nummer]</mark><br>Steuernummer: <mark class="ph">[Nummer]</mark><br>E-Mail: <a href="mailto:{email}">{email}</a></p>

<h2>2. Welche Daten wir verarbeiten</h2>
<h3>Kontaktformular und E-Mail</h3>
<p>Name, geschäftliche E-Mail-Adresse, Unternehmen, Position, Unternehmensgröße, betroffene Systeme und der Inhalt Ihrer Nachricht sowie alles, was Sie uns freiwillig per E-Mail mitteilen.</p>
<h3>Besuchsmessung (nur mit Einwilligung)</h3>
<p>Wenn Sie einwilligen, messen wir mit Cookies von Google Analytics, welche Seiten wie genutzt werden: aufgerufene Seiten, Zeitpunkt des Besuchs, Geräte- und Browsertyp sowie ungefährer Standort. Ohne Einwilligung werden keine solchen Cookies gesetzt.</p>
<h3>Technische Protokolle</h3>
<p>Die Server unseres Hosting-Anbieters protokollieren IP-Adresse und Zeitpunkt der Anfrage, um Seiten auszuliefern und Missbrauch abzuwehren.</p>

<h2>3. Zwecke und Rechtsgrundlagen</h2>
<ul>
<li><strong>Beantwortung von Anfragen, Angebotserstellung:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie vorvertragliche Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).</li>
<li><strong>Besuchsmessung:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.</li>
<li><strong>Technische Protokolle:</strong> unser berechtigtes Interesse am sicheren Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO).</li>
</ul>
<p><mark class="ph">[Rechtliche Prüfung: Rechtsgrundlagen bestätigen.]</mark></p>

<h2>4. Speicherdauer</h2>
<ul>
<li>Anfragen: <mark class="ph">[z. B. 1 Jahr ab Anfrage, bei Vertragsschluss bis zum Vertragsende]</mark>.</li>
<li>Analysedaten: gemäß Einstellung in Google Analytics, <mark class="ph">[2 oder 14 Monate]</mark>.</li>
<li>Technische Protokolle: <mark class="ph">[Speicherdauer]</mark>.</li>
</ul>

<h2>5. Wer Zugriff hat</h2>
<p>Zugriff haben Mitarbeitende von Yardly, soweit es für ihre Aufgaben erforderlich ist. Wir setzen folgende Dienstleister ein:</p>
<ul>
<li><strong>Amazon Web Services EMEA SARL</strong> (Luxemburg): Hosting und Betrieb der Website in der Region Frankfurt (EU).</li>
<li><strong>E-Mail-Dienstleister:</strong> <mark class="ph">[Name des Anbieters]</mark>, zur Zustellung von Nachrichten.</li>
<li><strong>Google Ireland Ltd.</strong>: Besuchsmessung, nur mit Ihrer Einwilligung. Daten können in die USA übermittelt werden; Google nimmt am EU-US Data Privacy Framework teil.</li>
</ul>
<p><mark class="ph">[Rechtliche Prüfung: Auftragsverarbeitungsverträge.]</mark></p>

<h2>6. Cookies</h2>
<p>Ihre Cookie-Entscheidung wird in Ihrem Browser gespeichert, ohne dafür ein Cookie zu verwenden. Mit Ihrer Einwilligung setzt Google Analytics die Cookies <code>_ga</code> und <code>_ga_*</code> für bis zu 2 Jahre. Über den Link „Cookie-Einstellungen“ am Seitenende können Sie Ihre Entscheidung jederzeit ändern.</p>

<h2>7. Ihre Rechte</h2>
<p>Sie können Auskunft über Ihre personenbezogenen Daten, deren Berichtigung, Löschung oder die Einschränkung der Verarbeitung verlangen, Ihr Recht auf Datenübertragbarkeit und Widerspruch ausüben und Ihre Einwilligung jederzeit widerrufen. Anfragen richten Sie bitte an <a href="mailto:{email}">{email}</a>.</p>

<h2>8. Beschwerderecht</h2>
<p>Sind Sie der Ansicht, dass die Verarbeitung rechtswidrig ist, können Sie sich bei der ungarischen Datenschutzbehörde beschweren (NAIH, Falk Miksa utca 9–11, 1055 Budapest, <a href="https://naih.hu" rel="noopener">naih.hu</a>) oder gerichtlich vorgehen.</p>

<p class="legal-meta">Gültig ab: <mark class="ph">[Datum]</mark></p>`,
  },

  imprint: {
    title: "Impressum | Yardly",
    description: "Angaben zum Betreiber der Website yardly.hu.",
    heading: "Impressum",
    intro: "Gemäß dem ungarischen Gesetz CVIII von 2001 über Dienste des elektronischen Geschäftsverkehrs.",
    body: `
<h2>Diensteanbieter</h2>
<dl class="legal-dl">
<div><dt>Firma</dt><dd><mark class="ph">[Firmenname]</mark></dd></div>
<div><dt>Sitz</dt><dd><mark class="ph">[Anschrift]</mark>, Budapest, Ungarn</dd></div>
<div><dt>Handelsregisternummer</dt><dd><mark class="ph">[Nummer]</mark></dd></div>
<div><dt>Registergericht</dt><dd><mark class="ph">[Firmengericht des Hauptstädtischen Gerichtshofs Budapest]</mark></dd></div>
<div><dt>Steuernummer</dt><dd><mark class="ph">[Nummer]</mark></dd></div>
<div><dt>Vertreten durch</dt><dd><mark class="ph">[Name]</mark></dd></div>
<div><dt>E-Mail</dt><dd><a href="mailto:{email}">{email}</a></dd></div>
</dl>
<h2>Hosting-Anbieter</h2>
<dl class="legal-dl">
<div><dt>Name</dt><dd>Amazon Web Services EMEA SARL</dd></div>
<div><dt>Anschrift</dt><dd>38 Avenue John F. Kennedy, L-1855 Luxembourg</dd></div>
<div><dt>Website</dt><dd><a href="https://aws.amazon.com" rel="noopener">aws.amazon.com</a></dd></div>
</dl>`,
  },

  notFound: {
    title: "Seite nicht gefunden | Yardly",
    eyebrow: "404",
    heading: "Diese Seite finden wir nicht.",
    text: "Vielleicht ist sie umgezogen, oder die Adresse enthält einen Tippfehler.",
    back: "Zur Startseite",
  },
};
