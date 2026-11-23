(function () {
  if (window.QnetNav) return;
  var KEY = "qnet-trail", RESET = "qnet-trail-reset";
  var LABELS = {
    "dashboard.html": "Dashboard", "metrics.html": "Metrics", "quality-issues.html": "Quality Issues",
    "quality-issue-report.html": "New Quality Issue", "respond-to-issue.html": "Respond", "locations.html": "Locations",
    "agreements.html": "Agreements", "customer.html": "Customer", "part-management.html": "Part Management",
    "action-center.html": "Action Center", "account.html": "Account", "settings.html": "Settings"
  };
  var file = decodeURIComponent(location.pathname.split("/").pop() || "");
  var KEEP = { name: 1, id: 1, loc: 1, view: 1 };
  var qs = (function () { try { var p = new URLSearchParams(location.search), o = new URLSearchParams(); p.forEach(function (v, k) { if (KEEP[k]) o.append(k, v); }); var s = o.toString(); return s ? "?" + s : ""; } catch (e) { return ""; } })();
  var here = file + qs;
  var fileOf = function (h) { return (h || "").split("?")[0]; };
  var ss = {
    get: function (k) { try { return JSON.parse(sessionStorage.getItem(k) || "null"); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  };
  var t = ss.get(KEY) || [];
  if (ss.get(RESET)) { t = []; ss.del(RESET); }
  var i = -1;
  t = t.map(function (e) { var f = fileOf(e.href); var q = (e.href.split("?")[1] || ""); try { var p = new URLSearchParams(q), o = new URLSearchParams(); p.forEach(function (v, k) { if (KEEP[k]) o.append(k, v); }); q = o.toString(); } catch (x) { q = ""; } return { href: f + (q ? "?" + q : ""), label: e.label }; });
  for (var n = 0; n < t.length; n++) if (t[n].href === here) { i = n; break; }
  if (i >= 0) t = t.slice(0, i + 1);
  else if (t.length && fileOf(t[t.length - 1].href) === file) t[t.length - 1] = { href: here, label: t[t.length - 1].label };
  else t.push({ href: here, label: LABELS[file] || file.replace(/\.dc\.html$/, "") });
  if (t.length > 8) t = t.slice(-8);
  ss.set(KEY, t);

  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest && e.target.closest('aside[aria-label="Primary"] a');
    if (a) ss.set(RESET, 1);
  }, true);

  window.QnetNav = {
    setLabel: function (l) { var c = t[t.length - 1]; if (c && l && c.label !== l) { c.label = l; ss.set(KEY, t); } },
    vals: function (parents, label) {
      this.setLabel(label);
      var prev = t.length > 1 ? t[t.length - 2] : null;
      if (prev && fileOf(prev.href) === file) prev = null;
      var chain = prev ? [{ label: prev.label, href: prev.href }] : (parents || []);
      var crumbs = chain.map(function (c, k) { return { label: c.label, href: c.href || "#", link: true, cur: false, sep: k > 0 }; });
      crumbs.push({ label: label, href: "#", link: false, cur: true, sep: crumbs.length > 0 });
      return { crumbs: crumbs, hasBack: !!prev, backHref: prev ? prev.href : "#", backLabel: prev ? prev.label : "" };
    },
    loadState: function (k) { return ss.get("qnet-state:" + k); },
    saveState: function (k, v) { ss.set("qnet-state:" + k, v); }
  };
})();
