/* ── Minimal JS: mobile menu, form handling, scroll-reveal animations ── */

document.addEventListener('DOMContentLoaded', function() {

  /* ─ Mobile menu toggle ─ */
  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
  }

  /* ─ Contact form submission ─ */
  document.querySelectorAll('.form-grid').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Request sent';
        btn.disabled = true;
        btn.style.opacity = '0.7';
      }
    });
  });

  /* ─ Scroll-reveal: animate .reveal elements when they enter viewport ─ */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealElements.forEach(function(el) {
      el.classList.add('revealed');
    });
  }

  /* ─ Smooth scroll for anchor links ─ */
  document.querySelectorAll('a[href*="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = a.getAttribute('href');
      // Only handle same-page anchors
      if (href.startsWith('#') || (href.includes('#') && href.split('#')[0] === '' )) {
        var id = href.split('#')[1];
        var target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          if (mobileMenu) mobileMenu.classList.remove('open');
        }
      }
    });
  });

  /* ─ Active nav link highlight ─ */
  var currentPage = document.body.getAttribute('data-page') || '';
  document.querySelectorAll('.navlinks a').forEach(function(a) {
    var route = a.getAttribute('data-route') || '';
    if (route === currentPage) {
      a.classList.add('active');
    }
  });

});
