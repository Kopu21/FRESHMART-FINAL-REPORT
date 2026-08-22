/**
 * FreshMart - Theme & Direction Controller
 * Supports Light/Dark Mode & LTR/RTL Switching with LocalStorage Persistence
 */

(function () {
  'use strict';

  // Initialize Theme (Dark / Light)
  const savedTheme = localStorage.getItem('freshmart_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Initialize Direction (LTR / RTL)
  const savedDir = localStorage.getItem('freshmart_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  // Global Toggle Functions
  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('freshmart_theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  };

  window.toggleRTL = function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';

    // A direction switch is a layout-only action. Close any open cart first so
    // the RTL/LTR control can never leave a checkout/cart panel visible.
    if (typeof window.closeCartDrawer === 'function') {
      window.closeCartDrawer();
    }

    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('freshmart_dir', newDir);
    updateRTLButtons();

    // Let direction-aware components (mobile drawer, etc.) resync safely.
    document.dispatchEvent(new CustomEvent('freshmart:directionchange', {
      detail: { direction: newDir }
    }));
    
    // Show toast notice
    if (window.showToast) {
      window.showToast(newDir === 'rtl' ? 'RTL Mode Enabled (Arabic / Hebrew)' : 'LTR Mode Enabled (Default)');
    }
  };

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (isDark) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }

  function updateRTLButtons() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      const textSpan = btn.querySelector('.rtl-text');
      if (textSpan) {
        textSpan.textContent = currentDir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  }

  // Bind on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcons();
    updateRTLButtons();

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleTheme();
      });
    });

    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.toggleRTL();
      });
    });
  });
})();
