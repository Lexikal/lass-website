# Entscheidungen

Format: eine Entscheidung pro Abschnitt. LOCKED heißt: nicht ohne Change
Request umkehren (siehe SKILL.md, Regel 4).

## D-001 · Launch-Stufe: Vorab-Stand, Indexierung gesperrt — LOCKED
- **Stand:** 2026-08-20
- **Entscheidung:** Die Seite läuft als Entwurf unter
  `https://lexikal.github.io/lass-website/` und soll **nicht** in Suchindizes
  erscheinen, solange die Rechtstexte Platzhalter enthalten und die
  anwaltliche Prüfung aussteht (siehe `compliance/OPEN-ITEMS.md`,
  BLOCKER-001 bis BLOCKER-005).
- **Umsetzung:** `robots.txt` mit `Disallow: /` **und**
  `<meta name="robots" content="noindex,nofollow">` in jeder HTML-Datei.
  Beides zusammen, weil `Disallow` allein das Crawlen verhindert, nicht
  zuverlässig die Indexierung — eine von außen verlinkte URL kann trotzdem
  ohne Snippet im Index landen. GitHub Pages erlaubt keine eigenen
  `X-Robots-Tag`-Header, deshalb ist das Meta-Tag hier der eigentliche
  Schutz.
- **Aufhebung beim Live-Gang:** `robots.txt` auf `Allow: /` umstellen,
  `Sitemap:`-Zeile einkommentieren, `noindex`-Meta aus allen Seiten
  entfernen. Erst wenn PRODUCTION_GATE steht.
- **Blockiert NICHT:** Entwicklung, Design, Vorschau durch den Kunden über
  den bestehenden Link.

## D-002 · Basis-URL für Sitemap und Canonicals — vorläufig
- **Stand:** 2026-08-20
- **Entscheidung:** `https://lexikal.github.io/lass-website/` als Basis-URL.
- **Vorläufig, weil:** eine eigene Domain noch nicht feststeht. Sobald sie
  existiert, müssen `sitemap.xml` und — falls dann gesetzt — alle
  Canonical-Tags umgestellt werden. Als offener Punkt geführt.
