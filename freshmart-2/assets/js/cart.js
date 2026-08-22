/**
 * FreshMart - Cart Engine & Toast Notification System
 * Handles Live Cart Drawer, Subtotals, Shipping Progress, and Interactive Feedback
 */

(function () {
  'use strict';

  const FREE_SHIPPING_THRESHOLD = 35.00;
  const STANDARD_DELIVERY_FEE = 4.99;

  // Cart State in LocalStorage
  let cart = [];
  try {
    const saved = localStorage.getItem('freshmart_cart');
    cart = saved ? JSON.parse(saved) : [];
  } catch (e) {
    cart = [];
  }

  // Save Cart helper
  function saveCart() {
    try {
      localStorage.setItem('freshmart_cart', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  // Toast Notification Generator
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-sm font-medium border ${
      isSuccess 
        ? 'bg-emerald-900/90 text-white border-emerald-500/30 backdrop-blur-md' 
        : 'bg-slate-900/90 text-white border-slate-700 backdrop-blur-md'
    }`;
    
    toast.innerHTML = `
      <div class="w-6 h-6 rounded-full flex items-center justify-center ${isSuccess ? 'bg-emerald-500' : 'bg-amber-500'} text-white shrink-0">
        ${isSuccess ? '✓' : '!'}
      </div>
      <div class="flex-1">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  // Add Item to Cart
  window.addToCart = function (productId, quantity = 1) {
    const product = (typeof FRESHMART_PRODUCTS !== 'undefined') ? getProductById(productId) : null;
    if (!product) {
      window.showToast('Item added to cart!', 'success');
      return;
    }

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        image: product.image,
        quantity: quantity
      });
    }

    saveCart();
    window.showToast(`Added <strong>${product.name}</strong> to your basket!`, 'success');
    window.openCartDrawer();
  };

  // Update Cart Quantity
  window.updateCartQty = function (productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      cart[index].quantity += delta;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        window.showToast('Item removed from basket', 'info');
      }
      saveCart();
    }
  };

  // Remove Item
  window.removeFromCart = function (productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      cart.splice(index, 1);
      saveCart();
      window.showToast('Item removed from basket', 'info');
    }
  };

  // Clear Cart
  window.clearCart = function () {
    cart = [];
    saveCart();
    window.showToast('Cart cleared', 'info');
  };

  // Update Cart UI Drawer & Counters
  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const deliveryFee = (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) ? 0 : STANDARD_DELIVERY_FEE;
    const grandTotal = subtotal + deliveryFee;

    // Update Counter Badges
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = totalCount;
      if (totalCount > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });

    // Update Subtotal and Total labels
    document.querySelectorAll('.cart-subtotal-val').forEach(el => el.textContent = `$${subtotal.toFixed(2)}`);
    document.querySelectorAll('.cart-grandtotal-val').forEach(el => el.textContent = `$${grandTotal.toFixed(2)}`);
    document.querySelectorAll('.cart-delivery-val').forEach(el => {
      el.textContent = deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`;
    });

    // Free Shipping Progress Bar
    const progressBars = document.querySelectorAll('.shipping-progress-fill');
    const progressTexts = document.querySelectorAll('.shipping-progress-text');
    
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      progressBars.forEach(bar => bar.style.width = '100%');
      progressTexts.forEach(text => {
        text.innerHTML = '<span class="text-emerald-500 font-semibold">🎉 You unlocked FREE Morning Express Delivery!</span>';
      });
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
      progressBars.forEach(bar => bar.style.width = `${percent}%`);
      progressTexts.forEach(text => {
        text.innerHTML = `Add <span class="text-emerald-500 font-bold">$${remaining.toFixed(2)}</span> more to get <strong>FREE Express Delivery</strong>`;
      });
    }

    // Render Items inside Drawer
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const footerState = document.getElementById('cart-footer-state');

    if (container) {
      if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        if (footerState) footerState.classList.add('hidden');
      } else {
        if (emptyState) emptyState.classList.add('hidden');
        if (footerState) footerState.classList.remove('hidden');

        container.innerHTML = cart.map(item => `
          <div class="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg shrink-0" />
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">${item.name}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">${item.unit}</p>
              <div class="flex items-center justify-between mt-2">
                <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">$${(item.price * item.quantity).toFixed(2)}</span>
                <div class="flex items-center gap-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-2 py-0.5">
                  <button onclick="window.updateCartQty('${item.id}', -1)" class="text-slate-500 hover:text-emerald-600 font-bold px-1">−</button>
                  <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">${item.quantity}</span>
                  <button onclick="window.updateCartQty('${item.id}', 1)" class="text-slate-500 hover:text-emerald-600 font-bold px-1">+</button>
                </div>
              </div>
            </div>
            <button onclick="window.removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-500 transition-colors p-1.5" title="Remove item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        `).join('');
      }
    }
  }

  // Drawer Controls
  window.openCartDrawer = function () {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCartDrawer = function () {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Seed sample products if cart is empty on first load
  if (cart.length === 0) {
    cart = [
      {
        id: 'prod-1',
        name: 'Organic Hass Avocados',
        price: 4.99,
        unit: 'Pack of 3',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
        quantity: 2
      },
      {
        id: 'prod-2',
        name: 'Heirloom Vine-Ripened Tomatoes',
        price: 3.49,
        unit: '1 kg Basket',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
        quantity: 1
      }
    ];
    saveCart();
  }

  // DOM Loaded Listeners
  document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    document.querySelectorAll('.open-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openCartDrawer();
      });
    });

    const closeBtn = document.getElementById('close-cart-btn');
    if (closeBtn) closeBtn.addEventListener('click', window.closeCartDrawer);

    const overlay = document.getElementById('cart-drawer-overlay');
    if (overlay) overlay.addEventListener('click', window.closeCartDrawer);

    // Direction switching is independent from checkout/cart behavior.
    document.addEventListener('freshmart:directionchange', window.closeCartDrawer);
  });
})();
