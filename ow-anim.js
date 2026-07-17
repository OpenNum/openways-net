/* OpenWays site animations
   - Scroll-triggered reveal (elements with .reveal)
   - Count-up numbers (elements with [data-count])
   Respects prefers-reduced-motion automatically (CSS already fallbacks). */
(function () {
  'use strict';

  const isZhPage = document.documentElement.lang.toLowerCase().startsWith('zh');

  // ── Conversion helpers ──────────────────────────────────────
  // Product pages: keep a compact purchase route within thumb reach on mobile.
  const purchase = document.getElementById('purchase');
  if (purchase) {
    const bar = document.createElement('div');
    bar.className = 'mobile-purchase-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', isZhPage ? '购买此行业包' : 'Purchase this pack');
    bar.innerHTML =
      '<div class="mobile-purchase-bar__inner">' +
        '<div class="mobile-purchase-bar__meta">' +
          '<strong>A$49</strong>' +
          '<span>' + (isZhPage ? '一次性付款 · 即时下载' : 'One-time · instant download') + '</span>' +
        '</div>' +
        '<a class="btn btn-primary btn-sm mobile-purchase-bar__cta" href="#purchase">' +
          (isZhPage ? '选择版本' : 'Choose edition') +
        '</a>' +
      '</div>';
    document.body.appendChild(bar);
    document.body.classList.add('has-mobile-purchase-bar');
  }

  // Packs directory: use the real product artwork instead of emoji-only cards.
  const packGrid = document.getElementById('packGrid');
  if (packGrid) {
    const coverBySlug = {
      'accounting': 'Accounting_Australia_cover.jpg',
      'beauty': 'Beauty_Australia_cover.jpg',
      'carpet-cleaning': 'Carpet_Cleaning_Australia_cover.jpg',
      'cleaning': 'Cleaning_Australia_cover.jpg',
      'clinic': 'Clinic_Australia_cover.jpg',
      'commercial-cleaning': 'Commercial_Cleaning_Australia_cover.jpg',
      'dentist': 'Dentist_Australia_cover.jpg',
      'domestic-help': 'Domestic_Help_Australia_cover.jpg',
      'driving-school': 'Driving_School_Australia_cover.jpg',
      'education': 'Education_Australia_cover.jpg',
      'electrician': 'Electrician_Australia_cover.jpg',
      'hvac': 'HVAC_Australia_cover.jpg',
      'immigration': 'Education_&_Migration_Australia_cover.jpg',
      'insurance': 'Insurance_Broker_Australia_cover.jpg',
      'lawyer': 'Lawyer_Australia_cover.jpg',
      'logistics': 'International_Logistics_Australia_cover.jpg',
      'mortgage': 'Mortgage_Broker_Australia_cover.jpg',
      'plumbing-painting': 'Plumbing_&_Painting_Australia_cover.jpg',
      'realestate': 'Real_Estate_Australia_cover.jpg',
      'removalist': 'Removalist_Australia_cover.jpg',
      'renovation': 'Renovation_Australia_cover.jpg',
      'restaurant': 'Restaurant_Australia_cover.jpg',
      'signage': 'Signage_Australia_cover.jpg',
      'solar': 'Solar_Australia_cover.jpg',
      'waterproofing-roofing': 'Waterproofing_&_Roofing_Australia_cover.jpg'
    };

    packGrid.querySelectorAll('.pack-card').forEach(function (card) {
      const link = card.querySelector('a[href*="pack-"]');
      if (!link) return;
      const match = link.getAttribute('href').match(/(?:zh-)?pack-([^./?#]+)\.html/);
      if (!match || !coverBySlug[match[1]]) return;

      const title = card.querySelector('.pack-card-title');
      const cover = document.createElement('div');
      const img = document.createElement('img');
      cover.className = 'pack-card-cover';
      img.src = 'gumroad-covers/' + encodeURIComponent(coverBySlug[match[1]]);
      img.alt = (title ? title.textContent.trim() : 'OpenWays AI Pack') + (isZhPage ? '封面' : ' cover');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.width = 1280;
      img.height = 720;
      cover.appendChild(img);
      card.insertBefore(cover, card.firstChild);
    });
  }

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
  // SEO-friendly: HTML 中已经是真实数字，DOM 加载时不重置为 0。
  // 只在元素进入 viewport 时才临时设 0 并启动动画。
  // 爬虫不滚动 → 看到的始终是 HTML 真实数字。
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
        // 进入 viewport 才把 DOM 临时归零，启动动画
        el.textContent = '0';
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
    // 不再预填 0；DOM 保留 HTML 真实数字（SEO 友好）
    counters.forEach(function (el) {
      countObs.observe(el);
    });
  }
})();
