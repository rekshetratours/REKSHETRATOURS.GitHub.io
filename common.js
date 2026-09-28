// common.js — shared across every page of the site
// Header and footer are written directly into each HTML page (no fetch needed),
// so this file only handles: the mobile hamburger menu, highlighting the current
// page in the nav, and a real, cross-visitor counter.

document.addEventListener('DOMContentLoaded', async () => {

  // --- Mobile menu toggle ---
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // --- Highlight current page in nav ---
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      if (a.dataset.page === currentPage) a.classList.add('active');
    });
  }

  // --- Visitor counter (real, shared across all visitors) ---
  // Uses CountAPI (https://countapi.xyz) - a free, no-signup hit counter.
  const countEl = document.getElementById('visitorCount');
  if (countEl) {
    try {
      const res = await fetch('https://api.countapi.xyz/hit/rekshetratours-com/site-visits');
      const data = await res.json();
      countEl.textContent = data.value.toLocaleString('en-IN');
    } catch (err) {
      const local = (parseInt(localStorage.getItem('rt_local_visits') || '0', 10)) + 1;
      localStorage.setItem('rt_local_visits', local);
      countEl.textContent = local.toLocaleString('en-IN') + '*';
      countEl.title = "* Live counter unavailable right now — showing this browser's local count only.";
    }
  }
});
