/* LEIS Reinigungsservice — Interaktion
   Parallax, Preisrechner, Scroll-Reveal, Navigation */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Parallax-Engine ----------
     data-px        vertikale Tiefe (0 = fest, 1 = doppelte Geschwindigkeit)
     data-px-x      horizontale Drift
     data-px-rot    Drehung in Grad je 1000 px Scrollweg
     data-px-scale  Maßstabsänderung über den Sichtbereich
     data-px-op     Ausblenden beim Verlassen des Sichtbereichs            */
  var pxEls = [], ticking = false, vh = window.innerHeight, mx = 0, my = 0;

  function collect() {
    pxEls = [].slice.call(document.querySelectorAll('[data-px]'));
    measure();
  }

  function measure() {
    vh = window.innerHeight;
    for (var i = 0; i < pxEls.length; i++) {
      var el = pxEls[i];
      var vis = el.offsetParent !== null || el.getClientRects().length;
      el.__anchor = vis ? el.getBoundingClientRect().top + window.scrollY : null;
    }
  }

  function paint() {
    var y = window.scrollY;
    for (var i = 0; i < pxEls.length; i++) {
      var el = pxEls[i];
      if (el.__anchor === null) continue;
      var rel = y + vh - el.__anchor;
      if (rel < -vh * 0.7 || rel > vh * 3.4) continue;
      var d = rel - vh;
      var ty = d * (parseFloat(el.dataset.px) || 0) * -1;
      var tx = d * (parseFloat(el.dataset.pxX || 0)) * -1;
      var t = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
      var rot = parseFloat(el.dataset.pxRot || 0);
      if (rot) t += ' rotate(' + (d / 1000 * rot).toFixed(2) + 'deg)';
      var sc = parseFloat(el.dataset.pxScale || 0);
      if (sc) t += ' scale(' + (1 + (d / vh) * sc).toFixed(3) + ')';
      el.style.transform = t;
      var op = parseFloat(el.dataset.pxOp || 0);
      if (op) el.style.opacity = Math.max(0, Math.min(1, 1 - Math.abs(d) / (vh * op)));
    }
    ticking = false;
  }

  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(paint); } }

  if (!reduced) {
    collect(); paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () { measure(); paint(); });
    window.addEventListener('load', function () { measure(); paint(); });
  }

  /* ---------- 2. Scroll-Reveal ---------- */
  var rvs = document.querySelectorAll('.rv');
  if (rvs.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      rvs.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      rvs.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- 3. Mobile Navigation ---------- */
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.mobnav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- 4. Sticky CTA (mobil) ---------- */
  var sticky = document.getElementById('sticky');
  if (sticky) {
    window.addEventListener('scroll', function () {
      sticky.classList.toggle('show', window.scrollY > 560);
    }, { passive: true });
  }

  /* ---------- 5. Preisrechner (mehrfach pro Seite möglich) ----------
     Staffelpreise: je größer die Fläche, desto niedriger der m²-Satz.
     Objektfaktor bildet den Aufwand ab (Praxis > Büro > Treppenhaus).   */
  function de(n, d) { return n.toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function rate(m) { return m < 150 ? 0.90 : m < 400 ? 0.75 : m < 800 ? 0.66 : 0.58; }

  function initCalc(root) {
    var q = function (sel) { return root.querySelector('[data-role=' + sel + ']'); };
    var qm = q('qm'); if (!qm) return;
    var objMul = 1, freqMul = 8.66, shown = 0;

    function countTo(el, target) {
      if (reduced) { el.textContent = de(target, 0); shown = target; return; }
      var start = shown, t0 = performance.now();
      (function tick(now) {
        var p = Math.min(((now || performance.now()) - t0) / 380, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = de(Math.round((start + (target - start) * e) / 10) * 10, 0);
        if (p < 1) requestAnimationFrame(tick); else shown = target;
      })(performance.now());
    }

    function render() {
      var m = +qm.value, r = rate(m) * objMul, perVisit = m * r;
      q('qmOut').textContent = de(m, 0);
      q('outEins').textContent = de(freqMul, 1);
      q('outQmPreis').textContent = de(r, 2) + ' €';
      q('outEinsatz').textContent = de(Math.round(perVisit), 0) + ' €';
      countTo(q('outMonat'), Math.round(perVisit * freqMul / 10) * 10);
    }

    qm.addEventListener('input', render);
    root.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () {
        c.parentElement.querySelectorAll('.chip').forEach(function (s2) { s2.setAttribute('aria-pressed', 'false'); });
        c.setAttribute('aria-pressed', 'true');
        if (c.dataset.obj) objMul = +c.dataset.obj; else freqMul = +c.dataset.freq;
        render();
      });
    });
    render();
  }

  document.querySelectorAll('.calc').forEach(initCalc);
  window.__lissInitCalc = initCalc;
  window.__lissMeasure = function () { if (!reduced) { collect(); paint(); } };
  window.__lissReduced = reduced;
})();

