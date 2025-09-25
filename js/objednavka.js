document.addEventListener("DOMContentLoaded", () => {

  // === ZOBRAZENÍ DATA Z LOCAL STORAGE ===
  const summary = document.getElementById("order-summary");
  const orderRaw = localStorage.getItem("orderData");

  if (!orderRaw) {
    summary.innerHTML = "<p>Žádná objednávka nebyla nalezena. Prosím vrať se a vyber službu.</p>";
  } else {
    const order = JSON.parse(orderRaw);

    // Otázky
    let questionsHtml = "";
    if (order.questions && order.questions.length > 0) {
      questionsHtml = "<div class='order-questions'>";
      order.questions.forEach((q, i) => {
        questionsHtml += `<p><strong>Otázka ${i + 1}:</strong> ${q}</p>`;
      });
      questionsHtml += "</div>";
    }

    // Osobní údaje
    let personalInfoHtml = "<div class='order-personal'>";
    if (order.customerName) personalInfoHtml += `<p><strong>Jméno:</strong> ${order.customerName}</p>`;
    if (order.placeOfBirth) personalInfoHtml += `<p><strong>Místo narození:</strong> ${order.placeOfBirth}</p>`;
    if (order.dateOfBirthUni) personalInfoHtml += `<p><strong>Datum narození:</strong> ${order.dateOfBirthUni}</p>`;
    if (order.dateOfBirthWoman) personalInfoHtml += `<p><strong>Datum narození ženy:</strong> ${order.dateOfBirthWoman}</p>`;
    if (order.dateOfBirthMan) personalInfoHtml += `<p><strong>Datum narození muže:</strong> ${order.dateOfBirthMan}</p>`;
    if (order.timeOfBirth) personalInfoHtml += `<p><strong>Čas narození:</strong> ${order.timeOfBirth}</p>`;

    if (order.messages) {
      if (order.messages.angel) personalInfoHtml += `<p><strong>Angel:</strong> ${order.messages.angel}</p>`;
      if (order.messages.love) personalInfoHtml += `<p><strong>Love:</strong> ${order.messages.love}</p>`;
      if (order.messages.money) personalInfoHtml += `<p><strong>Money:</strong> ${order.messages.money}</p>`;
      if (order.messages.health) personalInfoHtml += `<p><strong>Health:</strong> ${order.messages.health}</p>`;
      if (order.messages.career) personalInfoHtml += `<p><strong>Career:</strong> ${order.messages.career}</p>`;
    }

    personalInfoHtml += "</div>";

    summary.innerHTML = `
      <p><strong>Služba:</strong> ${order.vykladType || "-"}</p>
      ${questionsHtml}
      ${personalInfoHtml}
      <p><strong>Cena:</strong> ${order.price || "-"}</p>
    `;
  }

  // === EMAILJS ODESÍLÁNÍ ===
  const finalForm = document.getElementById("final-order-form");
  const orderSummary = JSON.parse(localStorage.getItem("orderData")) || {};

  finalForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const billingName = document.getElementById("billing-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const street = document.getElementById("street").value.trim();
    const zip = document.getElementById("zip").value.trim();
    const city = document.getElementById("city").value.trim();

    const templateParams = {
      billingName: billingName,                     // pro {{billingName}}
      customer_email: email, 
      serviceName: orderSummary.vykladType || "-", // pro {{serviceName}}
      price: orderSummary.price || "-",            // pro {{price}}
      userInputs: `
Jméno: ${orderSummary.customerName || "-"}
Datum narození: ${orderSummary.dateOfBirthUni || "-"}
Datum narození ženy: ${orderSummary.dateOfBirthWoman || "-"}
Datum narození muže: ${orderSummary.dateOfBirthMan || "-"}
Čas narození: ${orderSummary.timeOfBirth || "-"}
Místo narození: ${orderSummary.placeOfBirth || "-"}
Otázky: ${orderSummary.questions?.join(", ") || "-"}
Angel: ${orderSummary.messages?.angel || "-"}
Love: ${orderSummary.messages?.love || "-"}
Money: ${orderSummary.messages?.money || "-"}
Health: ${orderSummary.messages?.health || "-"}
Career: ${orderSummary.messages?.career || "-"}
Street: ${street || "-"}
PSČ: ${zip || "-"}
Město: ${city || "-"}
      `
    };

    // Odeslání na vlastní email (interní)
    emailjs.send('service_0zno8xf', 'template_s62v8c6', templateParams)
      .then(() => console.log('Email s objednávkou odeslán na tvůj email'))
      .catch(err => console.error('Chyba při odesílání emailu:', err));

    // Odeslání potvrzení zákazníkovi
    emailjs.send('service_0zno8xf', 'template_3qhk5v4', templateParams)
      .then(() => {
        console.log('Potvrzení odesláno zákazníkovi');
        alert("Objednávka byla úspěšně odeslána. Zkontrolujte svůj email.");
        finalForm.reset();
        localStorage.removeItem("orderData");
      })
      .catch(err => console.error('Chyba při odesílání potvrzení:', err));
  });
});

