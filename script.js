const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');


navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    scrollToSection(targetSection);
  });
});

function scrollToSection(section) {
  const sectionOffset = section.getBoundingClientRect().top;
  const scrollOffset = window.pageYOffset;
  const totalOffset = sectionOffset + scrollOffset;

  window.scroll({
    top: totalOffset,
    behavior: 'smooth',
  });
}

function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);
}
