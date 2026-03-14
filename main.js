/* ================================================================
   main.js — Portfolio Tab Logic & Animations
   Do not modify unless you know what you're doing 🙂
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Tab switching ─────────────────────────────────────────── */
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  function activateTab(tabId) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });

    // Animate skill bars when the skills tab opens
    if (tabId === 'skills') animateBars();
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  /* ── Skill bar animation (runs once per page load) ────────── */
  let barsAnimated = false;

  function animateBars() {
    if (barsAnimated) return;
    barsAnimated = true;
    document.querySelectorAll('.bar-fill').forEach((fill, i) => {
      setTimeout(() => fill.classList.add('animated'), i * 100);
    });
  }

  /* ── Sticky nav highlight on scroll (optional bonus) ─────── */
  const nav = document.getElementById('tab-nav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,.6)'
      : 'none';
  });

  /* ── Keyboard nav for tabs ────────────────────────────────── */
  tabBtns.forEach((btn, i) => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        tabBtns[(i + 1) % tabBtns.length].focus();
        tabBtns[(i + 1) % tabBtns.length].click();
      }
      if (e.key === 'ArrowLeft') {
        tabBtns[(i - 1 + tabBtns.length) % tabBtns.length].focus();
        tabBtns[(i - 1 + tabBtns.length) % tabBtns.length].click();
      }
    });
  });

});
