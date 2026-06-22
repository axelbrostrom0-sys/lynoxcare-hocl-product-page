/* LynoxCare theme scripts: gallery thumbnails, variant/purchase option
   selection, sticky bar price sync. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  // Gallery: clicking a thumbnail swaps the main image.
  function initGallery() {
    var main = document.querySelector('[data-gallery-main]');
    if (!main) return;
    document.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-src');
        if (!src) return;
        main.innerHTML = '<img src="' + src + '" alt="' + (thumb.getAttribute('data-alt') || '') + '">';
        main.classList.remove('is-empty');
      });
    });
  }

  // Purchase options / variants: update price + hidden variant id.
  function initOptions() {
    var priceEl = document.querySelector('[data-price]');
    var stickyPrice = document.querySelector('[data-sticky-price]');
    var variantInput = document.querySelector('[data-variant-id]');

    document.querySelectorAll('[data-option]').forEach(function (opt) {
      opt.addEventListener('click', function () {
        document.querySelectorAll('[data-option]').forEach(function (o) {
          o.classList.remove('active');
        });
        opt.classList.add('active');

        var radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        var price = opt.getAttribute('data-price-text');
        if (price) {
          if (priceEl) priceEl.textContent = price;
          if (stickyPrice) stickyPrice.textContent = price;
        }
        var vid = opt.getAttribute('data-variant');
        if (vid && variantInput) variantInput.value = vid;
      });
    });
  }

  if (document.readyState !== 'loading') {
    initGallery();
    initOptions();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      initGallery();
      initOptions();
    });
  }
})();
