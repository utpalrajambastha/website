// ================================
// Navbar Toggle (Mobile)
// ================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// ================================
// Section Scroll Handling
// ================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

const handleScroll = () => {
  const scrollY = window.scrollY;

  // Sticky Header
  header.classList.toggle('sticky', scrollY > 100);

  // Section Activation & Nav Highlight
  sections.forEach(section => {
    const offsetTop = section.offsetTop - 120; // offset for sticky header
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= offsetTop && scrollY < offsetTop + sectionHeight) {
      // Highlight nav link
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');

      // Trigger section animation
      section.classList.add('show-animate');
    }
  });

  // Auto-close navbar when scrolling on mobile
  if (navbar.classList.contains('active')) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

// Debounce scroll for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
  scrollTimeout = requestAnimationFrame(handleScroll);
});

// ================================
// Smooth Scroll for Nav Links
// ================================
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // offset for sticky header
        behavior: 'smooth'
      });
    }
  });
});

// ================================
// Optional: Animate sections on page load
// ================================
window.addEventListener('load', () => {
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      section.classList.add('show-animate');
    }
  });
});
