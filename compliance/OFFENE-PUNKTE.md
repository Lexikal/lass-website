# Offene Punkte — nur mit Kundendaten/-entscheidung zu schließen

Stand: 2026-08-11. Diese Punkte sind **keine** Bugs, die sich im Code lösen
lassen — sie brauchen eine Antwort oder Entscheidung von LISS
Reinigungsservice selbst. Bis dahin bleiben die betroffenen Textstellen
Platzhalter (`[...]`) und der Prototyp ist nicht launch-fähig.

## 1. Echte Firmendaten für `impressum.html`

- [ ] Ladungsfähige Anschrift (kein Postfach) — aktuell Platzhalter „Musterstraße 1, 30159 Hannover"
- [ ] Vor- und Nachname des/der Inhaber(s) bzw. Vertretungsberechtigten — aktuell `[Vor- und Nachname]` (zweimal: Diensteanbieter + § 18 Abs. 2 MStV)
- [ ] Rechtsform final bestätigen (aktuell als Einzelunternehmen/Inhaber formuliert)
- [ ] Reale Telefonnummer — aktuell `+4951112345670` / „0511 · 1234 567-0" ist ein Platzhalter, kein echter Anschluss

## 2. USt-IdNr. oder Kleinunternehmerstatus

- [ ] USt-IdNr. nach § 27a UStG vorhanden? Wenn ja: Nummer eintragen.
- [ ] Wenn nicht umsatzsteuerpflichtig (§ 19 UStG, Kleinunternehmer): Impressum entsprechend umformulieren statt Platzhalter stehen zu lassen — **eine leere/falsche USt-IdNr.-Zeile ist selbst ein Abmahngrund**, sie darf nicht einfach im Platzhalterzustand live gehen.

## 3. Name des Hosters

