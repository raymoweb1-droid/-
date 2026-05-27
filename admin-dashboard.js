document.addEventListener('DOMContentLoaded', () => {
  const admin = window.AlbaneAdmin;
  const form = document.getElementById('adminForm');
  const pageTabs = document.getElementById('pageTabs');
  const mobilePageTabs = document.getElementById('mobilePageTabs');
  const fieldsHost = document.getElementById('fieldsHost');
  const currentPageTitle = document.getElementById('currentPageTitle');
  const currentPageHint = document.getElementById('currentPageHint');
  const status = document.getElementById('adminStatus');
  const preview = document.getElementById('sitePreview');
  const exportBox = document.getElementById('exportBox');
  const importBox = document.getElementById('importBox');

  const pages = [
    {
      id: 'global', title: 'عام', icon: 'settings', url: 'index.html', hint: 'معلومات كتطبق على الموقع كامل: اللوغو، الاسم، التواصل، والسوشيال.',
      groups: [
        { title: 'هوية الموقع', fields: [
          ['siteName', 'اسم قصير فالنافبار'], ['siteFullName', 'الاسم الكامل'], ['tagline', 'وصف قصير فالـ footer', 'textarea'], ['logoUrl', 'مسار اللوغو']
        ]},
        { title: 'معلومات التواصل العامة', fields: [
          ['location', 'العنوان', 'textarea'], ['phone', 'الهاتف'], ['email', 'البريد الإلكتروني'], ['whatsapp', 'واتساب بدون +']
        ]},
        { title: 'الشبكات الاجتماعية', fields: [
          ['facebook', 'رابط فيسبوك'], ['instagram', 'رابط إنستغرام'], ['tiktok', 'رابط تيك توك']
        ]}
      ]
    },
    {
      id: 'home', title: 'الرئيسية', icon: 'home', url: 'index.html', hint: 'تحكم فواجهة الصفحة الرئيسية وكل الأقسام الظاهرة فيها.',
      groups: [
        { title: 'الهيرو', fields: [
          ['heroBadge', 'الشارة فوق العنوان'], ['heroTitleBefore', 'العنوان قبل الكلمة الملونة'], ['heroTitleHighlight', 'الكلمة الملونة'], ['heroTitleAfter', 'باقي العنوان'], ['heroSubtitle', 'الوصف الرئيسي', 'textarea']
        ]},
        { title: 'الإحصائيات', fields: [
          ['membersCount', 'عدد الأعضاء', 'number'], ['membersLabel', 'تسمية الأعضاء'], ['projectsCount', 'عدد المشاريع', 'number'], ['projectsLabel', 'تسمية المشاريع'], ['yearsCount', 'سنوات الخبرة', 'number'], ['yearsLabel', 'تسمية السنوات']
        ]},
        { title: 'أقسام الرئيسية', fields: [
          ['homeAboutTag', 'شارة من نحن'], ['homeAboutTitle', 'عنوان من نحن'], ['homeAboutBody', 'نص من نحن', 'textarea'], ['homeGoalsTag', 'شارة الأهداف'], ['homeGoalsTitle', 'عنوان الأهداف'], ['homeGoalsSubtitle', 'وصف الأهداف', 'textarea'], ['homeProjectsTag', 'شارة المشاريع'], ['homeProjectsTitle', 'عنوان المشاريع'], ['homeProjectsSubtitle', 'وصف المشاريع', 'textarea'], ['homeJoinTitle', 'عنوان الانضمام'], ['homeJoinText', 'نص الانضمام', 'textarea'], ['homeTestimonialsTitle', 'عنوان آراء الأعضاء']
        ]}
      ]
    },
    {
      id: 'about', title: 'عن الجمعية', icon: 'users', url: 'about.html', hint: 'تحكم فصفحة التعريف بالجمعية: الهيرو، القصة، الرؤية، المهمة، الفريق.',
      groups: [
        { title: 'رأس الصفحة', fields: [['aboutPageTitle', 'عنوان الصفحة'], ['aboutPageHighlight', 'الكلمة الملونة'], ['aboutPageSubtitle', 'وصف الصفحة', 'textarea']] },
        { title: 'القصة', fields: [['aboutStoryTag', 'شارة القصة'], ['aboutStoryTitle', 'عنوان القصة'], ['aboutStoryBody1', 'الفقرة الأولى', 'textarea'], ['aboutStoryBody2', 'الفقرة الثانية', 'textarea']] },
        { title: 'الرؤية والمهمة والفريق', fields: [['aboutVisionMissionTitle', 'عنوان الرؤية والمهمة'], ['aboutVisionTitle', 'عنوان الرؤية'], ['aboutVisionText', 'نص الرؤية', 'textarea'], ['aboutMissionTitle', 'عنوان المهمة'], ['aboutMissionText', 'نص المهمة', 'textarea'], ['aboutValuesTitle', 'عنوان القيم'], ['aboutTeamTitle', 'عنوان الفريق'], ['aboutTeamSubtitle', 'وصف الفريق', 'textarea']] }
      ]
    },
    {
      id: 'goals', title: 'أهدافنا', icon: 'target', url: 'goals.html', hint: 'تحكم فصفحة الأهداف والمحاور الستة.',
      groups: [
        { title: 'رأس الصفحة', fields: [['goalsPageTitle', 'عنوان الصفحة'], ['goalsPageHighlight', 'الكلمة الملونة'], ['goalsPageSubtitle', 'وصف الصفحة', 'textarea'], ['goalsSectionTag', 'شارة المحاور'], ['goalsSectionTitle', 'عنوان المحاور'], ['goalsSectionSubtitle', 'وصف المحاور', 'textarea']] },
        { title: 'المحاور', fields: [['goal1Title', 'عنوان الهدف 1'], ['goal1Text', 'وصف الهدف 1', 'textarea'], ['goal2Title', 'عنوان الهدف 2'], ['goal2Text', 'وصف الهدف 2', 'textarea'], ['goal3Title', 'عنوان الهدف 3'], ['goal3Text', 'وصف الهدف 3', 'textarea'], ['goal4Title', 'عنوان الهدف 4'], ['goal4Text', 'وصف الهدف 4', 'textarea'], ['goal5Title', 'عنوان الهدف 5'], ['goal5Text', 'وصف الهدف 5', 'textarea'], ['goal6Title', 'عنوان الهدف 6'], ['goal6Text', 'وصف الهدف 6', 'textarea']] },
        { title: 'دعوة المشاركة', fields: [['goalsCtaTitle', 'عنوان الدعوة'], ['goalsCtaText', 'نص الدعوة', 'textarea']] }
      ]
    },
    {
      id: 'projects', title: 'مشاريعنا', icon: 'folder-kanban', url: 'projects.html', hint: 'تحكم فصفحة المشاريع والعناصر الأولى فيها.',
      groups: [
        { title: 'رأس الصفحة', fields: [['projectsPageTitle', 'عنوان الصفحة'], ['projectsPageHighlight', 'الكلمة الملونة'], ['projectsPageSubtitle', 'وصف الصفحة', 'textarea'], ['projectsSectionTag', 'شارة المشاريع'], ['projectsSectionTitle', 'عنوان قسم المشاريع']] },
        { title: 'المشاريع', fields: [['project1Title', 'عنوان المشروع 1'], ['project1Text', 'وصف المشروع 1', 'textarea'], ['project2Title', 'عنوان المشروع 2'], ['project2Text', 'وصف المشروع 2', 'textarea'], ['project3Title', 'عنوان المشروع 3'], ['project3Text', 'وصف المشروع 3', 'textarea'], ['project4Title', 'عنوان المشروع 4'], ['project4Text', 'وصف المشروع 4', 'textarea']] },
        { title: 'دعوة الدعم', fields: [['projectsCtaTitle', 'عنوان الدعوة'], ['projectsCtaText', 'نص الدعوة', 'textarea']] }
      ]
    },
    {
      id: 'join', title: 'انضم إلينا', icon: 'user-plus', url: 'join.html', hint: 'تحكم فصفحة الانضمام: التطوع، العضوية، والدعم.',
      groups: [
        { title: 'رأس الصفحة', fields: [['joinPageTitle', 'عنوان الصفحة'], ['joinPageHighlight', 'الكلمة الملونة'], ['joinPageSubtitle', 'وصف الصفحة', 'textarea']] },
        { title: 'النماذج', fields: [['volunteerTitle', 'عنوان التطوع'], ['volunteerText', 'نص التطوع', 'textarea'], ['memberTitle', 'عنوان العضوية'], ['memberText', 'نص العضوية', 'textarea'], ['donateTitle', 'عنوان الدعم'], ['donateText', 'نص الدعم', 'textarea'], ['donateBankText', 'رسالة معلومات الدعم البنكي', 'textarea']] }
      ]
    },
    {
      id: 'contact', title: 'اتصل بنا', icon: 'mail', url: 'contact.html', hint: 'تحكم فصفحة الاتصال والمعلومات الظاهرة فيها.',
      groups: [
        { title: 'رأس الصفحة', fields: [['contactPageTitle', 'عنوان الصفحة'], ['contactPageHighlight', 'الكلمة الملونة'], ['contactPageSubtitle', 'وصف الصفحة', 'textarea']] },
        { title: 'معلومات التواصل', fields: [['contactInfoTag', 'شارة معلومات التواصل'], ['contactInfoTitle', 'عنوان معلومات التواصل'], ['contactInfoText', 'النص التعريفي', 'textarea'], ['contactAddressTitle', 'عنوان المقر'], ['contactPhoneTitle', 'عنوان الهاتف'], ['contactEmailTitle', 'عنوان البريد'], ['contactMapText', 'نص مساحة الخريطة', 'textarea']] }
      ]
    }
  ];

  let activePage = pages[0].id;
  const allFieldNames = [...new Set(pages.flatMap(page => page.groups.flatMap(group => group.fields.map(field => field[0]))))];

  function pageById(id) {
    return pages.find(page => page.id === id) || pages[0];
  }

  function showStatus(message, type = 'success') {
    status.textContent = message;
    status.className = `status ${type}`;
    clearTimeout(showStatus.timer);
    showStatus.timer = setTimeout(() => {
      status.textContent = '';
      status.className = 'status';
    }, 3500);
  }

  function renderTabs() {
    pageTabs.innerHTML = pages.map(page => `
      <button type="button" class="page-tab ${page.id === activePage ? 'active' : ''}" data-page="${page.id}">
        <i data-lucide="${page.icon}"></i> ${page.title}
      </button>
    `).join('');

    mobilePageTabs.innerHTML = pages.map(page => `<option value="${page.id}">${page.title}</option>`).join('');
    mobilePageTabs.value = activePage;

    pageTabs.querySelectorAll('[data-page]').forEach(button => {
      button.addEventListener('click', () => setActivePage(button.dataset.page));
    });
    mobilePageTabs.addEventListener('change', () => setActivePage(mobilePageTabs.value));
    if (window.lucide) window.lucide.createIcons();
  }

  function renderFields() {
    const settings = admin.readSettings();
    const page = pageById(activePage);
    currentPageTitle.textContent = page.title;
    currentPageHint.textContent = page.hint;
    preview.src = page.url;

    fieldsHost.innerHTML = page.groups.map(group => `
      <div class="section-title">${group.title}</div>
      ${group.fields.map(([name, label, type = 'text']) => {
        const value = settings[name] ?? '';
        const full = type === 'textarea' ? ' full' : '';
        const control = type === 'textarea'
          ? `<textarea name="${name}">${escapeHtml(value)}</textarea>`
          : `<input name="${name}" type="${type}" value="${escapeHtml(value)}" ${type === 'number' ? 'min="0"' : ''}>`;
        return `<div class="field${full}"><label>${label}</label>${control}</div>`;
      }).join('')}
    `).join('');
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  }

  function collectVisibleFields() {
    const data = {};
    fieldsHost.querySelectorAll('input, textarea, select').forEach(input => {
      data[input.name] = input.value.trim();
    });
    return data;
  }

  function setActivePage(id) {
    activePage = id;
    renderTabs();
    renderFields();
  }

  function saveCurrentPage() {
    admin.saveSettings(collectVisibleFields());
    showStatus('تم حفظ تغييرات هذه الصفحة وتطبيقها.');
    const page = pageById(activePage);
    preview.src = page.url;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    saveCurrentPage();
  });

  document.getElementById('openPreviewBtn')?.addEventListener('click', () => {
    window.open(pageById(activePage).url, '_blank', 'noopener');
  });

  document.getElementById('resetBtn')?.addEventListener('click', () => {
    if (!confirm('واش متأكد بغيتي ترجع الإعدادات الأصلية؟')) return;
    admin.resetSettings();
    renderFields();
    preview.src = pageById(activePage).url;
    showStatus('تم إرجاع الإعدادات الأصلية.');
  });

  document.getElementById('exportBtn')?.addEventListener('click', () => {
    exportBox.value = JSON.stringify(admin.readSettings(), null, 2);
    exportBox.focus();
    exportBox.select();
    showStatus('تم تجهيز نسخة الإعدادات.');
  });

  document.getElementById('copyExportBtn')?.addEventListener('click', async () => {
    const value = exportBox.value || JSON.stringify(admin.readSettings(), null, 2);
    exportBox.value = value;
    try {
      await navigator.clipboard.writeText(value);
      showStatus('تم نسخ الإعدادات.');
    } catch (error) {
      exportBox.focus();
      exportBox.select();
      showStatus('حدد النص وانسخه يدوياً.', 'warning');
    }
  });

  document.getElementById('importBtn')?.addEventListener('click', () => {
    try {
      const imported = JSON.parse(importBox.value || '{}');
      admin.saveSettings(imported);
      renderFields();
      preview.src = pageById(activePage).url;
      showStatus('تم استيراد الإعدادات بنجاح.');
    } catch (error) {
      showStatus('JSON غير صحيح. راجع النص وحاول مرة أخرى.', 'error');
    }
  });

  renderTabs();
  renderFields();
});