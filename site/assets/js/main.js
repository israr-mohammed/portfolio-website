// Israr Mohammed portfolio — the only script. Progressive enhancement only.
// Loaded with defer; no dependencies.
(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "theme";

  // Runs before first paint (main.css is render-blocking) — no FOUC, no inline script.
  try {
    var savedTheme = localStorage.getItem(THEME_KEY);
    root.setAttribute("data-theme", savedTheme === "light" ? "light" : "dark");
  } catch (e) {}

  // Gates the theme toggle and the assistant launcher (both hidden without JS).
  root.classList.add("js");

  var status = document.getElementById("copy-status");
  var links = document.querySelectorAll("[data-copy-email]");
  if (links.length && navigator.clipboard) {
    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var email = link.href.replace(/^mailto:/, "");
        event.preventDefault();
        navigator.clipboard.writeText(email).then(
          function () {
            if (!status) return;
            status.textContent = "";
            window.setTimeout(function () {
              status.textContent = "Email address copied to clipboard.";
            }, 50);
          },
          function () {
            window.location.href = link.href;
          }
        );
      });
    });
  }

  var toggle = document.querySelector(".theme-toggle");
  function effectiveTheme() {
    return root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  if (toggle) {
    var labelTheme = function (t) {
      toggle.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    };
    labelTheme(effectiveTheme());
    toggle.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      labelTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  var navBtn = document.querySelector(".nav-toggle"), nav = document.querySelector(".site-nav");
  if (navBtn && nav) {
    var setNav = function (open) {
      nav.classList.toggle("is-open", open);
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    navBtn.addEventListener("click", function () { setNav(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target) && !navBtn.contains(e.target)) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setNav(false); navBtn.focus(); }
    });
  }

  // Deterministic FAQ/nav assistant; facts live in assistant.json, fetched once.
  var launch = document.querySelector(".assistant-launch");
  var panel = document.getElementById("assistant-panel");
  if (launch && panel) {
    var closeBtn = panel.querySelector(".assistant-close");
    var answerEl = document.getElementById("assistant-answer");
    var chipsEl = document.getElementById("assistant-chips");
    var intents = null;

    function showAnswer(intent) {
      answerEl.innerHTML = "";
      var q = document.createElement("strong");
      q.textContent = intent.q;
      var a = document.createElement("span");
      a.textContent = intent.a;
      answerEl.append(q, a);
      if (intent.nav) {
        var navLink = document.createElement("a");
        navLink.className = "assistant-action";
        navLink.href = intent.nav.href;
        navLink.textContent = intent.nav.label;
        answerEl.appendChild(navLink);
      }
    }

    function renderChips(list) {
      chipsEl.innerHTML = "";
      list.forEach(function (intent) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "assistant-chip";
        chip.textContent = intent.q;
        chip.addEventListener("click", function () { showAnswer(intent); });
        chipsEl.appendChild(chip);
      });
    }

    function openPanel() {
      panel.hidden = false;
      launch.setAttribute("aria-expanded", "true");
      closeBtn.focus();
      if (intents) return;
      fetch("/assets/data/assistant.json")
        .then(function (r) { return r.json(); })
        .then(function (json) {
          intents = json.intents;
          renderChips(intents);
        })
        .catch(function () {});
    }
    function closePanel() {
      panel.hidden = true;
      launch.setAttribute("aria-expanded", "false");
      launch.focus();
    }

    launch.addEventListener("click", openPanel);
    closeBtn.addEventListener("click", closePanel);
    panel.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closePanel();
    });
  }
})();
