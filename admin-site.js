(function () {
  const STORAGE_KEY = 'albaneSiteSettings';
  const defaults = {
    siteName: 'جمعية شباب ألبان',
    siteFullName: 'جمعية شباب ألبان للتنمية والتعاون',
    tagline: 'نعمل معاً لمستقبل أفضل',
    logoUrl: 'assets/logo.png',

    heroBadge: 'معاً نبني المستقبل',
    heroTitleBefore: 'نبني مستقبلاً',
    heroTitleHighlight: 'مشرقاً',
    heroTitleAfter: 'لشباب ألبان',
    heroSubtitle: 'جمعية شباب ألبان للتنمية والتعاون — منظمة شبابية رائدة تعمل على تمكين الشباب وتطوير المجتمع من خلال التعليم والثقافة والخدمة الاجتماعية',
    membersCount: '500',
    membersLabel: 'عضو نشيط',
    projectsCount: '50',
    projectsLabel: 'مشروع منجز',
    yearsCount: '10',
    yearsLabel: 'سنوات خبرة',
    homeAboutTag: 'من نحن',
    homeAboutTitle: 'جمعية شبابية رائدة في خدمة المجتمع',
    homeAboutBody: 'تأسست جمعية شباب ألبان للتنمية والتعاون بهدف النهوض بمستوى المجتمع المحلي وتمكين الشباب من المشاركة الفعالة في التنمية الاجتماعية والاقتصادية.',
    homeGoalsTag: 'رسالتنا',
    homeGoalsTitle: 'أهدافنا الأساسية',
    homeGoalsSubtitle: 'نعمل على تحقيق أهداف شاملة تخدم الفرد والمجتمع',
    homeProjectsTag: 'أعمالنا',
    homeProjectsTitle: 'مشاريعنا المؤثرة',
    homeProjectsSubtitle: 'نحدث فرقاً حقيقياً في حياة مجتمعنا',
    homeJoinTitle: 'كن جزءاً من التغيير',
    homeJoinText: 'سواء كمتطوع أو عضو أو داعم — مشاركتك تصنع الفرق',
    homeTestimonialsTitle: 'ماذا يقول شبابنا',

    aboutPageTitle: 'عن',
    aboutPageHighlight: 'جمعيتنا',
    aboutPageSubtitle: 'تعرف على قصتنا، قيمنا، وفريقنا الشبابي المتميز الذي يعمل لخدمة مجتمع ألبان',
    aboutStoryTag: 'قصتنا',
    aboutStoryTitle: 'من أين بدأنا؟',
    aboutStoryBody1: 'انطلقت جمعية شباب ألبان للتنمية والتعاون من إحساس عميق بالمسؤولية تجاه الوطن والمجتمع.',
    aboutStoryBody2: 'منذ تأسيسها، تمكنت الجمعية من تنظيم عشرات البرامج والمشاريع التنموية في مجالات التعليم، البيئة، الصحة، والرياضة.',
    aboutVisionMissionTitle: 'رؤيتنا ومهمتنا',
    aboutVisionTitle: 'رؤيتنا',
    aboutVisionText: 'مجتمع ألباني متماسك ومتضامن، يتمتع شبابه بالتعليم الجيد والصحة والفرص المتكافئة.',
    aboutMissionTitle: 'مهمتنا',
    aboutMissionText: 'تمكين الشباب وتنمية قدراتهم وتأهيلهم للمشاركة الفاعلة في مسيرة التنمية.',
    aboutValuesTitle: 'قيمنا الأساسية',
    aboutTeamTitle: 'أعضاء مكتبنا التنفيذي',
    aboutTeamSubtitle: 'شباب مؤمن بالتغيير ومتفان في خدمة مجتمعه',

    goalsPageTitle: 'أهدافنا',
    goalsPageHighlight: 'الاستراتيجية',
    goalsPageSubtitle: 'نعمل وفق خطة واضحة ورؤية محددة لتحقيق التنمية الشاملة في مجتمع ألبان',
    goalsSectionTag: 'محاورنا',
    goalsSectionTitle: 'محاور العمل الجمعوي',
    goalsSectionSubtitle: 'نعمل بشكل متكامل في ستة قطاعات حيوية',
    goal1Title: 'التعليم والتكوين',
    goal1Text: 'تحسين المستوى التعليمي للشباب وتزويدهم بالمهارات اللازمة لسوق العمل والحياة الكريمة.',
    goal2Title: 'التنمية المجتمعية',
    goal2Text: 'تحسين الظروف المعيشية للمواطنين وتطوير البنية التحتية بالمجال الترابي لألبان.',
    goal3Title: 'البيئة والتنمية المستدامة',
    goal3Text: 'الحفاظ على البيئة الطبيعية ونشر ثقافة الاستدامة البيئية لدى الأجيال الناشئة.',
    goal4Title: 'الرياضة والأنشطة البدنية',
    goal4Text: 'تنشيط الحياة الرياضية وصون صحة الشباب عبر الأنشطة البدنية المنظمة.',
    goal5Title: 'تمكين الشباب وريادة الأعمال',
    goal5Text: 'تأهيل الشباب للمبادرة الاقتصادية وتطوير مهاراتهم القيادية والريادية.',
    goal6Title: 'الصحة والخدمات الاجتماعية',
    goal6Text: 'تحسين الوضع الصحي للمجتمع وتقديم الخدمات الاجتماعية للفئات الأكثر هشاشة.',
    goalsCtaTitle: 'انضم إلى فريقنا التطوعي',
    goalsCtaText: 'كل يد تساعد وكل صوت يسمع يحدث فرقاً في مسيرتنا',

    projectsPageTitle: 'مشاريعنا',
    projectsPageHighlight: 'المؤثرة',
    projectsPageSubtitle: 'شاهد الأثر الحقيقي الذي نصنعه معاً في مجتمعنا من خلال مشاريع ومبادرات الجمعية',
    projectsSectionTag: 'أعمالنا',
    projectsSectionTitle: 'مبادرات صنعت الفارق',
    project1Title: 'تأهيل مدرسة ألبان الابتدائية',
    project1Text: 'تجديد الفصول الدراسية وتوفير الأدوات التعليمية للتلاميذ.',
    project2Title: 'دروس الدعم المجانية',
    project2Text: 'تنظيم فصول أسبوعية للدعم في الرياضيات واللغات.',
    project3Title: 'حملة ألبان نظيفة',
    project3Text: 'حملة دورية لتنظيف الشوارع وإزالة النقاط السوداء للنفايات.',
    project4Title: 'مشروع الحديقة المجتمعية',
    project4Text: 'تحويل فضاء مهمل إلى حديقة عامة ومتنفس للأسر.',
    projectsCtaTitle: 'ساهم في بناء أثر مستدام',
    projectsCtaText: 'مشاريعنا تعتمد على دعم المحسنين وجهود المتطوعين. كن جزءاً من النجاح القادم.',

    joinPageTitle: 'كن جزءاً من',
    joinPageHighlight: 'التغيير',
    joinPageSubtitle: 'اكتشف كيف يمكن لمساهمتك ووقتك أن تترك أثراً عميقاً في مجتمع ألبان',
    volunteerTitle: 'استمارة التطوع',
    volunteerText: 'استثمر وقتك ومهاراتك في خدمة المجتمع وكسب تجربة لا تنسى.',
    memberTitle: 'استمارة طلب العضوية',
    memberText: 'احصل على بطاقة الانخراط وشارك في قرارات الجمعية وأنشطتها.',
    donateTitle: 'دعم ومساندة المشاريع',
    donateText: 'تبرعك يساهم بشكل مباشر في تمويل المشاريع التنموية.',
    donateBankText: 'يرجى التواصل مع الجمعية للحصول على معلومات الدعم البنكي الرسمية.',

    contactPageTitle: 'ابقى على',
    contactPageHighlight: 'تواصل',
    contactPageSubtitle: 'نحن هنا للاستماع لاستفساراتكم ومقترحاتكم. تواصلوا معنا بكل سرور.',
    contactInfoTag: 'معلومات التواصل',
    contactInfoTitle: 'نرحب برسائلك دائماً',
    contactInfoText: 'سواء كان لديك استفسار، فكرة مشروع، أو ترغب في التعاون والشراكة، لا تتردد في مراسلتنا أو زيارتنا.',
    contactAddressTitle: 'المقر الرئيسي',
    contactPhoneTitle: 'الهاتف / واتساب',
    contactEmailTitle: 'البريد الإلكتروني',
    contactMapText: 'مساحة مخصصة لخريطة Google Maps (دوار ألبان، تارودانت)',

    location: 'ألبان، إقليم تارودانت، المغرب',
    phone: '+212 600 000 000',
    email: 'contact@albane-association.ma',
    whatsapp: '212600000000',
    facebook: 'contact.html',
    instagram: 'contact.html',
    tiktok: 'contact.html'
  };

  const cleanPhone = (value) => String(value || '').replace(/[^\d+]/g, '');
  const cleanWhatsapp = (value) => String(value || '').replace(/\D/g, '');
  const escapeHtml = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));

  function readSettings() {
    try { return { ...defaults, ...(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}) }; }
    catch (error) { return { ...defaults }; }
  }

  function pageName() {
    return (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function setText(selector, value, root = document) {
    if (value === undefined || value === null) return;
    root.querySelectorAll(selector).forEach((el) => { el.textContent = value; });
  }

  function setOneText(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  }

  function setOneHtml(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el && value !== undefined && value !== null) el.innerHTML = value;
  }

  function setImage(selector, src, alt) {
    document.querySelectorAll(selector).forEach((img) => {
      if (src) img.setAttribute('src', src);
      if (alt) img.setAttribute('alt', alt);
    });
  }

  function setHref(selector, href) {
    document.querySelectorAll(selector).forEach((el) => { if (href) el.setAttribute('href', href); });
  }

  function applyPageHero(title, highlight, subtitle) {
    setOneHtml('.page-hero h1', `${escapeHtml(title)} <span class="highlight">${escapeHtml(highlight)}</span>`);
    setOneText('.page-hero p', subtitle);
  }

  function applyHome(data) {
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.innerHTML = `<i data-lucide="sprout"></i> ${escapeHtml(data.heroBadge)}`;
    setOneHtml('.hero-title', `${escapeHtml(data.heroTitleBefore)}<br><span class="highlight">${escapeHtml(data.heroTitleHighlight)}</span> ${escapeHtml(data.heroTitleAfter)}`);
    setOneText('.hero-subtitle', data.heroSubtitle);

    const statItems = document.querySelectorAll('.hero-stats .stat-item');
    [[data.membersCount, data.membersLabel], [data.projectsCount, data.projectsLabel], [data.yearsCount, data.yearsLabel]].forEach(([count, label], index) => {
      const item = statItems[index];
      if (!item) return;
      const number = item.querySelector('.stat-num');
      const text = item.querySelector('.stat-label');
      if (number) {
        number.dataset.count = String(count || '0').replace(/\D/g, '') || '0';
        if (number.dataset.done !== 'true') number.textContent = '0';
      }
      if (text) text.textContent = label;
    });

    const about = document.querySelector('#about-preview');
    if (about) {
      setOneText('.section-tag', data.homeAboutTag, about);
      setOneText('.section-title', data.homeAboutTitle, about);
      setOneText('.section-body', data.homeAboutBody, about);
    }
    const goals = document.querySelector('#goals');
    if (goals) {
      setOneText('.section-tag', data.homeGoalsTag, goals);
      setOneText('.section-title', data.homeGoalsTitle, goals);
      setOneText('.section-subtitle', data.homeGoalsSubtitle, goals);
    }
    const projects = document.querySelector('#projects');
    if (projects) {
      setOneText('.section-tag', data.homeProjectsTag, projects);
      setOneText('.section-title', data.homeProjectsTitle, projects);
      setOneText('.section-subtitle', data.homeProjectsSubtitle, projects);
    }
    const join = document.querySelector('#join-section');
    if (join) {
      setOneText('.join-text h2', data.homeJoinTitle, join);
      setOneText('.join-text p', data.homeJoinText, join);
    }
    const testimonials = document.querySelector('#testimonials');
    if (testimonials) setOneText('.section-title', data.homeTestimonialsTitle, testimonials);
  }

  function applyAbout(data) {
    applyPageHero(data.aboutPageTitle, data.aboutPageHighlight, data.aboutPageSubtitle);
    const story = document.querySelector('.about-text');
    if (story) {
      setOneText('.section-tag', data.aboutStoryTag, story);
      setOneText('.section-title', data.aboutStoryTitle, story);
      const bodies = story.querySelectorAll('.section-body');
      if (bodies[0]) bodies[0].textContent = data.aboutStoryBody1;
      if (bodies[1]) bodies[1].textContent = data.aboutStoryBody2;
    }
    const headers = document.querySelectorAll('.section-header');
    if (headers[0]) setOneText('.section-title', data.aboutVisionMissionTitle, headers[0]);
    const missionCards = document.querySelectorAll('.goal-card');
    if (missionCards[0]) { setOneText('h3', data.aboutVisionTitle, missionCards[0]); setOneText('p', data.aboutVisionText, missionCards[0]); }
    if (missionCards[1]) { setOneText('h3', data.aboutMissionTitle, missionCards[1]); setOneText('p', data.aboutMissionText, missionCards[1]); }
    if (headers[1]) setOneText('.section-title', data.aboutValuesTitle, headers[1]);
    if (headers[2]) { setOneText('.section-title', data.aboutTeamTitle, headers[2]); setOneText('.section-subtitle', data.aboutTeamSubtitle, headers[2]); }
  }

  function applyGoals(data) {
    applyPageHero(data.goalsPageTitle, data.goalsPageHighlight, data.goalsPageSubtitle);
    const header = document.querySelector('.section-header');
    if (header) { setOneText('.section-tag', data.goalsSectionTag, header); setOneText('.section-title', data.goalsSectionTitle, header); setOneText('.section-subtitle', data.goalsSectionSubtitle, header); }
    document.querySelectorAll('.pillar-card').forEach((card, index) => {
      const n = index + 1;
      setOneText('h3', data[`goal${n}Title`], card);
      setOneText('p', data[`goal${n}Text`], card);
    });
    const cta = document.querySelector('.join-section');
    if (cta) { setOneText('.join-text h2', data.goalsCtaTitle, cta); setOneText('.join-text p', data.goalsCtaText, cta); }
  }

  function applyProjects(data) {
    applyPageHero(data.projectsPageTitle, data.projectsPageHighlight, data.projectsPageSubtitle);
    const header = document.querySelector('.section-header');
    if (header) { setOneText('.section-tag', data.projectsSectionTag, header); setOneText('.section-title', data.projectsSectionTitle, header); }
    document.querySelectorAll('.project-card').forEach((card, index) => {
      const n = index + 1;
      if (data[`project${n}Title`]) setOneText('h3', data[`project${n}Title`], card);
      if (data[`project${n}Text`]) setOneText('p', data[`project${n}Text`], card);
    });
    const cta = document.querySelector('.join-section');
    if (cta) { setOneText('.join-text h2', data.projectsCtaTitle, cta); setOneText('.join-text p', data.projectsCtaText, cta); }
  }

  function applyJoin(data) {
    applyPageHero(data.joinPageTitle, data.joinPageHighlight, data.joinPageSubtitle);
    const panels = document.querySelectorAll('.join-form-card');
    if (panels[0]) { setOneText('h3', data.volunteerTitle, panels[0]); setOneText('.sub', data.volunteerText, panels[0]); }
    if (panels[1]) { setOneText('h3', data.memberTitle, panels[1]); setOneText('.sub', data.memberText, panels[1]); }
    if (panels[2]) {
      setOneText('h3', data.donateTitle, panels[2]);
      setOneText('.sub', data.donateText, panels[2]);
      const bankNote = panels[2].querySelector('[style*="font-size:1rem"]');
      if (bankNote) bankNote.textContent = data.donateBankText;
    }
  }

  function applyContact(data) {
    applyPageHero(data.contactPageTitle, data.contactPageHighlight, data.contactPageSubtitle);
    const info = document.querySelector('.contact-info');
    if (info) {
      setOneText('.section-tag', data.contactInfoTag, info);
      setOneText('h2', data.contactInfoTitle, info);
      setOneText(':scope > p', data.contactInfoText, info);
      const items = info.querySelectorAll('.contact-item');
      if (items[0]) { setOneText('strong', data.contactAddressTitle, items[0]); setOneText('.ci-text span', data.location, items[0]); }
      if (items[1]) { setOneText('strong', data.contactPhoneTitle, items[1]); setOneText('.ci-text span', data.phone, items[1]); }
      if (items[2]) { setOneText('strong', data.contactEmailTitle, items[2]); setOneText('.ci-text span', data.email, items[2]); }
    }
    const mapText = document.querySelector('[style*="height:400px"] strong');
    if (mapText) mapText.textContent = data.contactMapText;
  }

  function applySettings(settings) {
    const data = { ...defaults, ...settings };
    const fullTitle = data.siteFullName || data.siteName;
    const footerText = `${fullTitle} — ${data.tagline}`;
    const whatsappUrl = data.whatsapp ? `https://wa.me/${cleanWhatsapp(data.whatsapp)}` : 'contact.html';

    if (!document.body?.classList.contains('admin-page')) document.title = fullTitle;
    setText('.logo-text', data.siteName);
    setImage('.logo-img, .footer-logo, .join-logo-img', data.logoUrl, `شعار ${data.siteName}`);
    setText('.footer-brand p', footerText);

    const current = pageName();
    if (current === 'index.html' || current === '') applyHome(data);
    if (current === 'about.html') applyAbout(data);
    if (current === 'goals.html') applyGoals(data);
    if (current === 'projects.html') applyProjects(data);
    if (current === 'join.html') applyJoin(data);
    if (current === 'contact.html') applyContact(data);

    document.querySelectorAll('.footer-contact p').forEach((p) => {
      if (p.querySelector('[data-lucide="map-pin"]')) p.innerHTML = `<i data-lucide="map-pin"></i> ${escapeHtml(data.location)}`;
    });
    document.querySelectorAll('a.footer-contact-link[href^="tel:"]').forEach((a) => {
      a.href = `tel:${cleanPhone(data.phone)}`;
      a.innerHTML = `<i data-lucide="phone"></i> <span dir="ltr">${escapeHtml(data.phone)}</span>`;
    });
    document.querySelectorAll('a.footer-contact-link[href^="mailto:"]').forEach((a) => {
      a.href = `mailto:${data.email}`;
      a.innerHTML = `<i data-lucide="mail"></i> <span dir="ltr">${escapeHtml(data.email)}</span>`;
    });

    setHref('.social-link.facebook', data.facebook || 'contact.html');
    setHref('.social-link.instagram', data.instagram || 'contact.html');
    setHref('.social-link.tiktok', data.tiktok || 'contact.html');
    setHref('.social-link.whatsapp, a[href^="https://wa.me/"]', whatsappUrl);
    document.querySelectorAll('form').forEach((form) => { form.dataset.contactEmail = data.email; });
    if (window.lucide) window.lucide.createIcons();
  }

  window.AlbaneAdmin = {
    STORAGE_KEY,
    defaults,
    readSettings,
    applySettings,
    saveSettings(settings) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...readSettings(), ...settings }));
      applySettings(readSettings());
    },
    resetSettings() {
      localStorage.removeItem(STORAGE_KEY);
      applySettings(defaults);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => applySettings(readSettings()));
  else applySettings(readSettings());
})();