/**
 * FreshMart - Admin Dashboard Script & Chart.js Visualizations
 * Handles Sales Analytics, Inventory Updates, Order Status Modals & User Management
 */

(function () {
  'use strict';

  // Initialize Admin Charts
  function initAdminCharts() {
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    // Revenue Trend Chart (Line)
    const revenueCanvas = document.getElementById('adminRevenueChart');
    if (revenueCanvas && typeof Chart !== 'undefined') {
      new Chart(revenueCanvas, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Direct Market Revenue ($)',
              data: [3200, 4100, 3900, 5400, 6800, 8900, 7400],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              borderWidth: 3,
              fill: true,
              tension: 0.35,
              pointBackgroundColor: '#10b981',
              pointRadius: 4
            },
            {
              label: 'B2B Wholesale & Subscriptions ($)',
              data: [2100, 2400, 2900, 3200, 4100, 4800, 4300],
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              borderWidth: 2,
              fill: true,
              tension: 0.35,
              pointBackgroundColor: '#f59e0b',
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 12 } }
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: textColor }
            },
            y: {
              grid: { color: gridColor },
              ticks: {
                color: textColor,
                callback: function (val) { return '$' + val; }
              }
            }
          }
        }
      });
    }

    // Category Share Doughnut Chart
    const categoryCanvas = document.getElementById('adminCategoryChart');
    if (categoryCanvas && typeof Chart !== 'undefined') {
      new Chart(categoryCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Organic Vegetables', 'Fresh Fruits', 'Dry Fruits & Nuts', 'Culinary Herbs'],
          datasets: [{
            data: [42, 28, 18, 12],
            backgroundColor: ['#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'],
            borderWidth: isDark ? 2 : 1,
            borderColor: isDark ? '#1e293b' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 }, padding: 14 }
            }
          },
          cutout: '72%'
        }
      });
    }
  }

  // Admin Order Detail Modal
  window.viewAdminOrder = function (orderId, customer, amount, status, itemsCount) {
    const modal = document.getElementById('order-detail-modal');
    const overlay = document.getElementById('admin-modal-overlay');
    if (!modal || !overlay) return;

    modal.querySelector('.m-order-id').textContent = orderId;
    modal.querySelector('.m-customer').textContent = customer;
    modal.querySelector('.m-amount').textContent = amount;
    modal.querySelector('.m-status').textContent = status;
    modal.querySelector('.m-items-count').textContent = `${itemsCount} fresh produce items`;

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeAdminOrderModal = function () {
    const modal = document.getElementById('order-detail-modal');
    const overlay = document.getElementById('admin-modal-overlay');
    if (modal && overlay) {
      overlay.classList.add('hidden');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  // Add Product Modal
  window.openAddProductModal = function () {
    const modal = document.getElementById('add-product-modal');
    const overlay = document.getElementById('admin-modal-overlay');
    if (modal && overlay) {
      overlay.classList.remove('hidden');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  window.closeAddProductModal = function () {
    const modal = document.getElementById('add-product-modal');
    const overlay = document.getElementById('admin-modal-overlay');
    if (modal && overlay) {
      overlay.classList.add('hidden');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  // Filter Orders in Table
  window.filterOrdersByStatus = function (status, btn) {
    document.querySelectorAll('.order-filter-btn').forEach(b => {
      b.classList.remove('bg-emerald-600', 'text-white');
      b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');
    });
    btn.classList.add('bg-emerald-600', 'text-white');
    btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-slate-300');

    const rows = document.querySelectorAll('.order-table-row');
    rows.forEach(row => {
      const rowStatus = row.getAttribute('data-status');
      if (status === 'all' || rowStatus === status) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    initAdminCharts();

    const overlay = document.getElementById('admin-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        window.closeAdminOrderModal();
        window.closeAddProductModal();
      });
    }
  });
})();
