# Compliance-Status — LISS Reinigungsservice

Stand: **2026-08-16** (2. Durchgang, voller Re-Scan gegen den
de-website-compliance-Skill). Erster Durchgang: 2026-08-11. Nächste
Re-Prüfung: spätestens **2027-02-11** (alle 6 Monate) oder sofort bei jeder
neuen externen Einbindung (Analytics, Maps, Chat, weitere Fonts/Bibliotheken).

Dieser Prototyp ist **nicht** live geschaltet. Die Punkte unten sind der
Stand der technischen Umsetzung; sie ersetzen keine anwaltliche Prüfung
(siehe `impressum.html` und `datenschutz.html`, jeweils Hinweis-Box "Entwurf
für den Prototyp").

## Klassifizierung (Skill-Abschnitt 2)

Normaler Firmen-/Servicesite ohne Transaktion: `kontakt.html` sieht wie ein
Formular aus, überträgt aber technisch nichts (siehe unten) — kein
E-Commerce, keine Buchung, kein Login, kein UGC, keine Art.-9-Daten, keine
Kinder. Damit gelten nur die Kernabschnitte (Impressum, Datenschutz,
Cookies, Lizenzen, ggf. BFSG). `references/ecommerce.md` und
`references/spezialfaelle.md` sind nicht einschlägig.

## Status-Tabelle

| Bereich | Status | Bemerkung |
|---|---|---|
| Impressum-/Datenschutz-/AGB-Links im Footer | ✅ | Alle 12 Seiten verlinken auf `impressum.html`, `datenschutz.html`, `agb.html` statt auf `#`. |
| OS-Plattform-Hinweis (Streitschlichtung) | ✅ | Entfernt aus `impressum.html`. Verbleibt nur der § 36 VSBG-Satz. |
| „§ 5 TMG" | n/a | War nie vorhanden — `impressum.html` verweist korrekt auf § 5 DDG. |
| Schriftarten self-hosted | ✅ | Archivo + JetBrains Mono als Variable-Font-woff2 unter `assets/fonts/`, eingebunden über `assets/fonts/fonts.css`. Keine `fonts.googleapis.com`/`fonts.gstatic.com`-Aufrufe mehr, geprüft über alle 12 HTML-Dateien. |
| Schriftlizenz dokumentiert | ✅ | `assets/fonts/LIZENZ.txt` — SIL OFL 1.1, Volltext, Quelle, Ladedatum. |
| Datenschutz — „Schriftarten" | ✅ | Eindeutig: lokal ausgeliefert, keine Drittserver-Verbindung. |
| Datenschutz — „Bilder und Videos" | ✅ | Abschnitt 9: Eigenproduktion / Bilddatenbank / KI, mit Kennzeichnungs-Zusage. |
| **Datenschutz — „Eingebundene Skript-Bibliotheken" (NEU 08-16)** | ✅ | Neuer Abschnitt 10: legt die GSAP/ScrollTrigger/Lenis-Einbindung über jsDelivr auf `index.html` offen (Verbindung zu Drittserver, keine Cookies, Art. 6 Abs. 1 lit. f DSGVO). |
| **Interne Links (Footer + Nav) auf Existenz geprüft (NEU 08-16)** | ✅ | Alle `href="*.html"` in allen 12 Dateien gegen tatsächlich vorhandene Dateien geprüft — keine toten Links gefunden. |
| **Bilder ohne `alt` (NEU 08-16)** | ✅ | Alle `<img>` in allen 12 Dateien haben ein `alt`-Attribut. |
| **Formularfelder ohne Label (NEU 08-16)** | ✅ | Alle `<input>`/`<select>` (Preisrechner-Regler, Kontaktformular-Felder) haben `aria-label` bzw. verknüpftes `<label for>`. |
| **Überschriften-Struktur (NEU 08-16)** | ✅ | Genau ein `<h1>` pro Seite auf allen 12 Seiten. |
| **Analytics/Tracking/Maps/Captcha (NEU 08-16)** | ✅ | Keine Treffer für Google Analytics, Tag Manager, Maps, Hotjar, Facebook Pixel, reCAPTCHA/hCaptcha in keiner der 12 Dateien. |
| **Externe Domains gesamt (NEU 08-16)** | ⚠️ | Genau eine externe Domain im ganzen Projekt: `cdn.jsdelivr.net` (GSAP/ScrollTrigger/Lenis), ausschließlich auf `index.html`. Jetzt in Datenschutz offengelegt (s. o.). Self-Hosting wäre nach Skill-Vorgabe „Level A", wurde aber **nicht** automatisch umgesetzt, weil CDN-Einbindung in einem früheren Auftrag explizit so gewünscht war — Entscheidung liegt beim Nutzer, siehe `OFFENE-PUNKTE.md` Punkt 8. |
| Impressum — Firmendaten (Anschrift, USt-IdNr., Versicherer) | ❌ | Weiterhin Platzhalter. Ohne echte Kundendaten nicht zu schließen. Siehe `OFFENE-PUNKTE.md`. |
| Datenschutz — Hoster-Name | ❌ | `[Hoster]` weiterhin Platzhalter. Siehe `OFFENE-PUNKTE.md`. |
| Sichtbare KI-Kennzeichnung am Hero-Video selbst | ❌ | Zusage in Datenschutz Abschnitt 9 steht, ist aber am Video selbst noch nicht eingelöst. Layout/Markup war in beiden Durchgängen ausdrücklich nicht im Scope. Siehe `OFFENE-PUNKTE.md`. |
| **Kontaktformular funktionsfähig (VERSCHÄRFT 08-16)** | ❌ | Genauer geprüft als beim ersten Durchgang: `kontakt.html` hat kein `<form>` **und** `assets/site.js` hat keinerlei Click-Handler für den „Weiter"-Button — der Button tut buchstäblich nichts, Schritt 2/3 existieren gar nicht erst. Siehe `OFFENE-PUNKTE.md` Punkt 5. |
| Cookie-Consent-Banner | ❌ (n/a solange kein Tracking) | Aktuell werden laut Code keine Cookies/Tracking gesetzt. Muss neu geprüft werden, sobald echtes Hosting/Tracking/Analytics dazukommt. |
| Barrierefreiheitserklärung (BFSG) | — | Nicht abschließend geprüft. Grundlegende technische Barrierefreiheit (Alt-Texte, Labels, ein H1 pro Seite, Fokus-Stile aus vorherigem Design-Durchgang, `prefers-reduced-motion` respektiert) ist gegeben; formale Barrierefreiheitserklärung + Kleinstunternehmen-Ausnahme (< 10 MA **und** ≤ 2 Mio. € Umsatz) noch nicht bestätigt. |
| Rechtstexte fachlich geprüft | ❌ | Weiterhin als Entwurf markiert. Vor Launch: anwaltliche Prüfung bzw. lizenzierter Generator auf den Namen des Betreibers. |

## Blocker für einen Launch (nicht abschließend)

1. Platzhalter in `impressum.html` (Inhaber, Anschrift, USt-IdNr., Berufshaftpflicht-Versicherer, verantwortliche Person § 18 Abs. 2 MStV).
2. Platzhalter in `datenschutz.html` (Hoster-Name in Abschnitt 7).
3. Kontaktformular komplett funktionslos — nicht nur „ohne Backend", der „Weiter"-Button hat gar keinen Click-Handler.
4. Rechtstexte insgesamt noch nicht anwaltlich freigegeben.
5. BFSG-Anwendbarkeit nicht abschließend geklärt.
6. Entscheidung ausstehend: GSAP/ScrollTrigger/Lenis self-hosten statt CDN? (Kein Blocker im engeren Sinn, da jetzt offengelegt — aber empfohlen.)

## Änderungen im 2. Durchgang (2026-08-16)

- `datenschutz.html` — neuer Abschnitt 10 „Eingebundene Skript-Bibliotheken"
- `compliance/OFFENE-PUNKTE.md` — Punkt 5 (Kontaktformular) präzisiert, Punkt 8 (CDN) aktualisiert
- `compliance/COMPLIANCE.md` — dieser Re-Scan
- Vollständiger Audit ohne Codeänderung: interne Links, Alt-Texte, Formular-Labels, Überschriftenstruktur, Tracking-Scan — keine weiteren Blocker gefunden

## Änderungen im 1. Durchgang (2026-08-11)

- 12× `*.html` — Footer-Links (Impressum/Datenschutz/AGB), Font-Einbindung (`<link>` auf `assets/fonts/fonts.css` statt Google Fonts CDN)
- `impressum.html` — Streitschlichtung-Absatz gekürzt
- `datenschutz.html` — Abschnitt 8 präzisiert, Abschnitt 9 neu
- `assets/fonts/fonts.css`, `assets/fonts/archivo-variable.woff2`, `assets/fonts/jetbrains-mono-variable.woff2`, `assets/fonts/LIZENZ.txt` — neu
- `compliance/COMPLIANCE.md`, `compliance/LIZENZEN.md`, `compliance/OFFENE-PUNKTE.md` — neu

Nicht angefasst (wie beauftragt, beide Durchgänge): Layout/CSS, JS-Animationen,
Preisrechner, `hero.mp4` selbst, Leistungs- und Preistexte.
