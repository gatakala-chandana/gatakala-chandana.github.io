/* Qnet mobile layer — app bar, drawer, bottom tabs and a responsive pass over the
   desktop layouts. Runs only below 769px; desktop rendering is never touched. */
(function () {
  var MQ = window.matchMedia('(max-width: 768px)');
  var startedMobile = MQ.matches;
  // Crossing the breakpoint after load: reload so the right layout is built cleanly.
  var onMQ = function () { if (MQ.matches !== startedMobile) location.reload(); };
  if (MQ.addEventListener) MQ.addEventListener('change', onMQ); else if (MQ.addListener) MQ.addListener(onMQ);
  if (!startedMobile) return;

  var root = document.documentElement;
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (!/\.html$/.test(page)) page = 'index.html';

  var I = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    home: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    check: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'
  };
  function svg(p) { return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; }

  var TABS = [
    ['dashboard.html', 'Home', 'home', ['dashboard.html', 'metrics.html']],
    ['quality-issues.html', 'Issues', 'bell', ['quality-issues.html', 'quality-issue-report.html', 'respond-to-issue.html']],
    ['action-center.html', 'Checklist', 'check', ['action-center.html']],
    ['part-management.html', 'Parts', 'box', ['part-management.html']]
  ];

  function buildChrome() {
    if (document.getElementById('qn-mbar')) return;
    var aside = document.querySelector('aside[aria-label="Primary"]');
    if (!aside) { root.classList.add('qn-auth'); return; }
    root.classList.add('qn-app');

    var label = (document.querySelector('[data-screen-label]') || {}).getAttribute ? document.querySelector('[data-screen-label]').getAttribute('data-screen-label') : '';
    var bar = document.createElement('div');
    bar.id = 'qn-mbar';
    bar.innerHTML = '<button type="button" aria-label="Open menu" aria-expanded="false" data-qn-open>' + svg(I.menu) + '</button>' +
      '<a class="qn-logo" href="dashboard.html" aria-label="Qnet home">QNET</a>' +
      '<span class="qn-title"></span>' +
      '<a class="qn-av" href="account.html" aria-label="Account">DB</a>';
    bar.querySelector('.qn-title').textContent = label || document.title.replace(/^Qnet · /, '');
    document.body.appendChild(bar);

    var scrim = document.createElement('div');
    scrim.id = 'qn-scrim'; scrim.setAttribute('aria-hidden', 'true');
    document.body.appendChild(scrim);

    var tabs = document.createElement('nav');
    tabs.id = 'qn-tabs'; tabs.setAttribute('aria-label', 'Main');
    var h = '';
    TABS.forEach(function (t) {
      var on = t[3].indexOf(page) >= 0;
      h += '<a href="' + t[0] + '"' + (on ? ' aria-current="page"' : '') + '>' + svg(I[t[2]]) + '<span>' + t[1] + '</span></a>';
    });
    var moreOn = !TABS.some(function (t) { return t[3].indexOf(page) >= 0; });
    h += '<button type="button" data-qn-open' + (moreOn ? ' aria-current="page"' : '') + '>' + svg(I.more) + '<span>More</span></button>';
    tabs.innerHTML = h;
    document.body.appendChild(tabs);
  }

  function setDrawer(open) {
    root.classList.toggle('qn-drawer', open);
    var b = document.querySelector('#qn-mbar [data-qn-open]');
    if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest && t.closest('[data-qn-open]')) { setDrawer(!root.classList.contains('qn-drawer')); return; }
    if (t.id === 'qn-scrim') { setDrawer(false); return; }
    if (root.classList.contains('qn-drawer') && t.closest && t.closest('aside[aria-label="Primary"] a')) setDrawer(false);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  /* ---- responsive pass over the desktop layout ---- */
  var W = function () { return window.innerWidth; };
  function px(v) { return parseFloat(v) || 0; }

  function fixGrid(el, cs) {
    if (el.hasAttribute('data-qn-keep')) return;
    var tracks = cs.gridTemplateColumns.split(' ').filter(function (s) { return /px$/.test(s); }).map(px);
    var n = tracks.length;
    if (n < 2) return;
    if (n === 7 || n >= 8) { // week/calendar strips keep their columns
      el.style.minWidth = '0'; return;
    }
    var min = Math.min.apply(null, tracks);
    var tallest = 0;
    for (var tk = 0; tk < el.children.length; tk++) tallest = Math.max(tallest, el.children[tk].offsetHeight);
    // a wide label column followed by narrow control columns (toggle matrices) stays as is
    var rest = tracks.slice(1); if (rest.every(function (w) { return w <= 100; }) && tracks[0] > Math.max.apply(null, rest)) return;
    if (min >= 132 && !(min < 200 && tallest > 150)) return;
    // kanban boards (tall lanes) become a sideways swipe, one lane per screen
    var lanes = 0;
    for (var b = 0; b < el.children.length; b++) if (el.children[b].offsetHeight > 900) lanes++;
    if (n >= 3 && lanes >= n - 1) { el.setAttribute('data-qn-board', ''); return; }
    var kids = el.children.length;
    // compact tiles (stats, chips, small cards) read well two-up
    var tall = 0;
    for (var i = 0; i < el.children.length; i++) tall = Math.max(tall, el.children[i].offsetHeight);
    var two = n >= 3 && tall > 0 && tall < 120 && kids >= 3;
    el.style.gridTemplateColumns = two ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)';
    if (!two) { el.style.gridColumn = el.style.gridColumn; }
    for (var j = 0; j < el.children.length; j++) {
      var c = el.children[j];
      if (c.style && c.style.gridColumn && !two) c.style.gridColumn = 'auto';
    }
  }

  function isTabRow(el) {
    if (el.getAttribute('role') === 'tablist') return true;
    var k = el.children, chips = 0;
    for (var i = 0; i < k.length; i++) {
      var r = k[i].getAttribute && k[i].getAttribute('role');
      if (r === 'tab' || r === 'radio' || k[i].tagName === 'BUTTON' || k[i].tagName === 'A') chips++;
    }
    return k.length >= 3 && chips >= k.length - 1;
  }

  function pass() {
    var scope = document.querySelector('[data-screen-label]');
    if (!scope) return;
    buildChrome();
    if (!root.classList.contains('qn-app')) { authPass(scope); return; }

    var vw = W();
    var ov = !!scope.querySelector('[role="dialog"], [data-qn-backdrop]');
    root.classList.toggle('qn-overlay', ov);
    var all = scope.querySelectorAll('*');
    // desktop header row (breadcrumb + user) — hidden, the app bar replaces it
    var crumb = scope.querySelector('nav[aria-label="Breadcrumb"]');
    if (crumb) {
      var hd = crumb.parentElement;
      while (hd && hd.parentElement && hd.parentElement.tagName !== 'MAIN' && hd.offsetWidth < vw * 0.9) hd = hd.parentElement;
      if (hd && !hd.querySelector('h1') && hd.offsetHeight < 90) hd.setAttribute('data-qn-deskhead', '');
    }
    scope.querySelectorAll('table').forEach(cardTable);
    gridTables(scope);
    scope.querySelectorAll('div,span').forEach(function (d) {
      if (d.children.length === 0 && /^on this page$/i.test(d.textContent.trim())) { var nv = d.closest('nav') || d.parentElement.parentElement; if (nv) nv.setAttribute('data-qn-mhide', ''); }
    });
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      if (el.closest('aside[aria-label="Primary"]')) continue;
      var st = el.getAttribute('style') || '';
      if (!st) continue;
      var cs = getComputedStyle(el);
      if (cs.display === 'grid' || cs.display === 'inline-grid') fixGrid(el, cs);
      // big fixed minimums
      if (px(cs.minWidth) > vw - 32 && !el.closest('[data-qn-hscroll],[data-qn-tablewrap]')) el.style.minWidth = '0';
      // gutters
      if (cs.position === 'fixed' && cs.left === '0px' && cs.right === '0px' && cs.top === '0px' && cs.bottom === '0px') { el.setAttribute('data-qn-backdrop', ''); continue; }
      if (cs.position === 'sticky' && cs.bottom === '0px') el.setAttribute('data-qn-stickybottom', '');
      if (cs.position !== 'fixed' && (px(cs.paddingLeft) >= 24 || px(cs.paddingRight) >= 24) && el.offsetWidth >= vw * 0.8 && !/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName)) el.setAttribute('data-qn-pad', '');
      if (px(cs.paddingTop) >= 32 && el.offsetWidth >= vw * 0.9 && el.tagName !== 'BUTTON') el.setAttribute('data-qn-pad-top', '');
      // fixed widths wider than the screen
      if (/(^|;)\s*width:\s*\d{3,}px/.test(st) && px(cs.width) > vw - 24 && cs.position !== 'fixed') { el.style.width = '100%'; el.style.maxWidth = '100%'; }
      // overlays
      if (cs.position === 'fixed' || cs.position === 'absolute') {
        var r = el.getBoundingClientRect();
        if (r.width > vw - 24 || px(cs.width) > vw - 24) {
          if (Math.abs(r.right - vw) < 2 || cs.right === '0px') el.setAttribute('data-qn-sheet', '');
          else if (el.closest('[role="dialog"]') || el.getAttribute('role') === 'dialog' || px(cs.zIndex) > 10) el.setAttribute('data-qn-modal', '');
        }
      }
    }
    // squeezed flex columns: a growing column left with too little room stacks under its siblings
    for (var q = 0; q < all.length; q++) {
      var row = all[q];
      if (!row.isConnected || row.closest('aside[aria-label="Primary"],[data-qn-hscroll]') || row.hasAttribute('data-qn-stack')) continue;
      if (row.children.length < 2 || row.offsetWidth < 240) continue;
      var rc = getComputedStyle(row);
      if (rc.display.indexOf('flex') < 0 || rc.flexDirection.indexOf('row') !== 0) continue;
      if (row.querySelector(':scope > input, :scope > select, :scope > textarea') || isTabRow(row)) continue;
      var grow = null;
      for (var g2 = 0; g2 < row.children.length; g2++) { var ch = row.children[g2]; if (px(getComputedStyle(ch).flexGrow) > 0 && ch.offsetWidth < row.offsetWidth * 0.55 && ch.textContent.trim().length > 30) { grow = ch; break; } }
      if (!grow) continue;
      row.setAttribute('data-qn-stack', '');
      row.style.flexWrap = 'wrap'; row.style.rowGap = '12px';
      grow.style.flexBasis = '100%';
      if (!grow.querySelector('h1')) for (var g3 = 0; g3 < row.children.length; g3++) { var s3 = row.children[g3]; if (s3 !== grow && s3.compareDocumentPosition(grow) & 2) s3.style.order = '-1'; }
    }
    // overflowing rows — second sweep after grids collapsed
    for (var k = 0; k < all.length; k++) {
      var e2 = all[k];
      if (!e2.isConnected || e2.closest('aside[aria-label="Primary"],[data-qn-board],[data-qn-gridrow],[data-qn-gridhead]') || e2.hasAttribute('data-qn-board')) continue;
      if (e2.tagName === 'TABLE') { var p = e2.parentElement; if (p) p.setAttribute('data-qn-tablewrap', ''); continue; }
      var clipped = false;
      if (e2.children.length > 1 && e2.offsetWidth > 0) { var rr = e2.getBoundingClientRect().right; for (var z = 0; z < e2.children.length; z++) if (e2.children[z].getBoundingClientRect().right > rr + 2) { clipped = true; break; } }
      if (!clipped && e2.scrollWidth <= e2.clientWidth + 2) continue;
      var c2 = getComputedStyle(e2);
      if (c2.display.indexOf('flex') >= 0 && c2.flexDirection.indexOf('row') === 0 && c2.flexWrap === 'nowrap') {
        if (isTabRow(e2)) e2.setAttribute('data-qn-hscroll', '');
        else e2.setAttribute('data-qn-wrap', '');
      } else if (c2.display === 'grid' && !e2.hasAttribute('data-qn-hscroll')) {
        e2.setAttribute('data-qn-tablewrap', '');
      }
    }
  }

  function cardTable(tb) {
    var heads = [].map.call(tb.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
    if (heads.length < 3) return;
    tb.setAttribute('data-qn-cards', '');
    tb.querySelectorAll('tbody tr').forEach(function (tr) {
      [].forEach.call(tr.children, function (td, i) { if (heads[i] && !td.hasAttribute('data-label')) td.setAttribute('data-label', heads[i]); });
    });
  }

  // "tables" built from div rows that share one grid template
  function gridTables(scope) {
    var groups = {};
    scope.querySelectorAll('[style*="grid-template-columns"]').forEach(function (el) {
      if (el.hasAttribute('data-qn-gridrow') || el.hasAttribute('data-qn-gridhead') || el.closest('aside')) return;
      var m = (el.getAttribute('style') || '').match(/grid-template-columns:\s*([^;]+)/);
      if (!m) return;
      var tpl = m[1].trim();
      var tracks = tpl.replace(/\([^)]*\)/g, 'x').split(/\s+/).length;
      if (/repeat\(/.test(tpl) || tracks < 4) return;
      (groups[tpl] = groups[tpl] || []).push(el);
    });
    Object.keys(groups).forEach(function (k) {
      var els = groups[k];
      if (els.length < 3) return;
      var head = null;
      els.forEach(function (e) {
        var txt = e.textContent.trim();
        if (!head && txt.length > 3 && /^[A-Z0-9 #/&.\-]+$/.test(txt.replace(/\s+/g, ' ')) ) head = e;
      });
      if (!head) { var ts = getComputedStyle(els[0]).textTransform; if (ts === 'uppercase') head = els[0]; }
      var labels = head ? [].map.call(head.children, function (c) { return c.textContent.trim(); }) : [];
      if (head) head.setAttribute('data-qn-gridhead', '');
      els.forEach(function (e) {
        if (e === head) return;
        e.setAttribute('data-qn-gridrow', ''); e.setAttribute('data-qn-keep', '');
        [].forEach.call(e.children, function (c, i) { if (labels[i] && i > 0) c.setAttribute('data-label', labels[i]); });
      });
    });
  }

  function authPass(scope) {
    var g = scope;
    var all = scope.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i], c = getComputedStyle(el);
      if (px(c.minWidth) > W() - 32) el.style.minWidth = '0';
      if ((px(c.paddingLeft) >= 32) && el.offsetWidth >= W() * 0.8) el.setAttribute('data-qn-pad', '');
      if (/(^|;)\s*width:\s*\d{3,}px/.test(el.getAttribute('style') || '') && px(c.width) > W() - 24) { el.style.width = '100%'; el.style.maxWidth = '100%'; }
    }
    var h1 = scope.querySelector('h1'), form = scope.querySelector('form');
    if (h1) {
      for (var j = 0; j < g.children.length; j++) {
        var ch = g.children[j];
        if (ch.contains(h1)) {
          ch.setAttribute('data-qn-hero', '');
          // keep logo, badge and headline; drop the long copy, feature list and footer
          var sib = h1.nextElementSibling; while (sib) { sib.setAttribute('data-qn-hide', ''); sib = sib.nextElementSibling; }
          var anc = h1.parentElement; while (anc && anc !== ch) { var s2 = anc.nextElementSibling; while (s2) { s2.setAttribute('data-qn-hide', ''); s2 = s2.nextElementSibling; } anc = anc.parentElement; }
        } else if (form && ch.contains(form)) ch.setAttribute('data-qn-form', '');
      }
    }
    root.classList.add('qn-authed');
  }

  var queued = false;
  function schedule() { if (queued) return; queued = true; setTimeout(function () { queued = false; try { pass(); } catch (e) { console.warn('[qnet-mobile]', e); } }, 60); }
  var mo = new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) { var t = list[i].target; if (t.id && t.id.indexOf('qn-') === 0) continue; schedule(); return; }
  });
  function start() { mo.observe(document.body, { childList: true, subtree: true }); schedule(); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  window.addEventListener('resize', schedule);
})();
