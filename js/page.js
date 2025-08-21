// Najdeme všechny elementy s fade-element
const faders = document.querySelectorAll('.fade-element');

const appearOptions = {
  threshold: 0.1 // element se spustí, když je 10% viditelný
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // jen jednou
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
