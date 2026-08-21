# Handoff — LISS Reinigungsservice website

Stand: 2026-08-20. Geschrieben für den nächsten, der an diesem Projekt
weiterarbeitet — egal ob Mensch oder neue Claude-Code-Sitzung ohne
Gedächtnis an dieses Gespräch.

## 1. Goal

Static HTML/CSS/JS website for **LISS Reinigungsservice**, a newly founded
commercial cleaning company in Hannover, Germany (B2B: offices, medical
practices, stairwells, 80–1,500 m²). No framework, no build step — every
page opens directly in a browser. German market, German legal requirements
(Impressum, DSGVO, UWG) apply throughout.

This session specifically covered: installing/updating the internal
"website-factory" tooling, fixing a broken GitHub Pages deploy, a
discoverability/SEO pass (robots.txt, sitemap, structured data, unproven
claim removal), and adding a second scroll-driven background video to the
homepage.

## 2. Current State

- **Live site:** https://lexikal.github.io/lass-website/ — deliberately
  **not indexable** right now (`robots.txt` `Disallow: /` + `<meta
  name="robots" content="noindex,nofollow">` on all 12 pages). This is
  correct for the current stage: Impressum/Datenschutz still carry
  placeholder legal data, see §6.
- **Repo:** https://github.com/Lexikal/lass-website, branch `main`,
  `HEAD = 66e9fc0`. Deploys automatically via
  `.github/workflows/pages.yml` (GitHub Actions → Pages) on every push to
  `main`. Deploy confirmed working and verified live for the last two
  pushes.
- **Local working copy — the only one that matters:**
  `~/Downloads/lass-website`, a real `git clone` of the repo above.
  **`~/Downloads/lass-website-main` used to exist and is gone on purpose**
  (see §5) — it was a manually-copied, git-disconnected folder that caused
  a destructive push earlier in this session. Do not recreate it; do not
  treat any folder without a working `git remote -v` as authoritative for
  this project.
- `bash ~/.claude/scripts/validate.sh ~/Downloads/lass-website` currently
  reports 1 real, already-known finding (14 dead `href="#"` district-page
  links on `standorte.html`, intentional placeholder, see §6) plus 3
  findings that are false positives caused by the validator script's own
  stale assumptions — see §5.
- `compliance/OFFENE-PUNKTE.md` and `compliance/COMPLIANCE.md` are the
  maintained, authoritative status docs for this project — **read those
  first**, this file is a snapshot, they are the source of truth going
  forward.

## 3. Active Files

| File | Role |
|---|---|
| `index.html` | Homepage. Hero (`.hv`) uses GSAP + ScrollTrigger + Lenis, self-hosted under `assets/vendor/`, scroll-scrubbed `hero.mp4`. `LocalBusiness` JSON-LD in `<head>`. "Was anders läuft" section (`.zusagen`) now has a second scroll-scrubbed video, `zusagen.mp4`. |
| `assets/site.css` | Shared stylesheet for all 12 pages. New rules this session: `.zusagen-head`, `.zusagen-media`, `.zusagen-video`. |
| `assets/site.js` | Shared JS for all 12 pages (parallax, calculator, mobile nav). `index.html`'s GSAP block is separate, inline in the page, not in this file. |
| `assets/zusagen.mp4`, `assets/zusagen-poster.jpg` | New. Keyframe-dense H.264, 752×416, ~8s, no audio. |
| `assets/hero.mp4`, `assets/vendor/*` | Untouched this session — do not regenerate or "fix" these, they already work (keyframe-dense hero.mp4, self-hosted GSAP/ScrollTrigger/Lenis). |
| `robots.txt`, `sitemap.xml` | New this session. |
| `compliance/OFFENE-PUNKTE.md` | **Read this first.** Numbered open items, client-facing. Points 1–5 are questions only LISS can answer (real address, phone, VAT status, insurer, form backend). Points 6–10 are technical/compliance notes, including the AI-video risk (§6). |
| `compliance/COMPLIANCE.md` | Status table + security audit + code review, 5 passes so far, dated. |
| `compliance/LIZENZEN.md` | Asset licensing ledger (fonts, GSAP/Lenis, hero.mp4). **Not updated this session for `zusagen.mp4`** — see §6. |
| `kontakt.html` | Has its own working 3-step form (`id="kontaktForm"`, `initContactForm` in `site.js`), fixed 2026-08-16, **not touched this session**. |
| `faq.html`, `ueber-uns.html`, `standorte.html` | Have known, documented, unfixed issues carried over from before this session — see §6, not touched this session on the real repo. |
| `~/.claude/agents/*`, `~/.claude/skills/website-factory/*` | Global tooling (not part of this repo), installed/updated this session. |
| `~/.claude/scripts/validate.sh` | Global deterministic checker. Its compliance-file check expects `CLAIMS.md`/`OPEN-ITEMS.md`/`.agent/state.json` — this repo uses different names and no `.agent/` pipeline. Those 3 FAILs are noise, not bugs — see §5. |

## 4. Changes Made

