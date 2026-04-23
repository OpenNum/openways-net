/* OpenWays site animations
   - Scroll-triggered reveal (elements with .reveal)
   - Count-up numbers (elements with [data-count])
   Respects prefers-reduced-motion automatically (CSS already fallbacks). */
(function () {
  'use strict';

  // Respect reduced-motion preference: bail out, CSS already makes .reveal visible
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    document.querySelectorAll('[data-count]').forEach(el => {
      el.textContent = el.dataset.count;
    });
    return;
  }

  // ── Scroll reveal ───────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }

  // ── Count-up numbers ────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count) || 0;
        const duration = parseInt(el.dataset.countDuration || '1600', 10);
        const decimals = (el.dataset.count.indexOf('.') >= 0)
          ? el.dataset.count.split('.')[1].length
          : 0;
        const start = performance.now();
        const animate = function (now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
          const current = target * eased;
          el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toString();
        };
        requestAnimationFrame(animate);
        countObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) {
      // Pre-fill with 0 so layout doesn't shift
      el.textContent = '0';
      countObs.observe(el);
    });
  }
})();
