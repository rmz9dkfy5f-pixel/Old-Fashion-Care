/* main.js — Old Fashion Care */

(function () {
  'use strict';

  /* ── Active nav link ── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (
      (path === '' || path === 'index.html') && (linkFile === '' || linkFile === 'index.html')
    ) {
      link.classList.add('active');
    } else if (linkFile && path.startsWith(linkFile.split('.')[0]) && linkFile !== 'index.html') {
      link.classList.add('active');
    }
  });

  /* ── Mobile nav toggle ──
     Supports both the Editorial Sage shell (.js-menu-toggle / .es-mobile-nav) and the
     legacy shell (.nav__hamburger / .nav__mobile) so pages on either markup keep working. */
  const toggle = document.querySelector('.js-menu-toggle') || document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.es-mobile-nav') || document.querySelector('.nav__mobile');
  if (toggle && mobileNav) {
    const setOpen = function (open) {
      mobileNav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      const label = open ? 'Close menu' : 'Open menu';
      toggle.setAttribute('aria-label', label);
    };
    toggle.addEventListener('click', function () {
      setOpen(!mobileNav.classList.contains('open'));
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    // Close on Escape, return focus to the toggle
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-item__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all in same category
      const category = item.closest('.faq-category');
      if (category) {
        category.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('open');
          i.querySelector('.faq-item__btn').setAttribute('aria-expanded', 'false');
        });
      }
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .step');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // In production: submit to Netlify Forms / Formspree by removing e.preventDefault()
      // and adding the appropriate action attribute + hidden inputs.
      // For now, show the success state.
      form.style.display = 'none';
      if (success) success.classList.add('visible');
    });
  }
})();
