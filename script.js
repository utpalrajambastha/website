// Toggle navbar menu icon and navbar visibility
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Highlight active nav link on scroll and show section animation
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(section => {
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove 'active' from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' to the current section's nav link
      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');

      // Add animation trigger
      section.classList.add('show-animate');
    } else {
      section.classList.remove('show-animate');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);

  // Auto-close navbar on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
