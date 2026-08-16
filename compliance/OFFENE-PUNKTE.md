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

## 5. Kontaktformular ohne Backend

**Fakt geprüft im Code (`kontakt.html` + `assets/site.js`, Stand 2026-08-16):**
Es gibt kein `<form>`-Element, keine `action`, keinen Submit-Endpunkt. Der
„Weiter"-Button ist `<button class="btn btn--signal btn--full" type="button">`
— und `assets/site.js` enthält **keinerlei** Click-Handler dafür (geprüft:
kein Treffer für `form-steps`, `f-typ`, `f-qm`, `f-plz` im gesamten Skript).
Der Button ist damit nicht nur „ohne Backend", sondern aktuell komplett
funktionslos: ein Klick tut buchstäblich nichts, „Schritt 2 von 3" existiert
nicht einmal als UI. Wer bis hierhin kommt, kann die Anfrage über dieses
Formular gar nicht abschicken — nur per Telefon/E-Mail (linke Spalte auf der
Seite).

- [ ] Wohin sollen Anfragen tatsächlich gehen? Optionen, die geklärt werden müssen:
  - E-Mail-Versand serverseitig (z. B. über den Hoster, sobald der feststeht)
  - Formular-Service eines Drittanbieters (z. B. Formspree, Basin, eigenes Skript) — **falls Drittanbieter: eigener Datenschutz-Abschnitt + ggf. AVV nötig**, aktuell in `datenschutz.html` nicht vorgesehen
  - Direktes `mailto:`-Fallback (einfachste Lösung, aber ohne serverseitige Validierung/Spam-Schutz)
- [ ] Sobald ein echtes Backend dranhängt: `datenschutz.html` Abschnitt 4 „Anfrageformular und Preisrechner" gegenprüfen — der Text beschreibt bereits eine Verarbeitung, Löschfrist „sechs Monate" — muss zur tatsächlichen Implementierung passen.
- [ ] Spam-/Bot-Schutz für das Formular einplanen (Honeypot/Rate-Limit statt US-Captcha, siehe Compliance-Skill Abschnitt 12).

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

### 8. GSAP/ScrollTrigger/Lenis-CDN in `index.html` — Offenlegung erledigt, Self-Hosting noch offen

`index.html` lädt drei Skript-Bibliotheken von `cdn.jsdelivr.net`. Update
2026-08-16: **die fehlende Offenlegung ist behoben** — `datenschutz.html`
Abschnitt 10 „Eingebundene Skript-Bibliotheken" beschreibt jetzt genau diese
Verbindung.

Offen bleibt eine bewusste Entscheidung: Der Compliance-Skill verlangt unter
„Level A" eigentlich self-hosted statt externem CDN für genau solche
Bibliotheken — dieselbe Logik wie bei den Google Fonts. **Das wurde hier
nicht automatisch umgesetzt**, weil die CDN-Einbindung in einem früheren
Auftrag explizit so gewünscht wurde ("Подключи GSAP + ScrollTrigger + Lenis
через CDN … просто добавь script теги в head"). Ein automatisches
Rückgängigmachen einer expliziten früheren Anweisung wäre eigenmächtig —
daher hier nur vorbereitet, nicht ausgeführt:

- [ ] Entscheidung: GSAP/ScrollTrigger/Lenis zusätzlich self-hosten
  (wie bei den Fonts: Dateien unter `assets/` ablegen, `<script src="cdn...">`
  durch lokale Pfade ersetzen)? Technisch identisches Muster wie bei den
  Fonts, in wenigen Minuten machbar, sobald gewünscht.
- [ ] Falls CDN bewusst bleiben soll: aktueller Stand (Offenlegung in
  Datenschutz) ist ausreichend, kein weiterer Schritt nötig.

---

**Nächster Schritt:** Diese Datei eignet sich als Kundenfragebogen — die
Punkte 1–5 lassen sich 1:1 an LISS Reinigungsservice weiterreichen. Antworten
zurück, Platzhalter ersetzen, `COMPLIANCE.md` aktualisieren.
