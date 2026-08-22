# Lizenzen — LISS Reinigungsservice

Stand: 2026-08-16 (3. Durchgang). Tabelle wird bei jedem neu hinzugefügten
Asset (Foto, Video, Schrift, Bibliothek) ergänzt — siehe `references/`-
Hinweis im Compliance-Skill: nichts wird als ✅ geführt, das nicht geprüft ist.

| Asset | Quelle / Herkunft | Lizenz | Web-/Kommerzielle Nutzung | Nachweis | KI-Kennzeichnung nötig? |
|---|---|---|---|---|---|
| `assets/fonts/archivo-variable.woff2`<br>`assets/fonts/jetbrains-mono-variable.woff2` | Google Fonts (fonts.gstatic.com), heruntergeladen und self-hosted am 2026-08-11 | SIL Open Font License 1.1 | Ja — Webfont-Einbettung und kommerzielle Nutzung ausdrücklich von der OFL erlaubt | `assets/fonts/LIZENZ.txt` (Volltext + Quelle + Datum) | Nein (keine KI-generierte Font) |
| `assets/vendor/gsap.min.js`<br>`assets/vendor/ScrollTrigger.min.js` | GreenSock/Webflow (vorher cdn.jsdelivr.net), heruntergeladen und self-hosted am 2026-08-16, Version 3.12.5 | Standard "No Charge" GSAP License | Ja — Website ohne Bezahlschranke für Endnutzer:innen fällt ausdrücklich unter die kostenlose Standardlizenz (kein "Business Club GSAP" nötig) | `assets/vendor/LIZENZ.txt` (Zusammenfassung + Quelle + Datum) | Nein (Bibliothekscode, kein KI-generierter Inhalt) |
| `assets/vendor/lenis.min.js` | darkroom.engineering (vorher cdn.jsdelivr.net), heruntergeladen und self-hosted am 2026-08-16, Version 1.1.18 | MIT License | Ja — MIT erlaubt uneingeschränkte kommerzielle Nutzung | `assets/vendor/LIZENZ.txt` (Volltext + Quelle) | Nein |
| `assets/hero.mp4` (+ `assets/hero-poster.jpg`) | KI-generiert mit Dreamina Seedance (Text-zu-Video) | Nutzungsbedingungen des Seedance/Dreamina-Anbieters — **Lizenznachweis (Screenshot der AGB zum Erstellungszeitpunkt bzw. Export/Beleg des Generierungsauftrags) fehlt noch, siehe `OFFENE-PUNKTE.md`** | Vorbehaltlich Prüfung der Anbieter-AGB auf kommerzielle Nutzung | ❌ noch nicht abgelegt | **Ja** — abstrakte Makroaufnahme eines Wassertropfens ohne reale Personen/Ereignisse; nach aktueller Einschätzung kein Deepfake-Fall im engen Sinn des Art. 50 KI-VO, aber die auf der Website gemachte Zusage in `datenschutz.html` Abschnitt 9 ("KI-generierte Inhalte werden entsprechend gekennzeichnet") ist einzulösen. Aktuell **keine sichtbare Kennzeichnung am Video selbst** — offener Punkt, siehe `OFFENE-PUNKTE.md`. |
| `assets/zusagen.mp4` (+ `assets/zusagen-poster.jpg`) | Vom Kunden am 2026-08-21 bereitgestellte Datei (`..._generated_video.MP4`, Dateiname deutet auf KI-Generierungstool hin) — **welches Tool erzeugt hat, ist nicht bekannt**, siehe `OFFENE-PUNKTE.md` | Unbekannt — **Nutzungsbedingungen des Erzeuger-Tools nicht geprüft, weil das Tool selbst noch nicht bekannt ist** | Ungeklärt, bis Quelle feststeht | ❌ nicht vorhanden | **Ja, voraussichtlich** — zeigt das LISS-Logo, das sich in Seifenblasen auflöst; kein Mensch im Bild (löst den früheren Konflikt mit dem Hand-Video, siehe `OFFENE-PUNKTE.md` Punkt 10). Bewegtes KI-generiertes Material fällt unabhängig vom Motiv unter die in `datenschutz.html` Abschnitt 9 gemachte Zusage. Aktuell **keine sichtbare Kennzeichnung** — offener Punkt. |
| ~~`assets/zusagen.mp4` (Hand-Video, bis 2026-08-21)~~ | Ersetzt — siehe Zeile oben. War KI-generiert, zeigte eine Hand beim Abwischen; der komplette Verlauf dieser Entscheidung bleibt in `OFFENE-PUNKTE.md` Punkt 10 dokumentiert (nicht gelöscht, nur nicht mehr live). |  |  |  |  |
| `assets/mark-blue.png`, `assets/mark-white.png` | Eigenes Logo/Signet (laut Projektkontext aus dem Original-Logo beschnitten) | Firmeneigenes Material | — | — | Nein |

## Ergänzend geprüft (informativ, kein Fund)

- Alle 12 HTML-Dateien wurden auf `fonts.googleapis.com`, `fonts.gstatic.com`,
  `use.fontawesome.com`, `cdnjs`, `unpkg` durchsucht — keine verbleibenden
  externen Font-CDN-Aufrufe.
- **Update 2026-08-16:** GSAP, ScrollTrigger und Lenis liefen bis dahin über
  `cdn.jsdelivr.net` (nur auf `index.html`). Jetzt self-hosted unter
  `assets/vendor/`, `<script src="...">` in `index.html` auf lokale Pfade
  umgestellt. Geprüft: `grep -rEo 'https?://[a-zA-Z0-9.-]+' *.html` über alle
  12 Dateien liefert **keinen Treffer mehr** — es gibt aktuell keine einzige
  externe Domain im gesamten Projekt.
