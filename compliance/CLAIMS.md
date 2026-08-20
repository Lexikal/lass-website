# Claims — Provenienz

Jede Aussage trägt genau einen Tag (siehe
`~/.claude/skills/website-factory/references/provenance.md`):
CLIENT_PROVIDED · SOURCE_VERIFIED · INFERRED · PLACEHOLDER · UNVERIFIED.

Nur CLIENT_PROVIDED und SOURCE_VERIFIED dürfen als Tatsache veröffentlicht
werden.

## Die drei zentralen Versprechen

### 1. Veröffentlichte Festpreise
> „Die meisten Wettbewerber schreiben „Preis auf Anfrage". LISS zeigt die
> Preisstaffel offen und hat einen Live-Rechner."

- **Tag:** CLIENT_PROVIDED
- **Beleg:** Positionierungsentscheidung aus `CLAUDE.md` (Abschnitt
  „Positionierung", Punkt 1). Die Preisstaffel selbst (0,90 €/m² unter
  150 m² bis 0,58 €/m² ab 800 m², Objekt- und Turnusfaktoren) ist in
  `assets/site.js` (`initCalc`) implementiert und auf `preise.html`
  veröffentlicht — die Zahl ist also technisch nachprüfbar, nicht nur
  behauptet.
- **Offen:** Die Aussage „die meisten Wettbewerber zeigen keinen Preis" ist
  eine Marktbeobachtung, kein bestätigter Fakt über konkrete Wettbewerber.
  Auf der Seite selbst wird kein Wettbewerbername genannt — unkritisch,
  solange das so bleibt (sonst würde daraus eine vergleichende Werbeaussage
  mit eigener UWG-Prüfpflicht).

### 2. 24-Stunden-Angebotszusage
> „Kein Vor-Ort-Termin nötig, um eine Zahl zu bekommen."

- **Tag:** CLIENT_PROVIDED
- **Beleg:** Positionierungsentscheidung aus `CLAUDE.md`. Auf `kontakt.html`
  und im Hero von `index.html` als Zusage kommuniziert.
- **Risiko:** Eine zeitgebundene Zusage („24 Stunden") ist eine der
  UWG-kritischsten Aussagearten, weil sie objektiv nachprüfbar und pro
  Einzelfall einklagbar ist. Muss operativ tatsächlich eingehalten werden,
  sobald die Seite live ist — sonst Abmahnrisiko. **Empfehlung:** vor
  Launch mit dem Kunden schriftlich bestätigen lassen, dass der Prozess das
  leisten kann (z. B. Kontaktformular → Angebot innerhalb 24h ist
  organisatorisch abgesichert, nicht nur Wunschziel).

### 3. Foto-Protokoll nach jedem Einsatz
> „Checkliste plus Fotos, das einzige nachprüfbare Qualitätsversprechen am
> Markt."

- **Tag:** CLIENT_PROVIDED (Leistungsversprechen) für den ersten Teil;
  **INFERRED → nicht veröffentlichungsfähig** für den Zusatz „das einzige
  … am Markt".
- **Beleg:** Positionierungsentscheidung aus `CLAUDE.md`, Punkt 3.
- **Offen / Blocker:** „das einzige nachprüfbare Qualitätsversprechen am
  Markt" ist eine Alleinstellungsbehauptung über den gesamten
  Hannoveraner Markt — dafür liegt keine Wettbewerbsanalyse
  (`research/competitors.json` o. Ä.) vor, die das belegt. Diese Aussage
  ist **intern als Positionierungs-Notiz akzeptabel, darf aber in dieser
  zugespitzten Form nicht wörtlich auf der Website stehen**, es sei denn,
  eine Marktrecherche bestätigt sie. Auf den geprüften Seiten (`index.html`,
  `leistungen.html`) wird das Foto-Protokoll bisher als eigenes Merkmal
  beschrieben, nicht ausdrücklich als „einzig am Markt" — das ist korrekt
  so und sollte auch bei künftigen Textänderungen so bleiben.

## Angeheftete Szene auf `index.html` (Einsatzablauf, Stand 2026-08-19)

Die Szene erzählt einen Einsatzabend (17:32 / 18:15 / 19:40 Uhr). Die
Uhrzeiten sind ausdrücklich **illustrativ**, keine zugesicherte Einsatzzeit —
sie liegen innerhalb des bereits veröffentlichten Fensters „vor 8 Uhr oder
ab 17 Uhr" (`bueroreinigung.html`, `leistungen.html`) und begründen keine
neue Zusage. Die übrigen Aussagen leiten sich aus bereits publizierten
Zusagen ab (Schlüsselübergabe: `index.html` Ablauf Schritt 03; Protokoll
binnen einer Stunde: `leistungen.html`; Checkliste mit Uhrzeit, Name und
Fotos: Positionierung in `CLAUDE.md`).

Zwei Aussagen sind **neu und damit prüfbare Prozesszusagen**:

| Aussage | Tag | Offen |
|---|---|---|
| „wird einzeln quittiert, nicht pauschal" — jede Position des Leistungsverzeichnisses wird einzeln abgehakt | CLIENT_PROVIDED (abgeleitet) | Vor Launch bestätigen lassen, dass das Protokoll tatsächlich positionsweise quittiert und nicht nur als Ganzes abgezeichnet wird |
| „antworten Sie einfach auf diese Mail — Ihr Reklamationsweg" | CLIENT_PROVIDED (abgeleitet) | Setzt voraus, dass die Absenderadresse des Protokolls tatsächlich antwortbar ist und Reklamationen dort ankommen |

Beide sind operativ einzuhalten, sobald die Seite live ist — siehe Risiko-
hinweis zur 24-Stunden-Zusage oben, dieselbe UWG-Logik gilt hier.

## Sonstige nicht auf der Seite verifizierte Zahlen

Firmenname, Marke und Farbpalette sind CLIENT_PROVIDED (siehe `CLAUDE.md`,
„Marke"). Adresse, Telefonnummer, USt-IdNr. und Inhaber-Name sind
**PLACEHOLDER** — siehe `OPEN-ITEMS.md`. Keine Zertifikate, Auszeichnungen,
Kundenzahlen oder Referenzobjekte werden aktuell behauptet — bei künftigen
Texten nicht ohne SOURCE_VERIFIED/CLIENT_PROVIDED-Beleg hinzufügen (siehe
Verbotsliste in `provenance.md`).
