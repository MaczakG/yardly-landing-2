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

  /* Pricing: monthly or annual payment, and the calculator for vehicles, equipment, users and features */
  var cycle = "monthly";
  var calc = document.querySelector("[data-calc]");
  var updateCalc = function () {};

  if (calc) {
    var plans = JSON.parse(calc.getAttribute("data-plans"));
    var addon = JSON.parse(calc.getAttribute("data-addon"));
    var text = JSON.parse(calc.getAttribute("data-text"));
    var features = JSON.parse(calc.getAttribute("data-features") || "[]");
    var checks = calc.querySelectorAll("[data-calc-feature]");
    var max = Number(calc.getAttribute("data-max")) || 300;
    var range = document.getElementById("calc-range");
    var number = document.getElementById("calc-n");
    var eRange = document.getElementById("calc-e-range");
    var eNumber = document.getElementById("calc-e");
    var eMaxInput = Number(eNumber.getAttribute("max")) || 100000;
    var uRange = document.getElementById("calc-u-range");
    var uNumber = document.getElementById("calc-u");
    var uMaxInput = Number(uNumber.getAttribute("max")) || 100000;
    var out = {
      plans: calc.querySelector("[data-calc-plans]"),
      note: calc.querySelector("[data-calc-note]"),
      tier: calc.querySelector("[data-calc-tier]"),
      amount: calc.querySelector("[data-calc-amount]"),
      lines: calc.querySelector("[data-calc-lines]"),
      cta: calc.querySelector("[data-calc-cta]"),
    };

    // Same rules as planQuote in src/pages.mjs: vehicles up to the plan's ceiling, equipment
    // above the plan's limit in "+250 eszköz" packs (Prémium: no limit); too many users or a
    // ticked feature the plan lacks rules it out, unless the plan can buy that feature as an extra.
    var yearly = function (monthly) {
      return cycle === "annual" ? (monthly * (12 - addon.freeMonths)) / 12 : monthly;
    };
    var addonMonthly = function () {
      return yearly(addon.monthly);
    };
    var maxEquipment = function (plan) {
      return plan.equipment === null ? Infinity : plan.equipment + addon.size * addon.maxQuantity;
    };
    var rank = function (key) {
      for (var i = 0; i < plans.length; i++) if (plans[i].key === key) return i;
      return -1;
    };
    var quote = function (plan, n, e, u, wanted) {
      if (n > plan.ceiling) return { plan: plan, off: fill(text.max, { n: plan.ceiling }) };
      if (e > maxEquipment(plan)) return { plan: plan, off: fill(text.maxEquipment, { n: num(maxEquipment(plan)) }) };
      if (plan.users !== null && u > plan.users) return { plan: plan, off: fill(text.maxUsers, { n: plan.users }) };
      var extras = [];
      for (var i = 0; i < wanted.length; i++) {
        var f = wanted[i];
        if (rank(plan.key) >= rank(f.plan)) continue;
        if (!f.addOn || f.addOn.plan !== plan.key) return { plan: plan, off: fill(text.missing, { feature: f.label }) };
        extras.push({ name: f.addOn.name, monthly: yearly(f.addOn.monthly) });
      }
      var base = cycle === "annual" ? plan.annualMonthly : plan.monthly;
      var over = Math.max(0, n - plan.included);
      var packs = plan.equipment === null ? 0 : Math.ceil(Math.max(0, e - plan.equipment) / addon.size);
      var extra = packs * addonMonthly();
      var total = base + over * plan.extra + extra;
      extras.forEach(function (x) {
        total += x.monthly;
      });
      return { plan: plan, base: base, over: over, packs: packs, addon: extra, extras: extras, total: total };
    };

    var item = function (tag, cls, parts) {
      var li = document.createElement(tag);
      if (cls) li.className = cls;
      parts.forEach(function (p) {
        var el = document.createElement(p[0]);
        el.textContent = p[1];
        li.appendChild(el);
      });
      return li;
    };

    var clamp = function (value, low, high, fallback) {
      var v = Math.round(Number(value));
      if (!isFinite(v)) v = fallback;
      return Math.min(high, Math.max(low, v));
    };

    updateCalc = function () {
      var n = clamp(number.value, 1, max, 1);
      var e = clamp(eNumber.value, 0, eMaxInput, 0);
      var u = clamp(uNumber.value, 1, uMaxInput, 1);
      var ticked = {};
      checks.forEach(function (c) {
        if (c.checked) ticked[c.value] = true;
      });
      var wanted = features.filter(function (f) {
        return ticked[f.key];
      });

      var quotes = plans.map(function (p) {
        return quote(p, n, e, u, wanted);
      });
      var best = quotes
        .filter(function (q) {
          return !q.off;
        })
        .reduce(function (a, b) {
          return b.total < a.total ? b : a;
        });

      out.plans.replaceChildren.apply(
        out.plans,
        quotes.map(function (q) {
          if (q.off) return item("li", "is-off", [["b", q.plan.name], ["span", q.off]]);
          return item("li", q === best ? "is-on" : "", [["b", q.plan.name], ["span", huf(q.total) + " " + text.unit]]);
        })
      );

      var plan = best.plan;
      var lines = [[fill(text.base, { plan: plan.name, included: plan.included, equipment: plan.equipment === null ? text.unlimited : num(plan.equipment) }), huf(best.base)]];
      if (best.over) lines.push([fill(text.extra, { n: best.over, price: huf(plan.extra) }), huf(best.over * plan.extra)]);
      if (best.packs) lines.push([fill(text.equipment, { packs: best.packs, price: huf(addonMonthly()) }), huf(best.addon)]);
      best.extras.forEach(function (x) {
        lines.push([fill(text.addOn, { name: x.name }), huf(x.monthly)]);
      });
      out.lines.replaceChildren.apply(
        out.lines,
        lines.map(function (l) {
          return item("li", "", [["span", l[0]], ["b", l[1]]]);
        })
      );

      out.tier.textContent = fill(text.tier, { plan: plan.name, n: n, e: num(e), u: num(u) });
      out.amount.textContent = huf(best.total);
      out.note.textContent = calc.getAttribute(cycle === "annual" ? "data-note-annual" : "data-note-monthly");
      // The sign-up link preselects the plan the calculator found.
      if (out.cta) out.cta.setAttribute("href", fill(text.register, { plan: plan.key }));
    };

    // A slider and a number field per count: either one moves the other.
    var pair = function (slider, field, low, high) {
      slider.addEventListener("input", function () {
        field.value = slider.value;
        updateCalc();
      });
      field.addEventListener("input", function () {
        if (field.value === "") return;
        slider.value = clamp(field.value, low, Number(slider.max), low);
        updateCalc();
      });
      field.addEventListener("change", function () {
        var v = clamp(field.value, low, high, low);
        field.value = v;
        slider.value = Math.min(v, Number(slider.max));
        updateCalc();
      });
    };
    pair(range, number, 1, max);
    pair(eRange, eNumber, 0, eMaxInput);
    pair(uRange, uNumber, 1, uMaxInput);
    checks.forEach(function (c) {
      c.addEventListener("change", updateCalc);
    });
    updateCalc();
  }

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
      updateCalc();
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
