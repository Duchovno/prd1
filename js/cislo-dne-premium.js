const STORAGE_KEY = "cisloDneGlobal";

window.addEventListener("load", () => {
  const btn = document.querySelector("button[onclick='spocitejCislo()']");
  const hlaska = document.createElement("div");
  hlaska.id = "hlaska";
  hlaska.style.marginTop = "1rem";
  hlaska.style.fontWeight = "bold";
  hlaska.textContent = "Získat unikátní číslo dne lze pouze 1x denně.";
  hlaska.style.display = "none";
  btn.insertAdjacentElement("afterend", hlaska);

  const dnes = new Date().toDateString();
  let ulozene = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");

  if (ulozene && ulozene.date === dnes) {
    btn.style.display = "none";
    hlaska.style.display = "block";
    document.getElementById("vysledek").innerHTML = ulozene.resultHTML;

    // fade-in na celý obsah výsledků
    const resultContainer = document.querySelector("#vysledek .result-container");
    if (resultContainer) {
      resultContainer.style.opacity = 0;
      setTimeout(() => {
        resultContainer.style.transition = "opacity 1s";
        resultContainer.style.opacity = 1;
      }, 50);
    }
  }

  function resetTlacitka() {
    const ted = new Date();
    const pusnoc = new Date();
    pusnoc.setHours(24, 0, 0, 0);
    const rozdil = pusnoc - ted;
    setTimeout(() => {
      btn.style.display = "block";
      hlaska.style.display = "none";
      document.getElementById("vysledek").innerHTML = "";
      localStorage.removeItem(STORAGE_KEY);
      resetTlacitka();
    }, rozdil);
  }
  resetTlacitka();
});

function spocitejCislo() {
  const jmeno = document.getElementById("jmeno").value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
  const znameni = parseInt(document.getElementById("znameni").value);
  const dnes = new Date().toDateString();
  let ulozene = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  let nahodne = ulozene && ulozene.date === dnes ? ulozene.value : Math.floor(Math.random() * 20) + 1;

  let soucetJmena = 0;
  let detailJmena = "";
  for (let i = 0; i < jmeno.length; i++) {
    const kod = jmeno.charCodeAt(i);
    if (kod >= 65 && kod <= 90) {
      const hodnota = kod - 64;
      soucetJmena += hodnota;
      detailJmena += `${jmeno[i]}(${hodnota}) `;
    }
  }

  const soucetCislicJmena = soucetJmena.toString().split("").reduce((a, b) => a + parseInt(b), 0);
  const mezisoucet = soucetCislicJmena + znameni;
  const soucetMezisoucet = mezisoucet.toString().split("").reduce((a, b) => a + parseInt(b), 0);
  const finalniSoucet = soucetMezisoucet + nahodne;
  const vysledneCislo = ((finalniSoucet - 1) % 20) + 1;

  // animované číslo a prázdný kontejner pro výsledek
  document.getElementById("vysledek").innerHTML = `
    <div class="final-number" id="animovaneCislo">
      <strong style="font-size: 6rem; color: #FFD700">?</strong>
    </div>
    <div class="result-container" style="opacity:0">
      <div class="vyklad" style="font-size:1.3rem; font-style:italic; margin-bottom:1rem;">
        ✨ <strong>Výklad čísla dne:</strong><br>${vyznamy[vysledneCislo] || "Toto číslo má dnes pro tebe zvláštní význam. Pozoruj, co se děje."}
      </div>
      <div class="step">🔠 <span class="highlight">Tvoje jméno:<br></span> ${jmeno}</div>
      <div class="step">🔢 <span class="highlight">Číselné hodnoty písmen:<br></span> ${detailJmena}</div>
      <div class="step">➕ <span class="highlight">Číslo tvého jména:<br></span> ${soucetJmena} → <strong>${soucetCislicJmena}</strong></div>
      <div class="step">🌌 <span class="highlight">Znamení:<br></span> <strong>${znameni}</strong></div>
      <div class="step">💫 <span class="highlight">Energetické číslo:<br></span> <strong>${nahodne}</strong></div>
      <div class="step">🧠 <span class="highlight">Celkem:</span> ${soucetMezisoucet} + ${nahodne} = <strong>${finalniSoucet}</strong></div>
      <div class="step">🔁 <span class="highlight">Dorovnání výsledku →</span> <br>
        Tvoje magické číslo dne je: <br>
        <strong style="font-size: 2rem; color: #FFD700">${vysledneCislo}</strong>
      </div>
    </div>
  `;

  const animDiv = document.getElementById("animovaneCislo");
  const resultContainer = document.querySelector(".result-container");

  let counter = 0;
  const animace = setInterval(() => {
    const nahodneCisloAnim = Math.floor(Math.random() * 20) + 1;
    animDiv.innerHTML = `<strong style="font-size: 6rem; color: #FFD700">${nahodneCisloAnim}</strong>`;
    counter++;
    if (counter > 25) {
      clearInterval(animace);
      animDiv.innerHTML = `<strong style="font-size: 6rem; color: #FFD700">${vysledneCislo}</strong>`;

      // fade-in celé části výsledků
      setTimeout(() => {
        resultContainer.style.transition = "opacity 1s";
        resultContainer.style.opacity = 1;
      }, 50);

      // uložit do localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        date: dnes,
        value: nahodne,
        resultHTML: document.getElementById("vysledek").innerHTML
      }));

      // skrytí tlačítka a zobrazení hlášky
      const btn = document.querySelector("button[onclick='spocitejCislo()']");
      const hlaska = document.getElementById("hlaska");
      btn.style.display = "none";
      hlaska.style.display = "block";
    }
  }, 80);
}
