# Lizenzen — LISS Reinigungsservice

Stand: 2026-08-11. Tabelle wird bei jedem neu hinzugefügten Asset (Foto,
Video, Schrift, Bibliothek) ergänzt — siehe `references/`-Hinweis im
Compliance-Skill: nichts wird als ✅ geführt, das nicht geprüft ist.

| Asset | Quelle / Herkunft | Lizenz | Web-/Kommerzielle Nutzung | Nachweis | KI-Kennzeichnung nötig? |
|---|---|---|---|---|---|
| `assets/fonts/archivo-variable.woff2`<br>`assets/fonts/jetbrains-mono-variable.woff2` | Google Fonts (fonts.gstatic.com), heruntergeladen und self-hosted am 2026-08-11 | SIL Open Font License 1.1 | Ja — Webfont-Einbettung und kommerzielle Nutzung ausdrücklich von der OFL erlaubt | `assets/fonts/LIZENZ.txt` (Volltext + Quelle + Datum) | Nein (keine KI-generierte Font) |
| `assets/hero.mp4` (+ `assets/hero-poster.jpg`) | KI-generiert mit Dreamina Seedance (Text-zu-Video) | Nutzungsbedingungen des Seedance/Dreamina-Anbieters — **Lizenznachweis (Screenshot der AGB zum Erstellungszeitpunkt bzw. Export/Beleg des Generierungsauftrags) fehlt noch, siehe `OFFENE-PUNKTE.md`** | Vorbehaltlich Prüfung der Anbieter-AGB auf kommerzielle Nutzung | ❌ noch nicht abgelegt | **Ja** — abstrakte Makroaufnahme eines Wassertropfens ohne reale Personen/Ereignisse; nach aktueller Einschätzung kein Deepfake-Fall im engen Sinn des Art. 50 KI-VO, aber die auf der Website gemachte Zusage in `datenschutz.html` Abschnitt 9 ("KI-generierte Inhalte werden entsprechend gekennzeichnet") ist einzulösen. Aktuell **keine sichtbare Kennzeichnung am Video selbst** — offener Punkt, siehe `OFFENE-PUNKTE.md`. |
| `assets/mark-blue.png`, `assets/mark-white.png` | Eigenes Logo/Signet (laut Projektkontext aus dem Original-Logo beschnitten) | Firmeneigenes Material | — | — | Nein |

## Ergänzend geprüft (informativ, kein Fund)

- Alle 12 HTML-Dateien wurden auf `fonts.googleapis.com`, `fonts.gstatic.com`,
  `use.fontawesome.com`, `cdnjs`, `unpkg` durchsucht — nach diesem Durchgang
  keine verbleibenden externen Font-CDN-Aufrufe mehr.
- `index.html` bindet zusätzlich GSAP, ScrollTrigger und Lenis über jsDelivr-
  CDN ein (aus einem vorherigen Auftrag, nicht Teil dieses Compliance-
  Durchgangs). Das sind **Skript**-Bibliotheken, keine Fonts — für sie gilt
  nicht das Google-Fonts-Urteil (LG München I, 3 O 17493/20), das sich auf
  personenbezogene IP-Übertragung beim Laden von Schriftdateien bezieht,
  wohl aber allgemein die DSGVO-Frage "Verbindung zu Drittservern beim
  Seitenaufruf". Das ist ein offener Punkt für eine spätere Prüfung, nicht
  Gegenstand des aktuellen Auftrags (siehe `OFFENE-PUNKTE.md`).
