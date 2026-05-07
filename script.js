const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

function removeActiveLinks() {
  links.forEach(link => link.classList.remove('active'));
}

links.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveLinks();
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  removeActiveLinks();

  const activeLink = document.querySelector(`.nav-links a[href="#${currentSection}"]`);

  if (activeLink) {
    activeLink.classList.add('active');
  }
});
