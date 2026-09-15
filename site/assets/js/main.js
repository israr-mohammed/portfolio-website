// Israr Mohammed portfolio — the only script. Progressive enhancement only.
// S4: copy-email. S5: chart draw-on-view trigger. Loaded with defer; no
// dependencies.
(function () {
  "use strict";

  // Marks JS as available. Chart draw animation is scoped in CSS to .js so
  // that with JS off (this line never runs) every chart renders fully drawn
  // by default, per blueprint §4.7 — not an autoplay-then-settle.
  document.documentElement.classList.add("js");

  // Impact charts draw once when first scrolled into view. Falls back to
  // "already drawn" (handled purely by CSS/prefers-reduced-motion) when
  // IntersectionObserver isn't available.
  if ("IntersectionObserver" in window) {
    var chartShapes = document.querySelectorAll(
      ".chart-line[data-animate], .chart-bar[data-animate]"
    );
    var chartObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          chartObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    chartShapes.forEach(function (shape) {
      shape.style.animationPlayState = "paused";
      chartObserver.observe(shape);
    });
  }

  var status = document.getElementById("copy-status");
  var links = document.querySelectorAll("[data-copy-email]");
  if (!links.length || !navigator.clipboard) return;

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
})();
