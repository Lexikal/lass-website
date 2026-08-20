# Offene Punkte — blockierend für Launch

Format nach `~/.claude/skills/website-factory/templates/blockers.md`.

## BLOCKER-001
- **Fehlt:** Echter Inhaber-/Firmenname im Impressum (`impressum.html:45`
  — aktuell `[Vor- und Nachname]`)
- **Blockiert:** Live-Gang der gesamten Seite (§ 5 DDG-Pflichtangabe)
- **Blockiert NICHT:** internes Testen, Design-/Content-Arbeit an anderen
  Seiten
- **Benötigt von:** Kunde
- **Status:** OPEN

## BLOCKER-002
- **Fehlt:** Echte Geschäftsadresse (`impressum.html:45`, `datenschutz.html:45`
  sowie Footer aller 12 Seiten — aktuell „Musterstraße 1, 30159 Hannover")
- **Blockiert:** Live-Gang (§ 5 DDG-Pflichtangabe; Footer-Adresse ist zudem
  Bestandteil der Nutzererwartung, nicht nur rechtlich relevant)
- **Blockiert NICHT:** interne Vorschau
- **Benötigt von:** Kunde
- **Status:** OPEN

## BLOCKER-003
- **Fehlt:** Echte Telefonnummer (aktuell überall `+4951112345670` /
  „0511 · 1234 567-0" — Platzhalter, keine echte Rufnummer)
- **Blockiert:** Live-Gang. Eine nicht erreichbare Nummer verletzt zudem
  direkt das 24-Stunden-Angebotsversprechen (siehe `CLAIMS.md`, Punkt 2) —
  wenn Kunden anrufen und niemand rangeht, ist das ein Vertrauens- und
  potenziell UWG-Problem, nicht nur ein Impressum-Detail.
- **Blockiert NICHT:** interne Vorschau
- **Benötigt von:** Kunde
- **Status:** OPEN

## BLOCKER-004
- **Fehlt:** USt-IdNr. (`impressum.html:49` — aktuell
  „[USt-IdNr. eintragen]")
- **Blockiert:** Live-Gang (§ 27a UStG-Pflichtangabe, sofern vorhanden;
  falls die Firma noch keine USt-IdNr. hat, muss der Satz entsprechend
  umformuliert werden, nicht einfach gelöscht)
- **Blockiert NICHT:** interne Vorschau
- **Benötigt von:** Kunde
- **Status:** OPEN

## BLOCKER-005
- **Fehlt:** Anwaltliche Prüfung von `impressum.html`, `datenschutz.html`,
  `agb.html` — diese sind laut `CLAUDE.md` ausdrücklich Entwurfstexte
- **Blockiert:** öffentlichen Launch
- **Blockiert NICHT:** internes Review, Weiterarbeit an Design/Content
- **Benötigt von:** externe Rechtsberatung
- **Status:** OPEN

## BLOCKER-006
- **Fehlt:** Marktrecherche/Wettbewerbsanalyse, die die Zuspitzung „das
  einzige nachprüfbare Qualitätsversprechen am Markt" (Foto-Protokoll)
  stützt — siehe `CLAIMS.md`, Punkt 3
- **Blockiert:** Veröffentlichung dieser konkreten Formulierung auf der
  Website (aktuell ohnehin nicht wörtlich verwendet — Blocker ist präventiv,
  falls die Formulierung künftig in Texte übernommen wird)
- **Blockiert NICHT:** die schwächere, unbedenkliche Formulierung „Foto-
  Protokoll nach jedem Einsatz" ohne Alleinstellungsanspruch
- **Benötigt von:** Recherche (intern) oder Streichung der Zuspitzung
- **Status:** OPEN

## BLOCKER-007
- **Fehlt:** Bestätigtes Gründungsjahr. Auf der Seite stand an vier Stellen
  „2026" als Gründungs-/Startjahr (Hero-Eyebrow `index.html`, Meta-Description,
  Lead-Text und eine Kennzahl-Kachel auf `ueber-uns.html`). Beleg dafür gibt
  es keinen: `CLAUDE.md` sagt nur „neu gegründet", ohne Jahr — die Zahl war
  aus dem Erstellungsdatum der Website abgeleitet (INFERRED), nicht vom
  Kunden bestätigt.
- **Erledigt am 2026-08-20:** alle vier Stellen entfernt bzw. durch belegte
  Aussagen ersetzt. Die Kennzahl-Kachel trägt jetzt „0 € Zuschlag für
  Einsätze vor 8 und ab 17 Uhr" — das ist auf `faq.html` und
  `bueroreinigung.html` bereits veröffentlicht und damit belegbar.
- **Blockiert:** jede Wiederaufnahme einer „seit <Jahr>"-Aussage, auch in
  Schema.org (`foundingDate` ist deshalb bewusst nicht gesetzt).
- **Blockiert NICHT:** den Rest der Seite — die Aussage ist ersatzlos
  entfernt, es klafft keine Lücke.
- **Benötigt von:** Kunde (Datum der Gewerbeanmeldung bzw. Eintragung in die
  Handwerksrolle)
- **Status:** OPEN

## BLOCKER-008
- **Fehlt:** Deployment-Stand. Die öffentlich erreichbare Version unter
  `https://lexikal.github.io/lass-website/` ist am 2026-08-20 geprüft und
  **älter als der lokale Arbeitsstand**: Schriften-Selfhosting und
  Footer-Links sind dort vorhanden, die späteren Korrekturen (Formular,
  Stadtteil-Karten, Szene, Rechnerkarte, FAQ-Gruppierung) sowie
  `robots.txt`, `sitemap.xml` und das `noindex`-Meta **nicht**.
- **Blockiert:** die Wirksamkeit der Indexierungssperre — solange nicht
  deployt wird, ist die Live-Seite weiterhin uneingeschränkt indexierbar,
  inklusive Platzhalter-Impressum.
- **Blockiert NICHT:** die lokale Weiterarbeit.
- **Benötigt von:** Mensch (Commit + Push, lokal besteht kein Schreibzugriff
  auf das Repository)
- **Status:** OPEN

## Nicht blockierend, aber vermerkt

- 14 Stadtteilseiten (Mitte, Linden, Südstadt, Vahrenwald, Bothfeld,
  Ricklingen, Misburg, Kleefeld, Döhren, Herrenhausen, Langenhagen, Laatzen,
  Garbsen, Isernhagen) fehlen noch — `standorte.html` verlinkt sie aktuell
  bewusst auf `href="#"`. Bereits als offener Punkt in `CLAUDE.md` geführt,
  nicht Teil dieses Compliance-Durchgangs.
- Cookie-Consent-Banner aktuell nicht vorhanden — unkritisch, solange kein
  Tracking/Analytics eingebunden wird (Stand 2026-08-19 laut
  `validate.sh`-Prüfung 9: keine Tracking-Skripte gefunden). Sobald
  Analytics hinzukommt, wird das zum Blocker.
