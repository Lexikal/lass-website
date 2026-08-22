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
   die Abstraktion entfernt — das Video lief zunächst unbearbeitet, aber
   noch als Hintergrund hinter der Überschrift, mit einem Navy-Scrim für
   die Textlesbarkeit.
3. **Update 2026-08-21, zweiter Umbau:** Auch diese Anordnung war nicht das,
   was der Kunde wollte — er empfand die Überschrift-über-Video-Kombination
   als „Rahmen", in dem die Hand eingesperrt wirkte. Umgebaut: Überschrift
   stand auf normalem Seitenhintergrund, Video als eigenes, gerahmtes Feld
   direkt darunter (`border` + `border-radius` wie andere Karten der Seite).
4. **Update 2026-08-21, dritter Umbau:** Auch die Rahmen-Karte war nicht
   das gewünschte Bild — ausdrückliche Vorgabe war jetzt das Wasserband im
   Hero als Vorlage. Video läuft seitdem wie dort als vollflächiges
   Hintergrundfeld hinter der ganzen Sektion (nicht mehr Teil des Grids),
   links statt rechts verankert, per CSS-Maskenverlauf zur Textseite hin
   ausgeblendet — dieselbe Mechanik wie `.hv-media` im Hero, gespiegelt.
   **Wichtiger Unterschied zum Hero:** kein Screen-Blend, weil das
   Quellmaterial hell auf hellem Grund ist (weißer Handschuh/Tuch) —
   Screen-Blend gegen den hellen Seitenhintergrund hätte das Bild wie beim
   ersten Anlauf praktisch gelöscht. Stattdessen `mix-blend-mode:multiply`
   (dunkelt ab statt aufzuhellen) plus eine sehr leichte Markenblau-
   Farbklammer (`opacity:.18`, deutlich schwächer als im Hero) — Hand und
   Handschuh bleiben klar erkennbar, das war über alle drei Umbauten
   hinweg die einzige konstante, nicht verhandelbare Vorgabe des Kunden.
   Am Grundkonflikt (KI-generierte, erkennbare Hand, zeigt die verkaufte
   Leistung) ändert keine dieser drei Anordnungen etwas — nur die
   Lesbarkeits-Begründung von Punkt 2 entfällt seit Umbau 2, weil kein
   Text mehr direkt über sichtbaren Video-Pixeln liegt.
5. **Der CLAUDE.md-Konflikt besteht damit weiterhin, bewusst in Kauf
   genommen vom Kunden.** Diese Datei hält beide Seiten fest: das Risiko
   (§ 5 UWG, irreführende Darstellung eigenen Personals durch
   KI-generiertes Material) und die ausdrückliche Entscheidung, es
   trotzdem so zu veröffentlichen. Vor Launch der Rechtsprüfung
   ausdrücklich vorlegen, nicht stillschweigend durchlaufen lassen.

- [x] ~~Wie Punkt 6: sichtbare KI-Kennzeichnung fehlt noch für dieses
  Video~~ — nicht erledigt, aber siehe Update unten: das Video wurde
  ausgetauscht, dieser Punkt gilt jetzt für das neue Motiv weiter, siehe
  „Update 2026-08-21, Quellvideo ausgetauscht" am Ende dieses Abschnitts.
- [x] ~~Wie Punkt 7: Lizenznachweis/Generierungsbeleg~~ — dito, siehe
  Update unten.
- [x] **Vor Launch mit Rechtsberatung klären, ob das Video in dieser Form
  (erkennbare Person, KI-generiert, zeigt die verkaufte Leistung selbst)
  überhaupt veröffentlicht werden darf** — **gegenstandslos seit
  Video-Austausch 2026-08-21, siehe Update am Ende dieses Abschnitts:
  keine Person mehr im Bild.**

**Kundeneinwand (2026-08-21):** Auf die Rückfrage, ob der Punkt gestrichen
werden kann, weil auf dem Video nur eine Hand zu sehen ist — keine
identifizierbare Person, kein Gesicht — und deshalb niemand erkennen
könne, dass das Material KI-generiert ist. Einwand inhaltlich richtig
(die Hand ist tatsächlich nicht als bestimmte reale Person identifizierbar),
trifft aber nicht die beiden Risiken, die diesen Punkt begründen:

