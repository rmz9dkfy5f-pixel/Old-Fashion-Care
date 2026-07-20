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

  /* ── Mobile nav toggle ── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
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
  const formError = document.getElementById('form-error');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formError) formError.classList.remove('visible');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (!response.ok) throw new Error('Form submission failed');
        form.style.display = 'none';
        if (success) success.classList.add('visible');
      }).catch(function () {
        if (formError) formError.classList.add('visible');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
        }
      });
    });
  }
})();