- [ ] `datenschutz.html`, Abschnitt 7 „Hosting": `[Hoster]` durch den tatsächlichen Anbieter ersetzen.
- [ ] Serverstandort bestätigen (Text behauptet aktuell „Deutschland" — muss stimmen oder angepasst werden).
- [ ] Auftragsverarbeitungsvertrag (Art. 28 DSGVO) mit dem Hoster tatsächlich abschließen — der Text behauptet bereits „liegt vor", das muss zum Zeitpunkt des Launches auch stimmen.

## 4. Berufshaftpflichtversicherer

- [ ] `impressum.html`: `[Versicherer]`, `[Anschrift]` — Name und Anschrift des Berufshaftpflichtversicherers eintragen (Pflichtangabe für Handwerksbetriebe, siehe Eintrag „Eingetragen in der Handwerksrolle der Handwerkskammer Hannover" auf derselben Seite).
- [ ] Falls die Handwerksrollen-Eintragung selbst noch nicht final ist: auch das gegenprüfen, bevor die Seite live geht.

## 5. Kontaktformular — Button-Funktion behoben (2026-08-16), Backend-Frage bleibt

**Update 2026-08-16 — behoben:** `kontakt.html` ist jetzt ein echtes
`<form id="kontaktForm">` mit drei Schritten (`.form-step[data-step="1|2|3"]`).
„Weiter"/„Zurück" funktionieren, Pflichtfelder werden pro Schritt geprüft
(`assets/site.js`, `initContactForm`), Turnus lässt sich wie im Preisrechner
per Chip auswählen. „Anfrage senden" ist jetzt `type="submit"` und öffnet
das E-Mail-Programm der Nutzer:in mit vorausgefüllter Betreffzeile und
Nachricht (`mailto:info@liss-reinigungsservice.de?subject=...&body=...`) —
das war bereits als „einfachste Lösung" hier dokumentiert und wurde jetzt
umgesetzt. Nichts wird ohne aktives Zutun der Nutzer:in verschickt.

**Weiterhin offen — bewusste Entscheidung, keine Bugfix-Frage mehr:**

- [ ] Reicht der `mailto:`-Fallback dauerhaft, oder soll ein echtes
  serverseitiges Backend dahinter (z. B. E-Mail-Versand über den Hoster,
  sobald der feststeht, oder ein Formular-Service wie Formspree/Basin)?
  Vorteile eines echten Backends: funktioniert auch ohne lokal
  eingerichtetes E-Mail-Programm, serverseitige Validierung, Spam-Schutz.
  — **Falls Drittanbieter-Service:** eigener Datenschutz-Abschnitt + ggf.
  AVV nötig, aktuell in `datenschutz.html` nicht vorgesehen.
- [ ] `datenschutz.html` Abschnitt 4 „Anfrageformular und Preisrechner"
  gegenprüfen, sobald klar ist, welcher Übertragungsweg dauerhaft gilt —
  der Text beschreibt bereits eine serverseitige Verarbeitung mit
  Löschfrist „sechs Monate", die beim reinen `mailto:`-Fallback so gar
  nicht stattfindet (die Anfrage geht direkt aus dem E-Mail-Programm der
  Nutzer:in an `info@liss-reinigungsservice.de`, LISS selbst verarbeitet
  sie dann wie jede normale E-Mail).

## Zusätzlich aufgefallen (nicht Teil der ursprünglichen 4 Punkte, aber direkt angrenzend)

### 6. Sichtbare KI-Kennzeichnung am Hero-Video

`datenschutz.html` Abschnitt 9 verspricht jetzt: „KI-generierte Inhalte
werden entsprechend gekennzeichnet." `assets/hero.mp4` ist laut
Projektkontext mit Seedance/Dreamina KI-generiert, trägt aber aktuell
**keine sichtbare Kennzeichnung im Video oder auf der Seite**. Layout/Markup
war in diesem Auftrag ausdrücklich ausgeschlossen ("Не трогай верстку"), daher
hier nur als offener Punkt vermerkt statt umgesetzt.

- [ ] Entscheiden: dezentes On-Screen-Label im Video selbst, oder Bildunterschrift/Hinweis neben dem Hero-Bereich im HTML?
- [ ] Bis dahin: Zusage in `datenschutz.html` Abschnitt 9 stimmt inhaltlich, ist aber technisch noch nicht eingelöst.

### 7. Lizenznachweis für `hero.mp4` selbst

Für die Google-Fonts-Dateien liegt jetzt ein Nachweis vor
(`assets/fonts/LIZENZ.txt`). Für `assets/hero.mp4` fehlt das Äquivalent:
Screenshot/Export der Seedance-Nutzungsbedingungen zum Erstellungszeitpunkt,
oder Beleg des Generierungsauftrags. Siehe `LIZENZEN.md`.

### 8. GSAP/ScrollTrigger/Lenis — self-hosted (erledigt 2026-08-16)

War: CDN-Einbindung über `cdn.jsdelivr.net`, bewusst nicht automatisch
geändert, weil in einem früheren Auftrag explizit CDN gewünscht war.

**Jetzt behoben, auf ausdrücklichen Wunsch:** Alle drei Dateien liegen unter
`assets/vendor/` (`gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js`),
`index.html` lädt sie lokal. `datenschutz.html` Abschnitt 10 wurde
entsprechend korrigiert (keine Drittserver-Verbindung mehr, statt vorheriger
jsDelivr-Offenlegung). Lizenznachweis: `assets/vendor/LIZENZ.txt`.
Verifiziert: `grep -rEo 'https?://[a-zA-Z0-9.-]+' *.html` über alle 12
HTML-Dateien liefert keinen Treffer mehr — keine externe Domain im gesamten
Projekt.

### 9. Discoverability-Grundlagen (erledigt 2026-08-20)

Bis dahin fehlten jede Steuerung der Indexierung und jede strukturierte
Auszeichnung — bei einem öffentlich erreichbaren Vorab-Stand mit
Platzhalter-Impressum ein eigenes Risiko, unabhängig von den Punkten 1–4.

**Jetzt behoben:**
- `robots.txt` (`Disallow: /`) + `<meta name="robots" content="noindex,nofollow">`
  auf allen 12 Seiten. Disallow allein verhindert nur das Crawlen, nicht
  zuverlässig die Indexierung; GitHub Pages erlaubt keine eigenen
  `X-Robots-Tag`-Header, daher beides zusammen.
- `sitemap.xml` mit allen 12 Seiten, vorbereitet für den Live-Gang, aber in
  `robots.txt` bewusst noch nicht referenziert.
- `LocalBusiness`-Schema.org auf `index.html`. **Bewusst ohne** `address`,
  `telephone` und `foundingDate` — siehe Punkt 1 unten, falsche NAP-Daten in
  strukturierten Daten sind schädlicher als fehlende.

**Nebenbefund, im selben Durchgang behoben:** Die Behauptung „seit 2026" /
„2026 in Hannover gegründet" stand an drei Stellen (`index.html`
Hero-Kennzeile, `ueber-uns.html` Meta-Description, Lead-Text und
Kennzahl-Kachel) ohne Beleg — dieses Projekt selbst nennt nur „neu
gegründete Gebäudereinigungsfirma", ohne Jahr. Alle vier Stellen entfernt
bzw. durch bereits anderswo veröffentlichte, belegbare Aussagen ersetzt
(„0 € Zuschlag für Einsätze vor 8 und ab 17 Uhr" — siehe `faq.html` und
`bueroreinigung.html`). Sobald das tatsächliche Gründungsdatum von LISS
vorliegt (Punkt 1), kann die Aussage mit Beleg wieder aufgenommen werden —
auch dann gehört sie in `foundingDate` im Schema.org-Block.

**Noch offen:**
- [ ] Canonical-Tags — erst sinnvoll, wenn die endgültige Domain feststeht
  (aktuell GitHub-Pages-URL, sonst müssten 12 Dateien zweimal geändert werden)
- [ ] Favicon fehlt komplett (404 auf jeder Seite)
- [ ] Open-Graph-/Twitter-Card-Tags fehlen (keine Vorschau beim Teilen des Links)
- [ ] `FAQPage`-Schema für die zwölf echten Fragen auf `faq.html` und die
  drei auf `bueroreinigung.html` — noch nicht ergänzt
- [ ] NAP (Name/Adresse/Telefon) kann erst vollständig ins Schema, wenn
  Punkt 1 unten geklärt ist

### 10. Zweites KI-generiertes Video — `assets/zusagen.mp4` (2026-08-20, korrigiert 2026-08-20)

Auf ausdrücklichen Wunsch in der Titelspalte von „Was anders läuft"
ergänzt, scroll-scrubbed wie das Hero-Wasserband, aber **ohne** dessen
Maskierungstechnik — siehe unten.

**Wichtig, unverändert:** Das Ausgangsmaterial zeigt eine Hand in
Einweghandschuh beim Abwischen einer Fläche — anders als die abstrakte
Wassertropfen-Aufnahme im Hero also **eine Person**, wenn auch nur Hand/
Arm. Nach `CLAUDE.md` („Keine KI-generierten Menschen ... Rechtlich heikel
unter § 5 UWG") wäre das Video in erkennbarer Form eigentlich nicht
einsetzbar.

**Verlauf der Entscheidung:**
1. Erster Durchgang: stark abstrahiert (Kontrast/Helligkeit/Screen-Blend
   so eingestellt, dass nur noch Licht und Bewegung erkennbar blieben,
   keine Hand mehr) — Kompromissvorschlag des Modells, vom Kunden zunächst
   auch so gewählt.
2. Nach Ansicht des Ergebnisses ausdrücklich zurückgewiesen: Kunde will
   die Hand und die Wischbewegung sichtbar. Auf diesen Wunsch hin wurde
   die Abstraktion entfernt — das Video läuft jetzt unbearbeitet, nur mit
   einem Navy-Verlauf als Lesbarkeits-Scrim hinter dem Text (siehe
   `site.css`, `.zusagen-media::after`).
3. **Der CLAUDE.md-Konflikt besteht damit weiterhin, bewusst in Kauf
   genommen vom Kunden.** Diese Datei hält beide Seiten fest: das Risiko
   (§ 5 UWG, irreführende Darstellung eigenen Personals durch
   KI-generiertes Material) und die ausdrückliche Entscheidung, es
   trotzdem so zu veröffentlichen. Vor Launch der Rechtsprüfung
   ausdrücklich vorlegen, nicht stillschweigend durchlaufen lassen.

- [ ] Wie Punkt 6: sichtbare KI-Kennzeichnung fehlt noch für dieses Video
  (dieselbe Zusage in `datenschutz.html` Abschnitt 9 betrifft jetzt zwei
  statt ein Video) — bei einem sichtbaren statt abstrahierten Video umso
  dringlicher.
- [ ] Wie Punkt 7: Lizenznachweis/Generierungsbeleg fehlt noch, siehe
  `LIZENZEN.md`.
- [ ] **Vor Launch mit Rechtsberatung klären, ob das Video in dieser Form
  (erkennbare Person, KI-generiert, zeigt die verkaufte Leistung selbst)
  überhaupt veröffentlicht werden darf** — keine Umsetzungsfrage mehr,
  sondern eine Rechtsfrage. Bis dahin bewusst live im Vorab-Stand, der
  ohnehin per `robots.txt`/`noindex` von der Indexierung ausgenommen ist.

---

**Nächster Schritt:** Diese Datei eignet sich als Kundenfragebogen — die
Punkte 1–5 lassen sich 1:1 an LISS Reinigungsservice weiterreichen. Antworten
zurück, Platzhalter ersetzen, `COMPLIANCE.md` aktualisieren.