/* ============================================================
   TIEFENEBENEN — Ausbaustufe 2
   Blasenfeld, Wellenband, Fortschritt, Maus-Neigung,
   Wort-Einblendung und angeheftete Szene.
   ============================================================ */
(function () {
  var reduced = window.__lissReduced;

  /* --- Fortschrittsbalken --- */
  if (!reduced) {
    var bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);
    var raf = false;
    window.addEventListener('scroll', function () {
      if (raf) return; raf = true;
      requestAnimationFrame(function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
        raf = false;
      });
    }, { passive: true });
  }

  /* --- Blasenfeld: je Bühne ein paar Blasen in verschiedenen Tiefen --- */
  function bubbles(stage, n) {
    for (var i = 0; i < n; i++) {
      var shell = document.createElement('span');
      shell.className = 'bub';
      var size = 16 + Math.random() * 74;
      shell.style.width = shell.style.height = size.toFixed(0) + 'px';
      shell.style.left = (Math.random() * 100).toFixed(1) + '%';
      shell.style.top = (Math.random() * 105).toFixed(1) + '%';
      var depth = 0.10 + Math.random() * 0.46;
      shell.dataset.px = depth.toFixed(2);
      shell.dataset.pxX = ((Math.random() - 0.5) * 0.18).toFixed(3);
      shell.dataset.pxRot = (Math.random() * 44 - 22).toFixed(0);
      shell.style.opacity = (0.42 + depth * 0.7).toFixed(2);

      var core = document.createElement('b');
      core.style.setProperty('--dur', (8 + Math.random() * 9).toFixed(1) + 's');
      core.style.setProperty('--del', (-Math.random() * 8).toFixed(1) + 's');
      core.style.setProperty('--dx', ((Math.random() - 0.5) * 34).toFixed(0) + 'px');
      core.style.setProperty('--dy', (-14 - Math.random() * 30).toFixed(0) + 'px');
      core.style.setProperty('--sc', (1.03 + Math.random() * 0.09).toFixed(3));
      shell.appendChild(core);
      stage.appendChild(shell);
    }
  }

  /* --- Wellenband: drei Kurven, drei Geschwindigkeiten --- */
  function waves(stage) {
    var d = [
      'M0,64 C160,110 340,18 520,52 C700,86 860,140 1040,104 C1160,80 1280,44 1440,66 L1440,200 L0,200 Z',
      'M0,96 C180,52 360,132 560,110 C760,88 900,30 1100,62 C1240,84 1340,120 1440,102 L1440,200 L0,200 Z',
      'M0,132 C200,166 380,104 600,132 C820,160 980,120 1180,142 C1300,155 1380,168 1440,158 L1440,200 L0,200 Z'
    ];
    var fill = ['rgba(159,194,232,.52)', 'rgba(1,46,137,.24)', 'rgba(6,28,74,.15)'];
    var depth = ['0.16', '0.09', '0.04'];
    var svg = '<svg viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">';
    for (var i = 0; i < 3; i++) {
      svg += '<path class="w" data-px="' + depth[i] + '" data-px-x="' + (i % 2 ? 0.05 : -0.05) + '" d="' + d[i] + '" fill="' + fill[i] + '"/>';
    }
    svg += '</svg>';
    var box = document.createElement('div');
    box.className = 'waves';
    box.innerHTML = svg;
    stage.appendChild(box);
  }

  if (!reduced) {
    var small = window.innerWidth < 720;
    document.querySelectorAll('.hero.stage, .pagehead.stage').forEach(function (st) {
      var hasVid = st.classList.contains('hero') && window.LISS_HERO_VIDEO;
      bubbles(st, hasVid ? (small ? 5 : 9) : (small ? 9 : 18));
      waves(st);
    });
    document.querySelectorAll('section.stage').forEach(function (st) { bubbles(st, small ? 4 : 8); });
  }

  /* --- Maus-Neigung für die Rechnerkarte --- */
  if (!reduced && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.calc').forEach(function (c) { c.setAttribute('data-tilt', ''); });
    var tilts = document.querySelectorAll('[data-tilt]');
    window.addEventListener('mousemove', function (e) {
      var nx = (e.clientX / window.innerWidth - 0.5) * 2;
      var ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tilts.forEach(function (t) {
        t.style.transform = 'perspective(900px) rotateY(' + (nx * 3.2).toFixed(2) + 'deg) rotateX(' + (-ny * 2.4).toFixed(2) + 'deg) translateZ(0)';
      });
    }, { passive: true });
  }

  /* --- Überschriften Wort für Wort --- */
  function wordrise(scope) {
    (scope || document).querySelectorAll('.pagehead h1, .hero h1, .sec-head h2').forEach(function (h) {
      if (h.dataset.wr) return;
      h.dataset.wr = '1';
      if (reduced) { h.classList.add('wordrise', 'in'); return; }
      var frag = document.createDocumentFragment();
      function unit(node) {
        var sp = document.createElement('span'), it = document.createElement('i');
        it.appendChild(node); sp.appendChild(it); frag.appendChild(sp);
      }
      [].slice.call(h.childNodes).forEach(function (node) {
        if (node.nodeType === 3) {
          node.textContent.split(/(\s+)/).forEach(function (w) {
            if (/^\s*$/.test(w)) { if (w) frag.appendChild(document.createTextNode(' ')); }
            else unit(document.createTextNode(w));
          });
        } else { unit(node.cloneNode(true)); }
      });
      h.innerHTML = '';
      h.appendChild(frag);
      h.classList.add('wordrise');
      var idx = 0;
      h.querySelectorAll('i').forEach(function (i2) { i2.style.transitionDelay = (idx++ * 0.045).toFixed(3) + 's'; });
      if ('IntersectionObserver' in window) {
        var io3 = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io3.unobserve(e.target); } });
        }, { threshold: 0.2 });
        io3.observe(h);
      } else { h.classList.add('in'); }
    });
  }
  wordrise();
  window.__lissWordrise = wordrise;

  /* --- Angeheftete Szene: Text wechselt, Ebenen laufen --- */
  function scenes() {
    document.querySelectorAll('.scene-track').forEach(function (track) {
      if (track.dataset.bound) return;
      track.dataset.bound = '1';
      var steps = track.querySelectorAll('.scene-step');
      var rails = track.querySelectorAll('.scene-rail i');
      var nums = track.querySelectorAll('.scene-num');
      var busy = false;

      function upd() {
        var r = track.getBoundingClientRect();
        var total = track.offsetHeight - window.innerHeight;
        var p = Math.max(0, Math.min(1, -r.top / (total || 1)));
        var i = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
        steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
        rails.forEach(function (s, k) { s.classList.toggle('on', k === i); });
        nums.forEach(function (n, k) {
          n.style.transform = 'translate3d(' + (-p * (140 + k * 90)).toFixed(0) + 'px,' + (p * (40 - k * 60)).toFixed(0) + 'px,0) rotate(' + (p * (k ? -8 : 8)).toFixed(1) + 'deg)';
          n.style.opacity = (0.9 - Math.abs(p - (k + .5) / nums.length) * 1.4).toFixed(2);
        });
        busy = false;
      }
      window.addEventListener('scroll', function () {
        if (!busy) { busy = true; requestAnimationFrame(upd); }
      }, { passive: true });
      upd();
    });
  }
  if (!reduced) scenes(); else document.querySelectorAll('.scene-step').forEach(function (s) { s.classList.add('on'); });
  window.__lissScenes = scenes;
})();
