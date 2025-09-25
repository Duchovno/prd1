document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("go-order");

  if (!button) return;

  button.addEventListener("click", () => {
    const vykladType = document.getElementById("vyklad_type")?.value || "";
    const price = document.getElementById("price")?.value || "";

    const form = document.getElementById("order-form");
    if (!form) return;

    // sběr všech otázek (max 5)
    const questionFields = Array.from(form.querySelectorAll("textarea.question"));
    const questions = questionFields
      .map(q => q.value.trim())
      .filter(v => v !== "")
      .slice(0, 5);

    // sběr zpráv – každá má svůj klíč
    const angelMessage = document.getElementById("angel-message")?.value.trim() || "";
    const loveMessage = document.getElementById("love-message")?.value.trim() || "";
    const moneyMessage = document.getElementById("money-message")?.value.trim() || "";
    const healthMessage = document.getElementById("health-message")?.value.trim() || "";
    const careerMessage = document.getElementById("career-message")?.value.trim() || "";

    // údaje o narození
    const customerName = document.getElementById("customer-name")?.value.trim() || "";
    const placeOfBirth = document.getElementById("place-of-birth")?.value.trim() || "";
    const dateOfBirthUni = document.getElementById("date-of-birth-uni")?.value || "";
    const dateOfBirthWoman = document.getElementById("date-of-birth-woman")?.value || "";
    const dateOfBirthMan = document.getElementById("date-of-birth-man")?.value || "";
    const timeOfBirth = document.getElementById("time-of-birth")?.value || "";

    // uložíme data do localStorage
    localStorage.setItem(
      "orderData",
      JSON.stringify({
        vykladType,
        price,
        questions,
        messages: {
          angel: angelMessage,
          love: loveMessage,
          money: moneyMessage,
          health: healthMessage,
          career: careerMessage,
        },
        customerName,
        placeOfBirth,
        dateOfBirthUni,
        dateOfBirthWoman,
        dateOfBirthMan,
        timeOfBirth,
      })
    );

    // přesměrování na objednávku
    window.location.href = "objednavka.html";
  });
});
