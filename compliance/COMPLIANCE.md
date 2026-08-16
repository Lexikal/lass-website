# Compliance-Status — LISS Reinigungsservice

Stand: **2026-08-16** (3. Durchgang — Kontaktformular repariert,
GSAP/ScrollTrigger/Lenis self-hosted). 2. Durchgang (voller Re-Scan):
2026-08-16, 1. Durchgang: 2026-08-11. Nächste Re-Prüfung: spätestens
**2027-02-11** (alle 6 Monate) oder sofort bei jeder neuen externen
Einbindung (Analytics, Maps, Chat, weitere Fonts/Bibliotheken).

Dieser Prototyp ist **nicht** live geschaltet. Die Punkte unten sind der
Stand der technischen Umsetzung; sie ersetzen keine anwaltliche Prüfung
(siehe `impressum.html` und `datenschutz.html`, jeweils Hinweis-Box "Entwurf
für den Prototyp").

## Klassifizierung (Skill-Abschnitt 2)

Normaler Firmen-/Servicesite ohne Transaktion: `kontakt.html` sammelt Daten
client-seitig und übergibt sie per `mailto:` an das E-Mail-Programm der
Nutzer:in — kein serverseitiges Backend, kein E-Commerce, keine Buchung,
kein Login, kein UGC, keine Art.-9-Daten, keine Kinder. Damit gelten nur die
Kernabschnitte (Impressum, Datenschutz, Cookies, Lizenzen, ggf. BFSG).
`references/ecommerce.md` und `references/spezialfaelle.md` sind nicht
einschlägig.

## Status-Tabelle

| Bereich | Status | Bemerkung |
|---|---|---|
| Impressum-/Datenschutz-/AGB-Links im Footer | ✅ | Alle 12 Seiten verlinken auf `impressum.html`, `datenschutz.html`, `agb.html` statt auf `#`. |
| OS-Plattform-Hinweis (Streitschlichtung) | ✅ | Entfernt aus `impressum.html`. Verbleibt nur der § 36 VSBG-Satz. |
| „§ 5 TMG" | n/a | War nie vorhanden — `impressum.html` verweist korrekt auf § 5 DDG. |
| Schriftarten self-hosted | ✅ | Archivo + JetBrains Mono als Variable-Font-woff2 unter `assets/fonts/`, eingebunden über `assets/fonts/fonts.css`. |
| Schriftlizenz dokumentiert | ✅ | `assets/fonts/LIZENZ.txt` — SIL OFL 1.1, Volltext, Quelle, Ladedatum. |
| Datenschutz — „Schriftarten" | ✅ | Eindeutig: lokal ausgeliefert, keine Drittserver-Verbindung. |
| Datenschutz — „Bilder und Videos" | ✅ | Abschnitt 9: Eigenproduktion / Bilddatenbank / KI, mit Kennzeichnungs-Zusage. |
| Interne Links (Footer + Nav) auf Existenz geprüft | ✅ | Alle `href="*.html"` in allen 12 Dateien gegen tatsächlich vorhandene Dateien geprüft — keine toten Links. |
| Bilder ohne `alt` | ✅ | Alle `<img>` in allen 12 Dateien haben ein `alt`-Attribut. |
| Formularfelder ohne Label | ✅ | Alle `<input>`/`<select>` haben `aria-label` bzw. verknüpftes `<label for>`. |
| Überschriften-Struktur | ✅ | Genau ein `<h1>` pro Seite auf allen 12 Seiten. |
| Analytics/Tracking/Maps/Captcha | ✅ | Keine Treffer in keiner der 12 Dateien. |
| **GSAP/ScrollTrigger/Lenis self-hosted (NEU 08-16, 3. Durchgang)** | ✅ | Vorher `cdn.jsdelivr.net`, jetzt `assets/vendor/{gsap,ScrollTrigger,lenis}.min.js`, `index.html` lädt lokal. Lizenz: `assets/vendor/LIZENZ.txt` (GSAP Standard "No Charge" License + Lenis MIT). |
| **Externe Domains gesamt (NEU 08-16, 3. Durchgang)** | ✅ | `grep -rEo 'https?://[a-zA-Z0-9.-]+' *.html` über alle 12 Dateien: **kein Treffer.** Keine einzige externe Domain mehr im gesamten Projekt. |
| Datenschutz — „Skript-Bibliotheken" | ✅ | Abschnitt 10 korrigiert: lokal ausgeliefert, keine Drittserver-Verbindung (vorher: jsDelivr-Offenlegung, jetzt nicht mehr nötig, da self-hosted). |
| **Kontaktformular funktionsfähig (BEHOBEN 08-16, 3. Durchgang)** | ✅ | `kontakt.html` ist jetzt ein echtes `<form>` mit 3 funktionierenden Schritten (Objekt → Turnus → Kontakt), Pflichtfeld-Validierung pro Schritt, „Anfrage senden" öffnet das E-Mail-Programm mit vorausgefüllter Nachricht (`mailto:`). Getestet: leerer Klick auf „Weiter" wird blockiert, Zurück-Navigation funktioniert, Sabmit ohne Pflichtfelder wird blockiert. |
| Impressum — Firmendaten (Anschrift, USt-IdNr., Versicherer) | ❌ | Weiterhin Platzhalter. Ohne echte Kundendaten nicht zu schließen. Siehe `OFFENE-PUNKTE.md`. |
| Datenschutz — Hoster-Name | ❌ | `[Hoster]` weiterhin Platzhalter. Siehe `OFFENE-PUNKTE.md`. |
| Sichtbare KI-Kennzeichnung am Hero-Video selbst | ❌ | Zusage in Datenschutz Abschnitt 9 steht, ist aber am Video selbst noch nicht eingelöst. Siehe `OFFENE-PUNKTE.md`. |
| Kontaktformular — echtes Backend statt `mailto:`? | — (Entscheidung offen) | Button funktioniert jetzt vollständig; ob dauerhaft `mailto:` reicht oder ein serverseitiges Backend sinnvoller ist, bleibt eine offene Entscheidung. Siehe `OFFENE-PUNKTE.md` Punkt 5. |
| Cookie-Consent-Banner | ❌ (n/a solange kein Tracking) | Aktuell werden laut Code keine Cookies/Tracking gesetzt. Muss neu geprüft werden, sobald echtes Hosting/Tracking/Analytics dazukommt. |
| Barrierefreiheitserklärung (BFSG) | — | Nicht abschließend geprüft. Grundlegende technische Barrierefreiheit ist gegeben; formale Erklärung + Kleinstunternehmen-Ausnahme (< 10 MA **und** ≤ 2 Mio. € Umsatz) noch nicht bestätigt. |
| Rechtstexte fachlich geprüft | ❌ | Weiterhin als Entwurf markiert. Vor Launch: anwaltliche Prüfung bzw. lizenzierter Generator auf den Namen des Betreibers. |

## Blocker für einen Launch (nicht abschließend)

1. Platzhalter in `impressum.html` (Inhaber, Anschrift, USt-IdNr., Berufshaftpflicht-Versicherer, verantwortliche Person § 18 Abs. 2 MStV).
2. Platzhalter in `datenschutz.html` (Hoster-Name in Abschnitt 7).
3. Rechtstexte insgesamt noch nicht anwaltlich freigegeben.
4. BFSG-Anwendbarkeit nicht abschließend geklärt.
5. Lizenznachweis für `hero.mp4` (Seedance) fehlt noch, ebenso sichtbare KI-Kennzeichnung am Video selbst.

*Kein Blocker mehr:* Kontaktformular funktioniert (mailto:-Fallback), keine externen CDN-Verbindungen mehr.

## Änderungen im 3. Durchgang (2026-08-16)

- `kontakt.html` — Formular auf echtes `<form>` mit 3 funktionierenden Schritten umgebaut (Objekt/Turnus/Kontakt), Pflichtfelder, `mailto:`-Absenden.
- `assets/site.js` — `initContactForm()` neu: Schritt-Navigation, Validierung pro Schritt (Achtung: `hidden` auf einem Eltern-Element schließt verschachtelte `required`-Felder in Chromium NICHT automatisch von der Validierung aus — deshalb gezielte Pro-Schritt-Prüfung statt `form.reportValidity()` auf dem ganzen Formular).
- `assets/site.css` — `.form-nav` neu (Zurück/Weiter-Zeile); `.form label` verlor ein konkurrierendes `display:block`, das die `.field>label`-Flex-Regel (rechtsbündiges "optional" o. Ä.) für jedes Label in `.form` überschrieben hatte — vorher unsichtbar, weil kein Label in `.form` bislang einen `.fval`-Zusatz hatte.
- `assets/vendor/gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js`, `LIZENZ.txt` — neu, self-hosted statt `cdn.jsdelivr.net`.
- `index.html` — `<script src>` auf lokale `assets/vendor/`-Pfade umgestellt.
- `datenschutz.html` — Abschnitt 10 korrigiert (self-hosted statt jsDelivr-Offenlegung).
- `compliance/*.md` — dieser Durchgang dokumentiert.

## Änderungen im 2. Durchgang (2026-08-16)

- `datenschutz.html` — neuer Abschnitt 10 „Eingebundene Skript-Bibliotheken" (jsDelivr-Offenlegung, im 3. Durchgang wieder ersetzt, s. o.)
- Vollständiger Audit ohne Codeänderung: interne Links, Alt-Texte, Formular-Labels, Überschriftenstruktur, Tracking-Scan

## Änderungen im 1. Durchgang (2026-08-11)

- 12× `*.html` — Footer-Links (Impressum/Datenschutz/AGB), Font-Einbindung (`<link>` auf `assets/fonts/fonts.css` statt Google Fonts CDN)
- `impressum.html` — Streitschlichtung-Absatz gekürzt
- `datenschutz.html` — Abschnitt 8 präzisiert, Abschnitt 9 neu
- `assets/fonts/fonts.css`, `assets/fonts/archivo-variable.woff2`, `assets/fonts/jetbrains-mono-variable.woff2`, `assets/fonts/LIZENZ.txt` — neu
- `compliance/COMPLIANCE.md`, `compliance/LIZENZEN.md`, `compliance/OFFENE-PUNKTE.md` — neu

Nicht angefasst (wie beauftragt): Preisrechner-Logik/Preise, `hero.mp4`
selbst, Leistungs- und Preistexte, Layout/CSS/Animationen der anderen 11
Seiten außerhalb der beschriebenen `.form`-Korrektur.