All below is live on `main` and deployed.

**a) Website-factory tooling (global, not part of this repo)**
Installed `seo-audit-agent` into `~/.claude/agents/`, replaced
`~/.claude/skills/website-factory/SKILL.md` and `references/gates.md`
(added `DISCOVERABILITY_GATE`). Subagents only load at session start, so
`seo-audit-agent`'s work this session was done inline, following its
definition, rather than via an actual subagent dispatch.

**b) GitHub Pages deploy fix**
Diagnosed the workflow failure as `HttpError: Resource not accessible by
integration` on `actions/configure-pages`'s auto-create-site call — the
built-in `GITHUB_TOKEN` cannot create a brand-new Pages site via API. Fix
was manual: user enabled Settings → Pages → Source: "GitHub Actions" once;
after that the workflow succeeds on every push.

**c) Discoverability pass — commit `28f6ab7`**
- `robots.txt`: `Disallow: /`, `Sitemap:` line deliberately commented out
  until launch.
- `<meta name="robots" content="noindex,nofollow">` added to all 12 pages
  (needed in addition to `robots.txt` — `Disallow` alone doesn't reliably
  block indexing, and GitHub Pages doesn't allow custom
  `X-Robots-Tag` headers).
- `sitemap.xml`: all 12 pages, real `lastmod` dates, priority staggered by
  page role.
- `LocalBusiness` JSON-LD on `index.html` — **deliberately excludes**
  `address`, `telephone`, `foundingDate` (all still placeholders in
  Impressum; wrong structured data is worse than missing structured data).
- Removed the unsubstantiated "seit 2026" / founding-year claim from 3
  locations (`index.html` hero rail, `ueber-uns.html` meta description,
  lead paragraph, and a stat tile) — `CLAUDE.md` only says "newly founded",
  never gives a year. Replaced the stat tile with an already-published,
  verifiable claim instead of deleting it outright.

**d) Second video on the homepage — commit `66e9fc0`**
Added `assets/zusagen.mp4` (+ poster) to the `.zusagen-head` panel in "Was
anders läuft", scroll-scrubbed the same way as the hero water video. The
hero's inline scrub logic (decoder warm-up, seek de-duplication, stall
watchdog, loop fallback) was extracted into a shared `bindVideoScrub()`
function and reused for both videos instead of duplicating ~80 lines.

Encoded with `ffmpeg -g 1 -keyint_min 1 -sc_threshold 0 -crf 20 -movflags
+faststart` — same parameters as `hero.mp4` (found in that file's own
commit message). Result: 193/193 keyframes, smooth scrubbing confirmed.

The source video shows a gloved hand wiping a surface — an AI-generated
depiction of a person performing the actual sold service, which conflicts
with `CLAUDE.md`'s explicit "no AI-generated people" rule (§ 5 UWG risk).
This was flagged to the client before implementing. First version shipped
strongly abstracted (screen-blend + heavy darkening + color clamp) so no
recognizable hand remained — client picked this option initially. After
seeing it live, the client explicitly reversed the decision and asked for
the hand and wiping motion to be clearly visible. That version is what's
live now: video runs unprocessed, only a flat `rgba(6,28,74,.42)` navy
overlay for text contrast, plus `text-shadow` on the heading (new — no
other text on the site sits over moving video, so this is a first). The
conflict with `CLAUDE.md` is not resolved, it's knowingly overridden by
the client — documented in full, including the back-and-forth, in
`compliance/OFFENE-PUNKTE.md` point 10.

## 5. Failed Attempts

**Destructive push, reverted (commits `7e7e2fa` → `2e84b66`).** Deployed
from the stale `~/Downloads/lass-website-main` folder using `rsync
--delete` straight into a fresh clone, then pushed. That folder had
fallen far behind the real repo (someone/some earlier session had since
added self-hosted GSAP/ScrollTrigger/Lenis, re-encoded `hero.mp4` for
scroll-scrubbing, and written license documentation directly in the real
repo, none of which existed in the stale folder). The push deleted all of
that, including `.github/workflows/pages.yml` itself. Caught fast,
reverted with `git revert`, restoration verified live. **Lesson recorded
here on purpose:** never sync a disconnected local folder into a real repo
without diffing against the actual current `origin/main` first. This is
also why `~/Downloads/lass-website-main` was deleted afterward instead of
just being left around unused.

**First video treatment (screen-blend + `brightness(.26)` + 80% color
clamp).** Technically worked exactly as designed — the hand became
unrecognizable, matching the compromise the client picked at first — but
was the wrong call in hindsight for footage this bright; a technique built
for the hero's dark water footage doesn't transfer. Superseded by the
plain, unprocessed version once the client saw the result and asked for
the hand to stay visible (see §4d).

**125° diagonal gradient scrim.** First attempt at the current, visible
version used a diagonal gradient overlay instead of a flat one. On this
panel's actual proportions (short and wide) the gradient's math didn't
distribute the way it looked like it should on paper — most of the panel
stayed dark regardless. Confirmed by compositing a canvas snapshot of the
raw video frame with the CSS overlay applied server-side and inspecting
the result directly, rather than trusting the in-browser screenshot tool
(which was intermittently returning stale/blank frames this session).
Replaced with a flat, uniform `rgba(6,28,74,.42)` — predictable everywhere
in the panel.

