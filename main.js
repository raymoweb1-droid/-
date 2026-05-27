/* ============================================================
   ALBANE YOUTH ASSOCIATION - MAIN.JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const onScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  const counters = document.querySelectorAll('.stat-num[data-count]');
  const animateCounter = (el) => {
    if (el.dataset.done === 'true') return;
    el.dataset.done = 'true';
    const end = parseInt(el.dataset.count, 10) || 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.textContent = Math.floor(progress * end).toLocaleString('ar-MA');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  const joinTabs = document.querySelectorAll('.join-tab');
  const joinPanels = document.querySelectorAll('.join-form-panel');
  const activateJoinTab = (tab) => {
    const target = tab?.dataset.target;
    if (!target) return;
    joinTabs.forEach(t => t.classList.remove('active'));
    joinPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(target)?.classList.add('active');
  };

  joinTabs.forEach(tab => {
    tab.addEventListener('click', () => activateJoinTab(tab));
  });

  const hashTarget = window.location.hash.replace('#', '');
  if (hashTarget) {
    const tab = document.querySelector(`.join-tab[data-target="${hashTarget}-form"]`);
    if (tab) activateJoinTab(tab);
  }

  const getContactEmail = (form) => form.dataset.contactEmail || window.AlbaneAdmin?.readSettings?.().email || 'contact@albane-association.ma';
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;

      const fields = [...form.querySelectorAll('input, select, textarea')]
        .map(field => {
          const label = field.closest('.form-group')?.querySelector('label')?.textContent?.trim() || field.name || 'حقل';
          const value = field.value?.trim();
          return value ? `${label}: ${value}` : '';
        })
        .filter(Boolean)
        .join('\n');

      const pageTitle = document.title.replace(/\s+/g, ' ').trim();
      const subject = encodeURIComponent(`رسالة من موقع الجمعية - ${pageTitle}`);
      const body = encodeURIComponent(`${fields}\n\n---\nتم إعداد هذه الرسالة من موقع جمعية شباب ألبان للتنمية والتعاون.`);
      window.location.href = `mailto:${getContactEmail(form)}?subject=${subject}&body=${body}`;

      const originalHtml = btn.innerHTML;
      btn.innerHTML = 'تم تجهيز الرسالة في البريد';
      btn.disabled = true;
      btn.style.background = 'linear-gradient(135deg,#22C55E,#16A34A)';
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        btn.style.background = '';
      }, 3500);
    });
  });

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const hrefPage = href?.split('#')[0];
    link.classList.toggle('active', hrefPage === currentPage || (currentPage === '' && hrefPage === 'index.html'));
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});