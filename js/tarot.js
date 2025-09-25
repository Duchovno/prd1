document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');
  
  function getLocalDate() {
  const dnes = new Date();
  const rok = dnes.getFullYear();
  const mesic = String(dnes.getMonth() + 1).padStart(2, '0');
  const den = String(dnes.getDate()).padStart(2, '0');
  return `${rok}-${mesic}-${den}`;
}

  const dnesniDatum = getLocalDate();


  // Zkontrolujeme uložená data
  const ulozeneDatum = localStorage.getItem('kartaDneDatum');
  const ulozenaKarta = JSON.parse(localStorage.getItem('kartaDneData'));

  if (ulozeneDatum === dnesniDatum && ulozenaKarta) {
    // Už dnes byla vyložena karta → zobrazíme hlášku + obrázek + výklad
    zobrazKartuAhlasku(ulozenaKarta);
  } else {
    // Starý den nebo žádná karta → smažeme storage a zobrazíme tlačítko
    localStorage.removeItem('kartaDneDatum');
    localStorage.removeItem('kartaDneData');

    const button = document.createElement('a');
    button.href = 'karta-dne.html';
    button.className = 'glow-button';
    button.textContent = 'Vyložit kartu dne';
    cardContainer.appendChild(button);
  }

  function zobrazKartuAhlasku(card) {
    cardContainer.innerHTML = `
      <p>✨ Dnešní karta byla vyložena ✨ <br>Stav se zítra.</p>
      <div class="tarot-karta">
        <h3>${card.name}</h3>
        <img class="karta-obrazek" src="${card.image}" alt="${card.name}">
        <p>${card.meaning}</p>
      </div>
    `;

    // Přidáme inline styly pro vystředění
    const kartaDiv = cardContainer.querySelector('.tarot-karta');
    kartaDiv.style.display = 'flex';
    kartaDiv.style.flexDirection = 'column';
    kartaDiv.style.alignItems = 'center';
    kartaDiv.style.textAlign = 'center';
    
    const img = kartaDiv.querySelector('.karta-obrazek');
    img.style.maxWidth = '50%';
    img.style.height = 'auto';
    img.style.margin = '10px 0';
  }
});
