/* Rekshetra Tours visitor counter. Flat file, no fetch of partials.
   Usage: <div id="rk-visits"></div> + <script src="visitor-counter.js" defer></script> */
(function () {
  var NS = "rekshetratours-com";      // change only if you want to reset the count
  var KEY = "home-visits";
  var START_OFFSET = 0;               // add your old count here if you remember it, e.g. 1250
  var box = document.getElementById("rk-visits");
  if (!box) return;

  function seen() { try { return localStorage.getItem("rk_seen_" + KEY) === new Date().toDateString(); } catch (e) { return false; } }
  function mark() { try { localStorage.setItem("rk_seen_" + KEY, new Date().toDateString()); } catch (e) {} }

  var count = !seen();                // count one visit per browser per day
  var providers = [
    function () {
      return fetch("https://api.counterapi.dev/v1/" + NS + "/" + KEY + (count ? "/up" : "/")).then(function (r) { return r.json(); })
        .then(function (j) { if (typeof j.count !== "number") throw 0; return j.count; });
    },
    function () {
      var u = "https://abacus.jasoncameron.dev/" + (count ? "hit" : "get") + "/" + NS + "/" + KEY;
      return fetch(u).then(function (r) { return r.json(); })
        .then(function (j) { if (typeof j.value !== "number") throw 0; return j.value; });
    }
  ];

  function show(n) {
    n = n + START_OFFSET;
    box.innerHTML = '<span class="rk-v-label">👁 సందర్శకులు / Visitors</span> <strong class="rk-v-num">' + n.toLocaleString("en-IN") + "</strong>";
    box.style.display = "inline-block";
    if (count) mark();
  }
  (function next(i) {
    if (i >= providers.length) { box.style.display = "none"; return; }  // all failed: hide, never fake a number
    var p; try { p = providers[i](); } catch (e) { return next(i + 1); }
    p.then(show).catch(function () { next(i + 1); });
  })(0);
})();
