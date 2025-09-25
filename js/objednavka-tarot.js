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

 