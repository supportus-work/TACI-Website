const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

// Replace this placeholder with TACI's verified public email before launch.
const OFFICIAL_EMAIL = 'triarccommunityinitiave@gmail.com';
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!OFFICIAL_EMAIL || !OFFICIAL_EMAIL.includes('@')) {
    status.textContent = 'The form is ready, but TACI’s official email address must be added before enquiries can be sent. Please update OFFICIAL_EMAIL in script.js.';
    return;
  }
  const data = new FormData(form);
  const subject = encodeURIComponent(`TACI website enquiry: ${data.get('topic')}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`);
  window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = 'Your email application should open with the enquiry prepared.';
});
