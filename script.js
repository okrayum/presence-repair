// Footer year (falls back to 2026 without JS)
(function () {
  var el = document.getElementById('copyright-year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Notify-me form: no backend on a static site, so we open the visitor's
// email app addressed to Jason with the address prefilled. Simple, honest,
// and it works from day one.
(function () {
  var form = document.getElementById('notify-form');
  var input = document.getElementById('notify-email');
  var note = document.getElementById('notify-note');
  if (!form || !input) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = input.value.trim();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    note.className = 'form-note';
    if (!ok) {
      note.textContent = 'Please enter a valid email address.';
      note.classList.add('error');
      input.focus();
      return;
    }
    var subject = encodeURIComponent('Notify me at Presence Repair launch');
    var body = encodeURIComponent('Please notify me when Presence Repair launches.\n\nMy email: ' + email);
    window.location.href =
      'mailto:jasonmorgan.dev@gmail.com?subject=' + subject + '&body=' + body;
    note.textContent = 'Opening your email app — just hit send and you\u2019re on the list.';
    note.classList.add('ok');
    form.reset();
  });
})();
