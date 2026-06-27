/* hero-preview.js — PREVIEW ONLY
   Drives the 3-variant hero comparison on hero-preview.html.
   - Switches variants via the segmented control and the ?hero= query param.
   - Keeps the URL in sync so each variant is deep-linkable/shareable.
   - Detects whether images/hero-ai.jpg exists; shows a labeled placeholder
     on the AI variant when it doesn't.
   Production pages do not load this file. */

(function () {
  'use strict';

  var VARIANTS = ['ai', 'real-single', 'real-montage'];
  var DEFAULT = 'real-single';

  var buttons = Array.prototype.slice.call(
    document.querySelectorAll('.hero-switch__btn')
  );
  var sections = {
    'ai': document.getElementById('hero-ai'),
    'real-single': document.getElementById('hero-real-single'),
    'real-montage': document.getElementById('hero-real-montage')
  };

  function normalize(value) {
    return VARIANTS.indexOf(value) !== -1 ? value : DEFAULT;
  }

  function currentFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return normalize(params.get('hero'));
  }

  function show(variant) {
    variant = normalize(variant);

    VARIANTS.forEach(function (name) {
      var section = sections[name];
      if (section) {
        section.hidden = name !== variant;
      }
    });

    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-hero') === variant;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    var params = new URLSearchParams(window.location.search);
    params.set('hero', variant);
    history.replaceState(null, '', '?' + params.toString());
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      show(btn.getAttribute('data-hero'));
    });
  });

  /* Detect the AI asset; reveal the placeholder note if it is missing. */
  var aiSection = sections.ai;
  if (aiSection) {
    var probe = new Image();
    probe.onload = function () {
      aiSection.classList.remove('is-missing');
    };
    probe.onerror = function () {
      aiSection.classList.add('is-missing');
    };
    probe.src = 'images/hero-ai.jpg?cb=' + Date.now();
  }

  show(currentFromUrl());
})();
