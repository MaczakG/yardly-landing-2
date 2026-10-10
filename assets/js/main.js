(function () {
  "use strict";

  var body = document.body;
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  /* Header hairline once the page scrolls */
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile navigation */
  function setNav(open) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", String(open));
    body.classList.toggle("nav-open", open);
    if (mobileNav) mobileNav.inert = !open;
  }

  if (toggle && mobileNav) {
    mobileNav.inert = true;
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.classList.contains("nav-open")) {
        setNav(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 760px)").addEventListener("change", function (mq) {
      if (mq.matches) setNav(false);
    });
  }

  /* Pause diagram animation for people who prefer reduced motion */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function applyMotionPreference() {
    document.querySelectorAll(".yard__svg").forEach(function (svg) {
      if (typeof svg.pauseAnimations !== "function") return;
      if (reduceMotion.matches) {
        svg.pauseAnimations();
      } else {
        svg.unpauseAnimations();
      }
    });
  }
  applyMotionPreference();
  reduceMotion.addEventListener("change", applyMotionPreference);

  /* Contact form: client-side validation and confirmation.
     There is no backend yet — wire the submit handler to your CRM or form endpoint. */
  var form = document.getElementById("enquiry-form");
  if (form) {
    var success = document.getElementById("enquiry-success");

    function fieldOf(input) {
      return input.closest(".field");
    }

    function validate(input) {
      var field = fieldOf(input);
      if (!field) return true;
      var ok = input.checkValidity();
      field.classList.toggle("is-invalid", !ok);
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }

    form.querySelectorAll("[required]").forEach(function (input) {
      input.addEventListener("blur", function () {
        if (input.value || fieldOf(input).classList.contains("is-invalid")) validate(input);
      });
      input.addEventListener("input", function () {
        if (fieldOf(input).classList.contains("is-invalid")) validate(input);
      });
      input.addEventListener("change", function () {
        if (input.type === "checkbox") validate(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll("[required]").forEach(function (input) {
        if (!validate(input) && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }
    });
  }
})();
