// Mobile hamburger navigation — shared by every page (styles in nav-mobile.css).
(function () {
  var nav = document.getElementById('navbar');
  var links = nav && nav.querySelector('.nav-links');
  if (!links) return;

  var toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'mobile-menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  var menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobile-menu';
  menu.innerHTML = links.innerHTML;
  document.body.appendChild(menu);

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('menu-open'));
  });
  // Close after picking a link (matters for same-page anchors like #rsvp).
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) setOpen(false);
  });
})();
