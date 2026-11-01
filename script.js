// Footer year (falls back to 2026 without JS)
(function () {
  var el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
})();
