document.getElementById("go-order").addEventListener("click", () => {
  const type = document.getElementById("vyklad_type").value;
  const price = document.getElementById("price").value;
  const question = document.getElementById("question").value.trim();

  if (!question) {
    alert("Napiš prosím svou otázku.");
    return;
  }

  const params = new URLSearchParams();
  params.set("type", encodeURIComponent(type));
  params.set("price", encodeURIComponent(price));
  params.set("questions", encodeURIComponent(JSON.stringify([question])));

  window.location.href = "objednavka.html?" + params.toString();
});

