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

  // "29 990 Ft": thousands grouped with a non-breaking space (Intl leaves 4-digit numbers ungrouped).
  function num(n) {
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  }

  function huf(n) {
    return num(n) + "\u00a0Ft";
  }

  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, function (m, key) {
      return key in values ? values[key] : m;
    });
  }

  /* Header hairline once the page scrolls */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mega menu (Megoldásaink). Without JavaScript the trigger is a plain link to the overview. */
  var trigger = document.querySelector(".nav__trigger");
  var mega = document.getElementById("mega");

  if (trigger && mega) {
    var closeTimer = 0;
    var hoverOpenedAt = 0;

    var setMega = function (open) {
      window.clearTimeout(closeTimer);
      trigger.setAttribute("aria-expanded", String(open));
      mega.hidden = !open;
      if (header) header.classList.toggle("mega-open", open);
    };

    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var open = trigger.getAttribute("aria-expanded") === "true";
      // A click right after the pointer opened the menu keeps it open.
      if (open && Date.now() - hoverOpenedAt < 400) return;
      setMega(!open);
    });

    [trigger.parentElement, mega].forEach(function (el) {
      el.addEventListener("pointerenter", function (e) {
        if (e.pointerType !== "mouse") return;
        if (mega.hidden) hoverOpenedAt = Date.now();
        setMega(true);
      });
      el.addEventListener("pointerleave", function (e) {
        if (e.pointerType !== "mouse") return;
        closeTimer = window.setTimeout(function () {
          setMega(false);
        }, 200);
      });
    });

    document.addEventListener("click", function (e) {
      if (!mega.hidden && !mega.contains(e.target) && !trigger.contains(e.target)) setMega(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mega.hidden) {
        setMega(false);
        trigger.focus();
      }
    });

    mega.addEventListener("focusout", function (e) {
      if (e.relatedTarget && !mega.contains(e.relatedTarget) && e.relatedTarget !== trigger) setMega(false);
    });

    window.matchMedia("(max-width: 1199px)").addEventListener("change", function (mq) {
      if (mq.matches) setMega(false);
    });
  }

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
    window.matchMedia("(min-width: 1200px)").addEventListener("change", function (mq) {
      if (mq.matches) setNav(false);
    });
  }

  /* Pricing: monthly or annual payment */
  var cycle = "monthly";

  var cycleButtons = document.querySelectorAll(".cycle__btn");
  cycleButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      cycle = btn.getAttribute("data-cycle");
      cycleButtons.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-pressed", String(on));
      });
      document.querySelectorAll("[data-cycle-root] [data-monthly]").forEach(function (el) {
        el.textContent = el.getAttribute("data-" + cycle);
      });
    });
  });

  /* Blog: category filters */
  var filters = document.querySelector("[data-filters]");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      var value = btn.getAttribute("data-filter");
      filters.querySelectorAll("[data-filter]").forEach(function (b) {
        var on = b === btn;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-pressed", String(on));
      });
      document.querySelectorAll(".posts .post-card").forEach(function (card) {
        card.hidden = value !== "" && card.getAttribute("data-category") !== value;
      });
    });
  }

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

  /* Contact form: prefill from the link, validate, then POST to the endpoint or fall back to e-mail */
  var form = document.getElementById("enquiry-form");
  if (form) {
    var success = document.getElementById("enquiry-success");
    var submitBtn = form.querySelector('button[type="submit"]');
    var topic = form.querySelector("#f-topic");

    // Links such as /kapcsolat/?tema=demo#enquiry pick the topic.
    var params = new URLSearchParams(window.location.search);
    var wanted = params.get("tema");
    if (wanted && Array.prototype.some.call(topic.options, function (o) { return o.value === wanted; })) {
      topic.value = wanted;
    }

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

    // A field's label without its hint ("Telefon (nem kötelező)" → "Telefon").
    function labelOf(id) {
      var label = form.querySelector('label[for="f-' + id + '"]');
      return label && label.firstChild ? label.firstChild.textContent.trim() : id;
    }

    function collect() {
      var data = new FormData(form);
      var get = function (key) {
        return String(data.get(key) || "").trim();
      };
      return {
        topic: get("topic"),
        topicLabel: topic.value ? topic.options[topic.selectedIndex].text : "",
        name: get("name"),
        company: get("company"),
        email: get("email"),
        phone: get("phone"),
        vehicles: get("vehicles"),
        equipment: get("equipment"),
        message: get("message"),
        website: get("website"),
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
      var line = function (id, value) {
        return value ? labelOf(id) + ": " + value : null;
      };
      var lines = [
        line("topic", payload.topicLabel),
        line("name", payload.name),
        line("company", payload.company),
        line("email", payload.email),
        line("phone", payload.phone),
        line("vehicles", payload.vehicles),
        line("equipment", payload.equipment),
        "",
        payload.message,
      ].filter(function (l) {
        return l !== null;
      });
      var subject = (form.getAttribute("data-subject") || "") + (payload.topicLabel ? " – " + payload.topicLabel : "");
      window.location.href =
        "mailto:" + settings.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
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
