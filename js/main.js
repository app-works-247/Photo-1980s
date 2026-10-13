/* ==========================================================================
   Rad Lab — Interactive Logic & Multi-Language Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initBeforeAfterSlider();
  initStyleTabs();
  initPricingToggle();
  initFaqAccordion();
  initMobileMenu();
});

/* ==========================================================================
   1. Multi-Language Switcher (EN / VI)
   ========================================================================== */
const translations = {
  en: {
    footer_nav_title: "Navigation",
    footer_legal_title: "Legal & Privacy",
    footer_contact_title: "Contact & Support",
    footer_link_privacy: "Privacy Policy",
    footer_link_terms: "Terms of Service"
  },
  vi: {
    footer_nav_title: "Điều hướng",
    footer_legal_title: "Pháp lý & Quyền riêng tư",
    footer_contact_title: "Liên hệ & Hỗ trợ",
    footer_link_privacy: "Chính sách quyền riêng tư",
    footer_link_terms: "Điều khoản dịch vụ"
  }
};

let currentLang = localStorage.getItem('photoai_lang') || 'en';

function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  applyLanguage(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('photoai_lang', currentLang);
        applyLanguage(currentLang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  
  // Update buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply all data-i18n attributes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also handle elements with separate data-en and data-vi
  document.querySelectorAll('[data-en][data-vi]').forEach(el => {
    el.textContent = (lang === 'vi') ? el.getAttribute('data-vi') : el.getAttribute('data-en');
  });
}

/* ==========================================================================
   2. Interactive Before / After Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.querySelector('.comparison-slider-wrapper');
  const afterWrapper = document.querySelector('.comparison-after-wrapper');
  const afterImg = document.querySelector('.comparison-after-wrapper img');
  const handle = document.querySelector('.comparison-handle');

  if (!container || !afterWrapper || !handle) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let percentage = ((xPos - rect.left) / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    afterWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    
    // Maintain inner image scale matching the container
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  }

  // Handle window resizing
  window.addEventListener('resize', () => {
    const rect = container.getBoundingClientRect();
    if (afterImg) {
      afterImg.style.width = `${rect.width}px`;
    }
  });

  // Mouse events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial set
  const rect = container.getBoundingClientRect();
  if (afterImg) {
    afterImg.style.width = `${rect.width}px`;
  }
}

/* ==========================================================================
   3. Style Showcase Category Tabs
   ========================================================================== */
function initStyleTabs() {
  const tabs = document.querySelectorAll('.style-tab-btn');
  const cards = document.querySelectorAll('.style-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Pricing Toggle (Subscriptions vs Credit Packs)
   ========================================================================== */
function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-toggle-btn');
  const subGrid = document.querySelector('.pricing-grid-subscription');
  const packGrid = document.querySelector('.pricing-grid-packs');

  if (!toggleBtns.length || !subGrid || !packGrid) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      if (target === 'packs') {
        subGrid.style.display = 'none';
        packGrid.style.display = 'grid';
      } else {
        subGrid.style.display = 'grid';
        packGrid.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other items
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. Mobile Menu Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  // Close when clicking a link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}