- **§ 5 UWG** hängt nicht an der Erkennbarkeit einer Person, sondern daran,
  dass dem Betrachter eine scheinbar echte Aufnahme der verkauften
  Leistung gezeigt wird, die tatsächlich synthetisch ist — eine
  Irreführung **kann** sich aus der Darstellung des Vorgangs ergeben,
  nicht aus der Identität der Hand. Das ist eine Wertungsfrage, kein
  feststehender Verstoß — genau deshalb bleibt der Punkt offen statt
  „erledigt" oder „gestrichen".
  Konkret verschärft wird dieses Risiko durch die Platzierung im Layout:
  Das Video läuft direkt neben Zusage „04 · NACHWEIS — Digitales
  Foto-Protokoll … Sie sehen die Leistung, auch wenn Sie nicht da sind"
  (`index.html`, `.zusagen-list`, vierter Punkt). Ausgerechnet in einem
  Abschnitt, dessen Aussage „Sie sehen die echte Leistung" ist, läuft ein
  synthetisches Bild einer nicht real stattgefundenen Reinigung — das ist
  das stärkste konkrete Argument für ein Irreführungsrisiko, deutlich
  konkreter als die abstrakte Vorgangs-Darstellung allein.
- **Art. 50 KI-VO** verlangt Kennzeichnung von KI-generiertem Video-/
  Audiomaterial unabhängig davon, ob eine abgebildete Person erkennbar
  ist — die Pflicht ist an die Herkunft des Materials geknüpft, nicht an
  Persönlichkeitsrechte.
- Zusätzlich: `datenschutz.html` §9 sagt bereits sichtbare KI-Kennzeichnung
  zu (Punkt 6/oben) — den Risikopunkt zu streichen, ohne diese Zusage
  einzulösen, würde einen Widerspruch innerhalb der Seite selbst schaffen.

**Offene Anschlussfrage, bisher nirgends dokumentiert:** Diente für die
Generierung von `zusagen.mp4` reales Referenzmaterial (Foto/Video einer
tatsächlichen Hand, z. B. img2video-Verfahren)? Falls ja, könnte trotz
„KI-generiert" das Persönlichkeitsrecht/§ 22 KUG der abgebildeten realen
Person greifen — unabhängig von UWG und KI-VO. Das ist aktuell nicht
geklärt und hängt an derselben Lücke wie Punkt 7 (fehlender
Generierungsbeleg für `zusagen.mp4` in `LIZENZEN.md`).

Punkt bleibt deshalb offen und ungestrichen. Kundenseitige Position ist
hier mit aufgenommen, damit die Rechtsberatung beide Seiten sieht — die
Entscheidung selbst liegt weiterhin bei ihr, nicht bei dieser Datei.

**Update 2026-08-21, Quellvideo ausgetauscht — Grundkonflikt entfällt:**
Der Kunde hat ein neues, selbst geliefertes Video eingesetzt: das
LISS-Logo, das sich in Seifenblasen auflöst. **Keine Person mehr im
Bild.** Damit entfällt der eigentliche Streitpunkt dieses Abschnitts
(§ 5 UWG/Art. 50 KI-VO/§ 22 KUG bezogen auf eine abgebildete Person) —
alle drei oben diskutierten Risiken hingen an der erkennbaren Hand, nicht
an bewegtem Bild allgemein. Technik (Vollflächen-Hintergrund, Masken-
verlauf, `mix-blend-mode:multiply`) unverändert übernommen, funktioniert
motivunabhängig.

Bleibt trotzdem offen, jetzt aus anderem Grund:
- [ ] **Neu, ungeklärt:** Das Logo im Video trägt die Unterzeile
  „Gebäudereinigung" — dieser Firmenname wurde laut `CLAUDE.md` bereits
  früher im Projekt verworfen zugunsten von „LISS Reinigungsservice"
  (so auch in der Kopfzeile der Seite: „Reinigungsservice Hannover").
  Muss mit dem Kunden geklärt werden: Video neu generieren ohne
  Unterzeile, Unterzeile im Bild kaschieren, oder bewusste Ausnahme?
- [ ] Sichtbare KI-Kennzeichnung (Punkt 6) bleibt offen — betrifft
  weiterhin alle drei Videos der Seite (Hero, dieses Video), unabhängig
  davon, ob eine Person zu sehen ist: Art. 50 KI-VO knüpft an die
  Herkunft des Materials an, nicht an den Bildinhalt.
- [ ] Lizenznachweis/Generierungsbeleg fehlt weiterhin, siehe
  `LIZENZEN.md` — neues Video braucht einen eigenen Eintrag, altes
  Hand-Video-Material kann aus `LIZENZEN.md` entfernt werden.

---

**Nächster Schritt:** Diese Datei eignet sich als Kundenfragebogen — die
Punkte 1–5 lassen sich 1:1 an LISS Reinigungsservice weiterreichen. Antworten
zurück, Platzhalter ersetzen, `COMPLIANCE.md` aktualisieren.
