const cisloEl = document.getElementById('cislo');
const vyznamEl = document.getElementById('vyznam');
const btn = document.getElementById('generuj');
const hlaska = document.createElement("div");
hlaska.id = "hlaska";
hlaska.textContent = "Číslo dne již znáš. Stav se zítra.";
btn.insertAdjacentElement("afterend", hlaska);

const vyznamy = {
  1: "Dnes je pro tebe den nových začátků. Síla vůle, kterou máš uvnitř, ti pomůže udělat rozhodnutí, která už dlouho odkládáš. Buď sebevědomý/á a spolehni se na svou nezávislost. Dnes se otevírá příležitost, která tě posune vpřed.",
  
  2: "Dnes je ideální den pro spolupráci a nacházení harmonie kolem sebe. Tvůj citlivý přístup pomáhá uklidnit napětí a vytvořit rovnováhu. Neboj se naslouchat ostatním. Vzájemná podpora dnes přinese nečekané výsledky.",
  
  3: "Dnes je den radosti a tvořivosti. Komunikace bude hrát důležitou roli, tak neváhej vyjádřit své myšlenky a pocity. Využij svou kreativitu k tomu, abys přinesl/a lehkost a pozitivní energii do svého okolí.",
  
  4: "Dnes je den, kdy můžeš postavit pevné základy pro své cíle. Stabilita a pracovitost ti pomohou zvládnout výzvy, které přijdou. Buď disciplinovaný/á a soustřeď se na praktické kroky. Odměna za tvou píli nebude dlouho čekat.",
  
  5: "Dnes se ti nabízí příležitost pro změnu a dobrodružství. Svoboda, kterou cítíš, ti umožní objevit nové možnosti a rozšířit obzory. Neboj se opustit komfortní zónu, každý krok vpřed ti přinese nové zkušenosti a radost.",
  
  6: "Dnes je den péče a odpovědnosti vůči sobě i ostatním. Láska, kterou dáš a přijmeš, bude mít silný vliv na tvé okolí. Zaměř se na harmonii doma nebo v blízkých vztazích a buď zdrojem podpory, která dnes udělá rozdíl.",
  
  7: "Dnes je den introspekce a duchovního růstu. Intuice ti pomůže rozpoznat pravé směry a moudrost, kterou máš uvnitř, tě provede rozhodnutími. Věnuj čas zamyšlení a sebeobjevování. Odpovědi, které hledáš, jsou dnes na dosah.",
  
  8: "Dnes je den síly a materializace tvých cílů. Moc a úspěch, které cítíš, ti umožní realizovat své plány. Neboj se převzít kontrolu a jednat s odvahou. Dnešní energie ti dává možnost přetvořit realitu ve svůj prospěch.",
  
  9: "Dnes je den soucitu a dokončení. Humanitární smysl a empatie, které projevuješ, mohou mít hluboký dopad na okolí. Zaměř se na uzavření rozdělaných záležitostí a na pomoc druhým. Tvá energie přináší klid a harmonii všude kolem tebe."
};


function getDnesniDatum() {
  const dnes = new Date();
  return dnes.getFullYear() + "-" + (dnes.getMonth()+1) + "-" + dnes.getDate();
}

function zobrazCislo(cislo) {
  cisloEl.classList.remove("show");
  setTimeout(() => {
    cisloEl.textContent = cislo;
    vyznamEl.textContent = vyznamy[cislo];
    cisloEl.classList.add("show");
  }, 100);
}

const ulozeneCislo = localStorage.getItem("cisloDne");
const ulozenyDatum = localStorage.getItem("datumCisla");
const dnes = getDnesniDatum();

if (ulozeneCislo && ulozenyDatum === dnes) {
  zobrazCislo(ulozeneCislo);
  btn.style.display = "none";
  hlaska.style.display = "block";
}

btn.addEventListener("click", () => {
  const cislo = Math.floor(Math.random() * 9) + 1;
  localStorage.setItem("cisloDne", cislo);
  localStorage.setItem("datumCisla", dnes);
  zobrazCislo(cislo);
  btn.style.display = "none";
  hlaska.style.display = "block";
});