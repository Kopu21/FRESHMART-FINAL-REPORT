/**
 * FreshMart - Main Frontend Interactivity Script
 * Covers Quick View, Search Filter, Deals Timer, Pincode Checker, Mobile Menu & FAQs
 */

(function () {
  'use strict';

  // Countdown Timer for Daily Deals
  function initDealTimer() {
    const timerEls = document.querySelectorAll('.deal-timer');
    if (!timerEls.length) return;

    let targetTime = new Date();
    targetTime.setHours(23, 59, 59, 999);

    function update() {
      const now = new Date();
      const diff = targetTime - now;
      if (diff <= 0) {
        targetTime = new Date();
        targetTime.setHours(23, 59, 59, 999);
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      timerEls.forEach(el => {
        const hSpan = el.querySelector('.timer-h');
        const mSpan = el.querySelector('.timer-m');
        const sSpan = el.querySelector('.timer-s');

        if (hSpan) hSpan.textContent = String(hours).padStart(2, '0');
        if (mSpan) mSpan.textContent = String(minutes).padStart(2, '0');
        if (sSpan) sSpan.textContent = String(seconds).padStart(2, '0');
      });
    }

    update();
    setInterval(update, 1000);
  }

  // Quick View Modal Controller
  window.openQuickView = function (productId) {
    const product = (typeof FRESHMART_PRODUCTS !== 'undefined') ? getProductById(productId) : null;
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const overlay = document.getElementById('quick-view-overlay');
    if (!modal || !overlay) return;

    // Populate data
    const imgEl = modal.querySelector('.qv-img');
    const nameEl = modal.querySelector('.qv-name');
    const categoryEl = modal.querySelector('.qv-category');
    const priceEl = modal.querySelector('.qv-price');
    const origPriceEl = modal.querySelector('.qv-original-price');
    const unitEl = modal.querySelector('.qv-unit');
    const descEl = modal.querySelector('.qv-desc');
    const originEl = modal.querySelector('.qv-origin');
    const addBtn = modal.querySelector('.qv-add-btn');

    if (imgEl) imgEl.src = product.image;
    if (nameEl) nameEl.textContent = product.name;
    if (categoryEl) categoryEl.textContent = product.categoryLabel;
    if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
    if (origPriceEl) origPriceEl.textContent = `$${product.originalPrice.toFixed(2)}`;
    if (unitEl) unitEl.textContent = product.unit;
    if (descEl) descEl.textContent = product.shortDesc;
    if (originEl) originEl.textContent = product.farmOrigin;

    if (addBtn) {
      addBtn.onclick = function () {
        const qtyInput = modal.querySelector('.qv-qty-input');
        const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
        window.addToCart(product.id, qty);
        window.closeQuickView();
      };
    }

    overlay.classList.add('active');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeQuickView = function () {
    const modal = document.getElementById('quick-view-modal');
    const overlay = document.getElementById('quick-view-overlay');
    if (modal && overlay) {
      overlay.classList.remove('active');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  // Wishlist toggle
  let wishlistCount = 3;
  window.toggleWishlist = function (btn, productId) {
    btn.classList.toggle('text-red-500');
    const isSaved = btn.classList.contains('text-red-500');
    wishlistCount += isSaved ? 1 : -1;
    
    document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
      badge.textContent = Math.max(0, wishlistCount);
    });

    if (window.showToast) {
      window.showToast(isSaved ? 'Saved to your Wishlist!' : 'Removed from Wishlist', isSaved ? 'success' : 'info');
    }
  };

  // Pincode / Zip Checker
  window.checkDeliveryPincode = function (e) {
    if (e) e.preventDefault();
    const input = document.getElementById('pincode-input');
    const resultBox = document.getElementById('pincode-result');
    if (!input || !resultBox) return;

    const val = input.value.trim();
    if (!val || val.length < 3) {
      resultBox.innerHTML = `
        <div class="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300 text-sm flex items-center gap-2">
          <span>⚠️ Please enter a valid Postal / Zip Code.</span>
        </div>
      `;
      resultBox.classList.remove('hidden');
      return;
    }

    // Realistic delivery check
    resultBox.innerHTML = `
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl text-emerald-800 dark:text-emerald-200 text-sm">
        <div class="flex items-center gap-2 font-bold text-base text-emerald-700 dark:text-emerald-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Express Morning Slots Available for "${val}"!
        </div>
        <p class="mt-1 text-xs text-slate-600 dark:text-slate-300">
          Order in the next <strong>3 hrs 40 mins</strong> to receive fresh harvest tomorrow between <strong>6:30 AM - 8:30 AM</strong>.
        </p>
      </div>
    `;
    resultBox.classList.remove('hidden');
  };

  // Mobile Navigation Drawer
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu-drawer');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('close-mobile-menu');

    function syncClosedDirection() {
      if (!mobileMenu || mobileMenu.classList.contains('mobile-menu-open')) return;
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      mobileMenu.classList.remove('translate-x-full', '-translate-x-full');
      mobileMenu.classList.add(isRTL ? '-translate-x-full' : 'translate-x-full');
    }

    function open() {
      if (mobileMenu && mobileOverlay) {
        mobileOverlay.classList.remove('hidden');
        mobileMenu.classList.remove('translate-x-full', '-translate-x-full');
        mobileMenu.classList.add('mobile-menu-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function close() {
      if (mobileMenu && mobileOverlay) {
        mobileOverlay.classList.add('hidden');
        mobileMenu.classList.remove('mobile-menu-open');
        syncClosedDirection();
        document.body.style.overflow = '';
      }
    }

    syncClosedDirection();

    if (toggleBtn) toggleBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (mobileOverlay) mobileOverlay.addEventListener('click', close);
    document.addEventListener('freshmart:directionchange', syncClosedDirection);
  }

  // FAQ Accordion Handlers
  function initFAQs() {
    document.querySelectorAll('.faq-header').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon = btn.querySelector('.faq-icon');
        
        const isOpen = !content.classList.contains('hidden');
        
        // Close all other FAQs in same group
        item.parentElement.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        item.parentElement.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  }

  // Bulk Order Estimator for Contact Page
  window.calculateBulkEstimate = function () {
    const qtyInput = document.getElementById('bulk-volume-input');
    const typeSelect = document.getElementById('bulk-type-select');
    const estimateTotal = document.getElementById('bulk-estimated-cost');
    const discountLabel = document.getElementById('bulk-discount-label');

    if (!qtyInput || !typeSelect || !estimateTotal) return;

    const kg = parseFloat(qtyInput.value) || 0;
    const baseRates = {
      'mixed-veggies': 2.20,
      'seasonal-fruits': 3.80,
      'culinary-herbs': 6.50,
      'dry-fruits-nuts': 14.00
    };

    const rate = baseRates[typeSelect.value] || 2.50;
    let discount = 0;
    if (kg >= 200) discount = 0.25; // 25% off
    else if (kg >= 100) discount = 0.20; // 20% off
    else if (kg >= 50) discount = 0.15; // 15% off
    else if (kg >= 20) discount = 0.10; // 10% off

    const total = kg * rate * (1 - discount);

    estimateTotal.textContent = `$${total.toFixed(2)}`;
    if (discountLabel) {
      discountLabel.textContent = `${(discount * 100)}% Volume Discount Applied`;
    }
  };

  // DOM Content Ready
  document.addEventListener('DOMContentLoaded', () => {
    initDealTimer();
    initMobileMenu();
    initFAQs();

    // Quick View Overlay Close
    const qvOverlay = document.getElementById('quick-view-overlay');
    if (qvOverlay) qvOverlay.addEventListener('click', window.closeQuickView);
  });
})();
