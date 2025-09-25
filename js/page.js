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


  // FAQ akordeon
  // -----------------------------
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((q) => {
    const item = q.parentElement;

    // ARIA
    q.setAttribute("role", "button");
    q.setAttribute("tabindex", "0");
    q.setAttribute("aria-expanded", "false");

    const toggle = () => {
      const isOpen = item.classList.contains("open");

      // Zavři ostatní
      document.querySelectorAll(".faq-item.open").forEach((opened) => {
        if (opened !== item) {
          opened.classList.remove("open");
          const btn = opened.querySelector(".faq-question");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });

      // Otevři / zavři aktuální
      item.classList.toggle("open", !isOpen);
      q.setAttribute("aria-expanded", String(!isOpen));
    };

    q.addEventListener("click", toggle);
    q.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });

 