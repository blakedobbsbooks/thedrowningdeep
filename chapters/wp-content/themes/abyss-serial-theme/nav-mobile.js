document.querySelectorAll('#main-nav li > a').forEach(link => {
  if (link.nextElementSibling?.classList.contains('sub-menu')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      link.parentElement.classList.toggle('is-active');
    });
  }
});