**`brew install ffmpeg`.** Tried first; got stuck compiling `cmake` and
other build dependencies from source (~2 hours, no progress, older Intel
Mac with no prebuilt bottles available for several dependencies).
Abandoned mid-build, killed the process, downloaded a static ffmpeg
binary from evermeet.cx instead — working in under a minute.

**`validate.sh`'s compliance-file check.** The script (installed globally,
written against an earlier project's file-naming convention) looks for
`compliance/CLAIMS.md` and `compliance/OPEN-ITEMS.md`; this repo has
always used `compliance/LIZENZEN.md` and `compliance/OFFENE-PUNKTE.md`
instead, plus a `compliance/COMPLIANCE.md` the script doesn't credit
either way it should. Same for `.agent/state.json` — this repo was never
built through the website-factory pipeline, so that file has never
existed here. Net effect: `validate.sh` always reports 3 FAILs on this
repo that aren't real problems. Worth fixing the script itself at some
point, or accepting it'll always show that noise here.

**Plain `python3 -m http.server` for local testing.** Doesn't answer HTTP
Range requests, so any scroll-scrubbed `<video>` looks permanently frozen
at frame 0 in a local test — not a real bug, just an artifact of the test
server. A small custom Range-capable Python server was written and used
instead for all local video testing this session (not saved anywhere
permanent — recreate if needed, it's straightforward: a
`SimpleHTTPRequestHandler` subclass answering 206 Partial Content).

**Earlier-session design-audit fixes never reached the real repo.** Before
discovering that `~/Downloads/lass-website-main` was disconnected from
git, a round of fixes was built and tested there: contact-form rebuild,
`standorte.html` dead-card styling, FAQ thematic grouping, an `index.html`
"scene" copy rewrite, and an `ueber-uns.html` heading/count fix. None of
that exists on the real repo — some of it turned out to be redundant
anyway (the real `kontakt.html` already had its own, different, working
form from 2026-08-16), the rest is simply not done. See §6.

## 6. Next Steps

**Blocking real launch — needs answers from LISS, not code:**
`compliance/OFFENE-PUNKTE.md` points 1–4: real business address, owner
name, phone number, VAT ID or Kleinunternehmer (§19 UStG) status, hosting
provider name + server location, professional liability insurer name and
address. The file is written to be forwarded to the client as-is.

**Needs an actual legal answer, not another engineering pass:**
`compliance/OFFENE-PUNKTE.md` point 10 — whether `zusagen.mp4` (AI-generated,
recognizable person, shows the exact service being sold) can be published
at all in its current visible form. This is flagged, documented, and
currently live only because indexing is blocked — it must be resolved
before the `noindex` restriction comes off.

**Visible AI-content labeling — points 6 and 10, combined scope now:**
`datenschutz.html` §9 already promises visible labeling of AI-generated
content; neither `hero.mp4` nor `zusagen.mp4` carries any on-screen label
yet. Needs a design decision (on-video label vs. adjacent caption) before
implementation — was explicitly out of scope for layout changes in an
earlier task, so it's been deferred twice now.

**Known bugs, real repo, not yet fixed (carried over, not touched this
session):**
- `ueber-uns.html`: heading says "**Drei** Entscheidungen, die wir nicht
  zurücknehmen." directly above **four** `.step` items. Verified still
  present on `main` as of this write-up.
- `faq.html`: 12 questions plus 3 more on `bueroreinigung.html`, all still
  a flat list — no thematic grouping (the site already has an established
  grouped-list pattern, `.lv-grp`, that this could reuse).
- `standorte.html`: 14 of 15 district cards are intentionally non-clickable
  "in Vorbereitung" placeholders (real content requires real per-district
  data — deliberately not faked, see `CLAUDE.md`'s ban on invented
  reference objects). Still the single `validate.sh` finding on this repo.

**Smaller, tracked in `OFFENE-PUNKTE.md` point 9:**
favicon (currently 404 on every page), Open Graph / Twitter Card tags,
canonical URLs (hold off until a real domain replaces the GitHub Pages
URL), `FAQPage` schema for the 15 real Q&A entries.

**Housekeeping:**
`compliance/LIZENZEN.md` should get an entry for `zusagen.mp4` matching
the existing `hero.mp4` row (source: Seedance/Dreamina, generation proof
still missing for both — that gap is point 7, unresolved for `hero.mp4`
and now doubly relevant).

**For whoever/whatever picks this up next:** start by reading
`compliance/OFFENE-PUNKTE.md` and `compliance/COMPLIANCE.md` in full —
they're actively maintained and more current than this file will be by
the time you read it. Work only inside `~/Downloads/lass-website`; confirm
`git remote -v` points at `github.com/Lexikal/lass-website` before
assuming any local folder is safe to push from.
