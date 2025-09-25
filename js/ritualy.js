document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('affirmation-container');
  if (!container) return;

  function getLocalDate() {
    const dnes = new Date();
    const rok = dnes.getFullYear();
    const mesic = String(dnes.getMonth() + 1).padStart(2, '0');
    const den = String(dnes.getDate()).padStart(2, '0');
    return `${rok}-${mesic}-${den}`;
  }

  const dnesniDatum = getLocalDate();

  const affirmations = [
  // Sebeláska a vnitřní klid
  "Miluji a přijímám sebe takového, jaký jsem.",
  "Mé srdce je otevřené a klidné.",
  "Důvěřuji svému vnitřnímu hlasu.",
  "Každý den nacházím svou rovnováhu.",
  "Mé myšlenky jsou mírumilovné a laskavé.",
  "Jsem hoden lásky a respektu.",
  "Mé emoce jsou moudrým průvodcem.",
  "Odpouštím sobě i ostatním a uvolňuji zátěž.",
  "Můj vnitřní klid přitahuje harmonii kolem mě.",
  "Jsem napojený na svou duši a naslouchám jí.",
  "Každý dech mě naplňuje klidem.",
  "Moje sebevědomí roste každým dnem.",
  "Miluji své tělo a pečuji o něj.",
  "Mé srdce je plné radosti a vděčnosti.",
  "Přijímám svou minulost a osvobozuji se.",
  "Mé sny jsou cenné a zaslouží si realizaci.",
  "V sobě nacházím nekonečnou sílu.",
  "Každý den je pro mě příležitostí k růstu.",
  "Mé tělo a mysl jsou v harmonii.",
  "Mé myšlenky tvoří pozitivní realitu.",
  "Důvěřuji procesu života.",
  "Mé srdce je plné lásky a soucitu.",
  "Jsem vděčný za každý okamžik.",
  "Mé nitro je světlem a klidem.",
  "Přijímám sebe s laskavostí a porozuměním.",
  "Mé hranice jsou zdravé a respektované.",
  "Mé tělo, mysl i duše jsou v bezpečí.",
  "Mé emoce jsou přirozené a přijímám je.",
  "Každý den si dávám prostor pro odpočinek a radost.",
  "Mé vnitřní světlo září jasně a inspiruje ostatní.",

  // Hojnost a úspěch
  "Přitahuji do života hojnost ve všech podobách.",
  "Mé možnosti jsou nekonečné a otevřené.",
  "Každý den přináší nové příležitosti.",
  "Mé rozhodnutí vedou k prosperitě.",
  "Mé sny jsou možné a realizovatelné.",
  "Jsem otevřený hojnosti a štěstí.",
  "Každý krok mě vede k úspěchu.",
  "Mé nápady jsou cenné a inspirující.",
  "Peníze a příležitosti proudí do mého života snadno.",
  "Mé úsilí přináší odměnu.",
  "Mé schopnosti jsou moudře využity.",
  "Věřím ve své talenty a potenciál.",
  "Každý den se učím nové způsoby, jak růst.",
  "Mé sny se proměňují ve skutečnost.",
  "Přitahuji do života správné lidi a okolnosti.",
  "Mé možnosti se rozšiřují každým dnem.",
  "Každý krok, který udělám, je správný.",
  "Mé činy vedou k pozitivním výsledkům.",
  "Mé cíle jsou jasné a dosažitelné.",
  "Každá překážka je příležitostí k růstu.",
  "Mé úsilí je oceněno a odměněno.",
  "Přitahuji do života bohatství, lásku a radost.",
  "Mé sny jsou podporovány vesmírem.",
  "Mé rozhodnutí jsou správná a naplňující.",
  "Mé myšlenky tvoří prosperitu kolem mě.",
  "Jsem magnetem pro úspěch a hojnost.",
  "Každý den prožívám pozitivní změny.",
  "Mé sny rostou a naplňují mě radostí.",
  "Přitahuji vše, co potřebuji pro svůj růst.",
  "Mé životní kroky jsou vedeny moudře a jistě.",

  // Energie, vitalita, motivace
  "Mé tělo je plné energie a síly.",
  "Každý dech mě naplňuje životem.",
  "Mé srdce bije v souladu s vesmírem.",
  "Každý okamžik je novou šancí.",
  "Mé tělo i mysl jsou aktivní a zdravé.",
  "Každý den cítím vitalitu a radost.",
  "Mé tělo je mým chrámem a pečuji o něj.",
  "Mé kroky jsou pevné a jisté.",
  "Mé myšlenky jsou jasné a inspirující.",
  "Každý den přináší nové možnosti pro radost.",
  "Mé tělo i duše jsou harmonické a vyvážené.",
  "Mé činy jsou plné energie a síly.",
  "Každý den se probouzím s motivací.",
  "Mé rozhodnutí jsou silná a smysluplná.",
  "Mé myšlenky podporují mé cíle.",
  "Každý okamžik mě posiluje.",
  "Mé tělo je pružné, silné a zdravé.",
  "Mé srdce je otevřené životní energii.",
  "Každý den nacházím radost v pohybu.",
  "Mé myšlenky jsou pozitivní a energické.",
  "Každý krok mě přibližuje k naplnění.",
  "Mé tělo se obnovuje a posiluje každým dnem.",
  "Mé emoce mě podporují a inspirují.",
  "Každý okamžik je příležitostí pro sílu a radost.",
  "Mé myšlenky přitahují pozitivní energii.",
  "Mé tělo a mysl spolupracují v harmonii.",
  "Každý den cítím sílu a vitalitu.",
  "Mé sny mi dávají motivaci jednat.",
  "Mé činy jsou plné energie a záměru.",
  "Každý den přináší nové možnosti pro růst a sílu.",

  // Láska, vztahy, přátelství
  "Přitahuji do života láskyplné vztahy.",
  "Mé srdce je otevřené radosti a soucitu.",
  "Mé vztahy jsou harmonické a naplňující.",
  "Jsem vděčný za lidi kolem sebe.",
  "Přitahuji lidi, kteří mě podporují.",
  "Mé slova jsou laskavá a inspirující.",
  "Mé činy podporují mír a porozumění.",
  "Mé srdce je plné lásky a vděčnosti.",
  "Přitahuji do života přátelství a radost.",
  "Mé vztahy jsou plné respektu a důvěry.",
  "Mé srdce je magnetem pro lásku.",
  "Každý den prohlubuji svou blízkost s lidmi, které miluji.",
  "Mé emoce jsou otevřené a čestné.",
  "Přitahuji do života pozitivní a laskavé lidi.",
  "Mé vztahy jsou zdravé a podporující.",
  "Mé srdce je plné radosti a harmonie.",
  "Každý den šířím lásku kolem sebe.",
  "Mé vztahy jsou hluboké a naplňující.",
  "Mé srdce je napojeno na vesmírnou lásku.",
  "Každý den přijímám lásku a dávám ji.",
  "Mé činy podporují laskavost a soucit.",
  "Přitahuji do života harmonii a porozumění.",
  "Mé vztahy jsou plné důvěry a respektu.",
  "Mé srdce vyzařuje radost a lásku.",
  "Každý den prožívám lásku a přátelství.",
  "Mé vztahy jsou zdrojem podpory a radosti.",
  "Mé srdce je otevřené a laskavé.",
  "Přitahuji do života krásné a upřímné vztahy.",
  "Každý den prohlubuji svou schopnost milovat.",
  "Mé vztahy jsou zdrojem radosti a harmonie.",

  // Duchovní růst a intuice
  "Naslouchám svému vnitřnímu hlasu.",
  "Mé intuice mě vede správným směrem.",
  "Každý den rozvíjím svou duchovní sílu.",
  "Mé myšlenky jsou propojené s vyšším vědomím.",
  "Mé srdce je otevřené duchovní inspiraci.",
  "Každý den nacházím moudrost v sobě.",
  "Mé sny a vize mě vedou k růstu.",
  "Mé srdce a mysl jsou v harmonii s vesmírem.",
  "Každý den posiluji své spojení s energií kolem mě.",
  "Mé myšlenky jsou čisté a inspirující.",
  "Mé činy odrážejí mou vnitřní moudrost.",
  "Každý den naslouchám svému vyššímu já.",
  "Mé srdce je zdrojem moudrosti a klidu.",
  "Přitahuji do života duchovní vedení a inspiraci.",
  "Mé intuice je přesná a spolehlivá.",
  "Každý den se otevírám novým duchovním možnostem.",
  "Mé myšlenky přitahují klid a jasno.",
  "Mé srdce a duše jsou propojené s vesmírem.",
  "Každý den cítím svou vnitřní sílu a vedení.",
  "Mé kroky jsou vedeny moudrostí a intuicí.",
  "Mé srdce je otevřené lásce a inspiraci.",
  "Každý den se učím a rostu duchovně.",
  "Mé myšlenky a pocity jsou v harmonii.",
  "Mé sny mi ukazují cestu a směr.",
  "Mé intuice a moudrost jsou mými průvodci.",
  "Každý den přitahuji světlo a pozitivní energii.",
  "Mé srdce je naplněno radostí a klidem.",
  "Mé myšlenky tvoří harmonii a jasnost.",
  "Každý den se otevírám vyššímu vedení.",
  "Mé kroky jsou jisté, klidné a inspirované."
];


  const ulozeneDatum = localStorage.getItem('afirmaceDatum');
  const ulozenaAfirmace = localStorage.getItem('afirmaceData');

  if (ulozeneDatum === dnesniDatum && ulozenaAfirmace) {
    renderAffirmation(ulozenaAfirmace);
  } else {
    localStorage.removeItem('afirmaceDatum');
    localStorage.removeItem('afirmaceData');

    container.innerHTML = '';
    const button = document.createElement('a');
    button.href = '#';
    button.className = 'glow-button';
    button.textContent = 'Zobrazit dnešní afirmaci';
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const nahodna = affirmations[Math.floor(Math.random() * affirmations.length)];
      localStorage.setItem('afirmaceDatum', dnesniDatum);
      localStorage.setItem('afirmaceData', nahodna);
      renderAffirmation(nahodna);
    });
    container.appendChild(button);
  }

  function renderAffirmation(text) {
    container.innerHTML = '';

    const info = document.createElement('p');
    info.innerHTML = 'Dnešní afirmace:';
    container.appendChild(info);

    const box = document.createElement('div');
    box.className = 'afirmace-box mystical';
    container.appendChild(box);

    const atext = document.createElement('p');
    atext.textContent = text;
    atext.className = 'mystical-text';
    box.appendChild(atext);

    // Trigger animace
    requestAnimationFrame(() => {
      atext.classList.add('active');
    });
  }
});
