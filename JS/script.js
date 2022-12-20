console.log('Connect...');

///////////////////////////////////////////
//Get the current year for footer
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////
//Activate the mobile navigation
const headerEl = document.querySelector('.header');
const btnMobileNav = document.querySelector('.btn-mobile-nav');
btnMobileNav.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////
//Sticky navbar
const heroSection = document.querySelector('.section-hero');
const stickyHead = function (e) {
  const [entry] = e;
  if (!entry.isIntersecting) headerEl.classList.add('sticky');
  else headerEl.classList.remove('sticky');
};

const headObserver = new IntersectionObserver(stickyHead, {
  root: null,
  threshold: 0,
  rootMargin: '-80px',
});

headObserver.observe(heroSection);

///////////////////////////////////////////
//Page navigation(避免瀏覽器不支援scroll-behavior時使用；平常直接用CSS解決)
const links = document.querySelectorAll('a:link');
links.forEach((link) =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.closest('a:link').getAttribute('href');
    if (id === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (id !== '#' && id.startsWith('#')) {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
    //因為nav收合是在小螢幕上才發生的，故直接加這項也不會有影響
    if (e.target.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  })
);
