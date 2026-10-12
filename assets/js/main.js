(function () {
  "use strict";

  var body = document.body;
  var settings = {
    gaId: body.getAttribute("data-ga-id") || "",
    formEndpoint: body.getAttribute("data-form-endpoint") || "",
    email: body.getAttribute("data-email") || "",
  };

  function storage(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) {
      return null;
    }
    return null;
  }

  /* Header hairline once the page scrolls */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

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
    window.matchMedia("(min-width: 1080px)").addEventListener("change", function (mq) {
      if (mq.matches) setNav(false);
    });
  }

  /* Pause diagram animation for people who prefer reduced motion */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function applyMotionPreference() {
    document.querySelectorAll(".yard__svg").forEach(function (svg) {
      if (typeof svg.pauseAnimations !== "function") return;
      if (reduceMotion.matches) svg.pauseAnimations();
      else svg.unpauseAnimations();
    });
  }
  applyMotionPreference();
  reduceMotion.addEventListener("change", applyMotionPreference);

  /* Analytics: Google Analytics 4 loads only after explicit consent */
  var CONSENT_KEY = "yardly-consent";
  var banner = document.getElementById("consent");
  var gaLoaded = false;

  function loadAnalytics() {
    if (gaLoaded || !settings.gaId) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", settings.gaId);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(settings.gaId);
    document.head.appendChild(s);
  }

  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name.indexOf("_ga") !== 0) return;
      var host = window.location.hostname;
      var parts = host.split(".");
      var domains = ["", host, "." + host];
      if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
      domains.forEach(function (d) {
        document.cookie = name + "=; Max-Age=0; path=/" + (d ? "; domain=" + d : "");
      });
    });
  }

  function setConsent(value) {
    storage(CONSENT_KEY, value);
    if (banner) banner.hidden = true;
    if (value === "granted") {
      loadAnalytics();
    } else {
      if (window.gtag) window.gtag("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
    }
  }

  if (settings.gaId && banner) {
    var stored = storage(CONSENT_KEY);
    if (stored === "granted") loadAnalytics();
    else if (stored !== "denied") banner.hidden = false;

    banner.addEventListener("click", function (e) {
      var choice = e.target.closest("[data-consent]");
      if (choice) setConsent(choice.getAttribute("data-consent"));
    });
    document.querySelectorAll("[data-consent-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        banner.hidden = false;
      });
    });
  }

  /* Contact form: validation, then POST to the configured endpoint or fall back to e-mail */
  var form = document.getElementById("enquiry-form");
  if (form) {
    var success = document.getElementById("enquiry-success");
    var submitBtn = form.querySelector('button[type="submit"]');

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
        if (input.type === "checkbox" || input.tagName === "SELECT") validate(input);
      });
    });

    function collect() {
      var data = new FormData(form);
      return {
        name: (data.get("name") || "").trim(),
        email: (data.get("email") || "").trim(),
        company: (data.get("company") || "").trim(),
        role: (data.get("role") || "").trim(),
        size: data.get("size") || "",
        systems: data.getAll("systems"),
        message: (data.get("message") || "").trim(),
        website: data.get("website") || "",
        language: document.documentElement.lang,
        page: window.location.pathname,
      };
    }

    function showResult(title, text) {
      form.hidden = true;
      if (!success) return;
      if (title) success.querySelector("[data-success-title]").textContent = title;
      if (text) success.querySelector("[data-success-text]").textContent = text;
      success.hidden = false;
      success.focus();
    }

    function withEmail(text) {
      return (text || "").split("{email}").join(settings.email);
    }

    function openMail(payload) {
      var lines = [
        payload.name + " · " + payload.company + (payload.role ? " · " + payload.role : ""),
        payload.email,
        payload.size,
        payload.systems.join(", "),
        "",
        payload.message,
      ];
      var href =
        "mailto:" + settings.email +
        "?subject=" + encodeURIComponent(form.getAttribute("data-subject") || "") +
        "&body=" + encodeURIComponent(lines.join("\n"));
      window.location.href = href;
      showResult(form.getAttribute("data-mailto-title"), withEmail(form.getAttribute("data-mailto-text")));
    }

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

      var payload = collect();
      if (payload.website) {
        // Honeypot filled in: silently pretend success.
        showResult();
        return;
      }

      if (!settings.formEndpoint) {
        openMail(payload);
        return;
      }

      var label = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = form.getAttribute("data-sending") || "…";
      fetch(settings.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          showResult();
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = label;
          var err = form.querySelector(".form-error");
          if (err) {
            err.textContent = withEmail(form.getAttribute("data-error-text"));
            err.hidden = false;
          }
        });
    });
  }
})();
