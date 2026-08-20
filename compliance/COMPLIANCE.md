# Compliance-Modell — LISS Reinigungsservice

Stand: 2026-08-19 · Markt: Deutschland/EU · Segment: B2B

Dieses Dokument ist **keine Rechtsberatung**. Es hält fest, welche
Compliance-relevanten Entscheidungen getroffen wurden und was vor dem
Live-Gang noch offen ist. **Vor öffentlichem Launch muss die Seite von
einer Anwältin/einem Anwalt geprüft werden** — insbesondere Impressum,
Datenschutzerklärung und AGB (siehe `impressum.html`, `datenschutz.html`,
`agb.html`, dort bereits als Entwurf vermerkt).

## Externe Domains

| Domain | Zweck | Status |
|---|---|---|
| fonts.googleapis.com / fonts.gstatic.com | Web-Fonts (Archivo, JetBrains Mono) | **behoben 2026-08-19** — beide Schriften liegen jetzt lokal unter `assets/fonts/*.woff2`, keine Anfrage mehr an Google zur Ladezeit |

Kein Tracking, keine Analytics-Skripte, keine weiteren externen Ressourcen
gefunden (siehe `validate.sh`, Prüfung 1 und 9).

## Interne Verlinkung

Footer verlinkte bis 2026-08-19 Impressum/Datenschutz/AGB auf `href="#"`
statt auf die tatsächlichen Seiten — behoben auf allen 12 Seiten. Nach
§ 5 DDG muss das Impressum leicht erkennbar, unmittelbar erreichbar und
ständig verfügbar sein; ein toter Link verletzt das.

Öffnungszeiten und Adresse im Footer waren fälschlich als `<a href="#">`
ausgezeichnet (klickbar, aber ohne Ziel) — auf reinen Text umgestellt.

## Offene rechtliche Platzhalter

Siehe `OPEN-ITEMS.md` für die vollständige, blockierende Liste. Kurzfassung:
Impressum und Datenschutzerklärung enthalten noch Platzhalter-Firmendaten
(Inhaber-Name, Adresse, Telefonnummer, USt-IdNr.) — die Seite darf mit
diesen Platzhaltern **nicht live gehen**.

## Werbeaussagen (§ 5 UWG)

Drei zentrale Qualitätsversprechen der Seite sind nachprüfbare Aussagen im
Sinne des UWG — siehe `CLAIMS.md` für Herkunft und Beleg jeder einzelnen.
Keine der drei wurde in diesem Durchgang erfunden oder verschärft; sie
stammen aus der bestehenden Positionierung in `CLAUDE.md`.

## Zusammenfassung

| Bereich | Status |
|---|---|
| Externe Domains / DSGVO-Drittanfragen | ✅ behoben |
| Interne Pflicht-Verlinkung (Impressum etc.) | ✅ behoben |
| Impressum-Pflichtangaben vollständig | ❌ Platzhalter, siehe OPEN-ITEMS.md |
| Datenschutzerklärung vollständig | ❌ Platzhalter, siehe OPEN-ITEMS.md |
| AGB von Anwalt geprüft | ❌ noch nicht geprüft |
| Cookie-Consent | – kein Tracking vorhanden, daher aktuell nicht erforderlich |
| Werbeaussagen mit Provenienz belegt | ✅ siehe CLAIMS.md |

**Kein PRODUCTION_GATE-Pass** — offene Platzhalter blockieren den Live-Gang.
