# Compliance-Status — LISS Reinigungsservice

Stand: **2026-08-11**. Nächste Re-Prüfung: spätestens **2027-02-11** (alle 6
Monate) oder sofort bei jeder neuen externen Einbindung (Analytics, Maps,
Chat, weitere Fonts/Bibliotheken).

Dieser Prototyp ist **nicht** live geschaltet. Die Punkte unten sind der
Stand der technischen Umsetzung; sie ersetzen keine anwaltliche Prüfung
(siehe `impressum.html` und `datenschutz.html`, jeweils Hinweis-Box "Entwurf
für den Prototyp").

## Status-Tabelle

| Bereich | Status | Bemerkung |
|---|---|---|
| Impressum-/Datenschutz-/AGB-Links im Footer | ✅ | Alle 12 Seiten verlinken jetzt auf `impressum.html`, `datenschutz.html`, `agb.html` statt auf `#`. |
| OS-Plattform-Hinweis (Streitschlichtung) | ✅ | Verweis auf die (seit 20.07.2025 abgeschaltete) EU-OS-Plattform aus `impressum.html` entfernt. Verbleibt nur der § 36 VSBG-Satz. |
| „§ 5 TMG" | n/a | War nie vorhanden — `impressum.html` verweist bereits korrekt auf § 5 DDG. |
| Schriftarten self-hosted | ✅ | Archivo + JetBrains Mono liegen als Variable-Font-woff2 unter `assets/fonts/`, eingebunden über `assets/fonts/fonts.css`. Keine `fonts.googleapis.com`-/`fonts.gstatic.com`-Aufrufe mehr in den 12 HTML-Dateien. |
| Schriftlizenz dokumentiert | ✅ | `assets/fonts/LIZENZ.txt` — SIL OFL 1.1, Volltext, Quelle und Ladedatum vermerkt. |
| Datenschutz — Abschnitt „Schriftarten" | ✅ | Formuliert jetzt eindeutig: lokal ausgeliefert, keine Drittserver-Verbindung (Platzhalter-Klammer `[lokal / Google Fonts]` entfernt). |
| Datenschutz — Abschnitt „Bilder und Videos" | ✅ | Neuer Abschnitt 9 ergänzt: Eigenproduktion / Bilddatenbank / KI, mit Kennzeichnungs-Zusage. |
| `compliance/`-Ordner | ✅ | Dieses Verzeichnis, siehe `LIZENZEN.md` und `OFFENE-PUNKTE.md`. |
| Impressum — Firmendaten (Anschrift, USt-IdNr., Versicherer) | ❌ | Weiterhin Platzhalter. Siehe `OFFENE-PUNKTE.md` — kann ohne echte Kundendaten nicht geschlossen werden. |
| Datenschutz — Hoster-Name | ❌ | `[Hoster]` weiterhin Platzhalter. Siehe `OFFENE-PUNKTE.md`. |
| Sichtbare KI-Kennzeichnung am Hero-Video selbst | ❌ | Die Zusage in Datenschutz Abschnitt 9 ("werden entsprechend gekennzeichnet") ist noch nicht durch ein sichtbares Label am Video eingelöst — `hero.mp4` trägt aktuell keine On-Screen-Kennzeichnung. Layout/Markup war in diesem Durchgang ausdrücklich nicht im Scope. Siehe `OFFENE-PUNKTE.md`. |
| Kontaktformular ohne Backend | ❌ | `kontakt.html` enthält kein `<form>`, keinen Absende-Endpunkt (`type="button"`, keine `action`). Rein optische Vorlage. Siehe `OFFENE-PUNKTE.md`. |
| Cookie-Consent-Banner | ❌ | Nicht vorhanden. Aktuell werden laut Code auch keine Cookies/Tracking gesetzt (Datenschutz Abschnitt 6: „nur technisch notwendige Cookies", Reichweitenmessung „ausschließlich anonymisiert und ohne Cookies") — falls das zutrifft, ist ein Banner nicht zwingend nötig. Muss aber gegen den tatsächlichen Cookie-Einsatz geprüft werden, sobald echtes Hosting/Tracking dazukommt. Nicht Teil dieses Auftrags. |
| Barrierefreiheitserklärung (BFSG) | — | Nicht geprüft in diesem Durchgang. Kontaktformular verschiebt die Seite tendenziell in den BFSG-Anwendungsbereich (B2C-Dienstleistung mit elektronischem Geschäftsverkehr) — Kleinstunternehmen-Ausnahme (< 10 MA **und** ≤ 2 Mio. € Umsatz) noch nicht bestätigt. Separate Prüfung empfohlen. |
| Rechtstexte fachlich geprüft | ❌ | Alle Rechtstexte sind weiterhin als Entwurf markiert. Vor Launch: anwaltliche Prüfung bzw. lizenzierter Generator (eRecht24 / IT-Recht-Kanzlei / Trusted Shops) auf den Namen des Betreibers. |

## Blocker für einen Launch (nicht abschließend)

1. Platzhalter in `impressum.html` (Inhaber, Anschrift, USt-IdNr., Berufshaftpflicht-Versicherer, verantwortliche Person § 18 Abs. 2 MStV).
2. Platzhalter in `datenschutz.html` (Hoster-Name in Abschnitt 7).
3. Kein funktionierendes Kontaktformular — Anfragen aus `kontakt.html` gehen aktuell nirgendwo hin.
4. Rechtstexte insgesamt noch nicht anwaltlich freigegeben (steht so auch in den Hinweis-Boxen auf beiden Seiten).
5. BFSG-Anwendbarkeit nicht abschließend geklärt.

## In diesem Durchgang geänderte Dateien

- 12× `*.html` — Footer-Links (Impressum/Datenschutz/AGB), Font-Einbindung (`<link>` auf `assets/fonts/fonts.css` statt Google Fonts CDN)
- `impressum.html` — Streitschlichtung-Absatz gekürzt
- `datenschutz.html` — Abschnitt 8 präzisiert, Abschnitt 9 neu
- `assets/fonts/fonts.css`, `assets/fonts/archivo-variable.woff2`, `assets/fonts/jetbrains-mono-variable.woff2`, `assets/fonts/LIZENZ.txt` — neu
- `compliance/COMPLIANCE.md`, `compliance/LIZENZEN.md`, `compliance/OFFENE-PUNKTE.md` — neu

Nicht angefasst (wie beauftragt): Layout/CSS, JS-Animationen, Preisrechner,
`hero.mp4` selbst, Leistungs- und Preistexte.
