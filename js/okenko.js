document.addEventListener("DOMContentLoaded", () => {
  // --- Afirmace
  const affirmations = [
    "Jsem otevřený novým možnostem.",
    "Moje energie proudí správným směrem.",
    "Každý den je nová příležitost.",
    "Láska a harmonie mě provází.",
    "Vesmír mě podporuje na mé cestě."
  ];
  const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("affirmation").textContent = affirmation;

  // --- Kolo roku sabaty
  const sabbats = [
    { name: "Imbolc", date: "2025-02-01" },
    { name: "Ostara", date: "2025-03-20" },
    { name: "Beltane", date: "2025-05-01" },
    { name: "Litha", date: "2025-06-21" },
    { name: "Lammas", date: "2025-08-01" },
    { name: "Mabon", date: "2025-09-22" },
    { name: "Samhain", date: "2025-10-31" },
    { name: "Yule", date: "2025-12-21" }
  ];
  const today = new Date();
  const nextSabbat = sabbats.find(s => new Date(s.date) > today);
  if (nextSabbat) {
    const diffDays = Math.ceil((new Date(nextSabbat.date) - today) / (1000*60*60*24));
    document.getElementById("next-sabbat").textContent = `${nextSabbat.name} – ${new Date(nextSabbat.date).toLocaleDateString("cs-CZ")} (za ${diffDays} dní)`;
  }

  // --- Fáze měsíce (zjednodušený výpočet)
  function moonPhase(date) {
    const lp = 2551443; // synodický měsíc v sekundách
    const new_moon = new Date(1970, 0, 7, 20, 35, 0); // známý nov
    const phase = ((date.getTime() - new_moon.getTime())/1000) % lp;
    const index = Math.floor((phase / lp) * 8);
    return ["Nov 🌑","Dorůstající srpek 🌒","První čtvrť 🌓","Dorůstající měsíc 🌔","Úplněk 🌕","Couvající měsíc 🌖","Poslední čtvrť 🌗","Ubývající srpek 🌘"][index];
  }
  document.getElementById("moon-phase").textContent = moonPhase(today);

  // --- Další úplněk (přeskočím dopředu den po dni)
  let nextFull = new Date(today);
  for (let i=0;i<30;i++) {
    if (moonPhase(nextFull).includes("Úplněk")) break;
    nextFull.setDate(nextFull.getDate()+1);
  }
  document.getElementById("next-fullmoon").textContent = nextFull.toLocaleDateString("cs-CZ");

  // --- Astrologické jevy (zatím ručně připravený seznam)
  const events = [
    { name: "Merkur v kvadratuře se Saturnem", date: "2025-04-16" },
    { name: "Konjunkce: Měsíc + Jupiter", date: "2025-05-03" },
    { name: "Mars v opozici s Uranem", date: "2025-07-11" }
  ];
  const nextEvent = events.find(e => new Date(e.date) > today);
  if (nextEvent) {
    document.getElementById("astro-event").textContent = `${nextEvent.name} – ${new Date(nextEvent.date).toLocaleDateString("cs-CZ")}`;
  }
});
