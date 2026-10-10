// common.js — shared across every page of the site
// Header and footer are written directly into each HTML page (no fetch needed),
// so this file only handles: the mobile hamburger menu, highlighting the current
// page in the nav.

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

});
