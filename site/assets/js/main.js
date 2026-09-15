// Israr Mohammed portfolio — the only script. Progressive enhancement only.
// S4: copy-email. Loaded with defer; no dependencies.
(function () {
  "use strict";

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
