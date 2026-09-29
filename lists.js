// lists.js — site-data.js lo unna lists ni pages lo chupisthundi. Deeni ni maarchakkarledu.
(function () {
  var D = window.KAL || {};
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function ext(u){ return /^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ''; }
  function btn(cls, href, label){ return '<a class="kal-btn ' + cls + '" href="' + esc(href) + '"' + ext(href) + '>' + label + '</a>'; }
  function digits(s){ return String(s).replace(/\D/g, ''); }

  function card(d, i, numbered){
    var b = [];
    if (d.page)     b.push(btn('', d.page, 'వివరాలు / Details'));
    if (d.map)      b.push(btn('alt', d.map, '➤ Directions'));
    if (d.phone)    b.push(btn('alt', 'tel:+91' + digits(d.phone), '📞 ' + esc(d.phone)));
    if (d.whatsapp) b.push(btn('wa', 'https://wa.me/91' + digits(d.whatsapp), '💬 WhatsApp'));
    return '<article class="kal-card">' +
      (numbered ? '<span class="kal-num">' + esc(d.order || (i + 1)) + '</span>' : '') +
      '<div class="kal-card-body"><h3>' + esc(d.te) + '</h3>' +
      (d.en ? '<div class="kal-en">' + esc(d.en) + '</div>' : '') +
      (d.desc ? '<p>' + esc(d.desc) + '</p>' : '') +
      (d.address ? '<p class="kal-addr">📍 ' + esc(d.address) + '</p>' : '') +
      (b.length ? '<div class="kal-btns">' + b.join('') + '</div>' : '') +
      '</div></article>';
  }

  document.querySelectorAll('[data-kal-list]').forEach(function (el) {
    var arr = D[el.getAttribute('data-kal-list')] || [];
    var numbered = el.hasAttribute('data-numbered');
    if (!arr.length) {
      el.innerHTML = '<div class="kal-empty">' + esc(el.getAttribute('data-empty') || 'వివరాలు త్వరలో జోడించబడతాయి.') + '</div>';
      return;
    }
    el.innerHTML = arr.map(function (d, i) { return card(d, i, numbered); }).join('');
  });

  document.querySelectorAll('[data-kal-count]').forEach(function (el) {
    var arr = D[el.getAttribute('data-kal-count')] || [];
    el.textContent = arr.length;
  });

  document.querySelectorAll('[data-kal-map]').forEach(function (el) {
    var m = D.ASHTA_MAP; if (!m) return;
    var html = '<img src="' + esc(el.getAttribute('data-src')) + '" alt="Ashta Theertham Map – Proposed Riverfront Promenade" loading="lazy">';
    m.spots.forEach(function (s) {
      html += '<a class="kal-hot" href="' + esc(s.page) + '" title="' + s.n + '. ' + esc(s.title) + '" aria-label="' + s.n + '. ' + esc(s.title) + '" style="left:' + (s.x / m.w * 100).toFixed(2) + '%;top:' + (s.y / m.h * 100).toFixed(2) + '%"></a>';
    });
    el.innerHTML = html;
  });
})();
