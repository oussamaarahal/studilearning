
// Profile Icon And Menu  
const lang_icon = document.querySelector('.localization')
const lang_menu = document.querySelector('.languages')

lang_icon.addEventListener('click', (e) => {
  e.stopPropagation();
  lang_menu.classList.toggle('hidden');
})

// The Body Document if we click on body we hide the menus of notification and profile and languages popup
document.addEventListener('click', function (event) {
  if (event.target !== lang_icon && event.target !== lang_menu) {
    lang_menu.classList.add('hidden')
  }
});

// Scroll Animation Reval
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.heading-welcome', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.picture-welcome', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.detail', { delay: 400, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('h2', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.fourth-page .title-profs h1', { delay: 100, origin: 'top' });
ScrollReveal().reveal('.subject', { delay: 400, origin: 'bottom', interval: 400 });
ScrollReveal().reveal('.card-city', { delay: 200, origin: 'right', interval: 400 });
ScrollReveal().reveal('.card-prof', { delay: 200, origin: 'left', interval: 400 });
ScrollReveal().reveal('.item', { delay: 400, origin: 'top', interval: 400 });
ScrollReveal().reveal('.heading__social span', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.social a', { delay: 200, origin: 'bottom', interval: 400 });

if (window.innerWidth < 768) {
  ScrollReveal().reveal('.picture-welcome', { delay: 600, origin: 'top' });
  ScrollReveal().reveal('.card-city', { delay: 200, origin: 'bottom', interval: 400 });
  ScrollReveal().reveal('.social a', { delay: 200, origin: 'left', interval: 400 });
}

