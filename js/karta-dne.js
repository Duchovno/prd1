const introText = document.getElementById('intro-text');
const cardContainer = document.getElementById('card-container');
const tarotCard = document.getElementById('tarot-card');
const cardFront = document.getElementById('card-front');
const meaningText = document.getElementById('meaning');
const backButton = document.getElementById('back-button');

function getLocalDate() {
  const dnes = new Date();
  const rok = dnes.getFullYear();
  const mesic = String(dnes.getMonth() + 1).padStart(2, '0');
  const den = String(dnes.getDate()).padStart(2, '0');
  return `${rok}-${mesic}-${den}`;
}

const dnesniDatum = getLocalDate();


const tarotCards = [
  {
    name: "Blázen",
    image: "images/karty/00-the-fool.jpg",
    meaning: "Dnešek ti přináší šanci začít znovu, s čistou myslí a otevřeným srdcem. Můžeš vykročit mimo zajeté koleje. Bez předsudků, bez zbytečných obav. Věř, že i cesta bez mapy může vést k něčemu zásadnímu."
  },
  {
    name: "Mág",
    image: "images/karty/01-the-magician.jpg",
    meaning: "Dnes držíš ve svých rukou moc tvořit. Myšlenky, které nosíš v hlavě, mají sílu se proměnit v realitu. Využij své schopnosti vědomě. Příležitosti jsou blíž, než si myslíš. Je čas jednat."
  },
  {
    name: "Velekněžka",
    image: "images/karty/02-the-high-priestess.jpg",
    meaning: "Vnitřní ticho dnes řekne víc než hluk světa. Intuice, sny, náznaky. Tomu dnes věnuj pozornost. Nejde o to, co slyšíš, ale co cítíš. To co se skrývá pod povrchem. Důvěřuj vnitřní moudrosti."
  },
  {
    name: "Císařovna",
    image: "images/karty/03-the-empress.jpg",
    meaning: "Tvé vnitřní i vnější já dnes volá po péči. Možná něco roste. Vztah, nápad, ty sám/sama. Dej tomu prostor a výživu. Energie dne přeje laskavosti, kreativitě a napojení na život."
  },
  {
    name: "Císař",
    image: "images/karty/04-the-emperor.jpg",
    meaning: "Dnes je čas vzít věci do vlastních rukou a postavit je na pevný základ. Jasné hranice, rozhodnost a vize ti přinesou klid a směr. Můžeš být oporou sobě i ostatním."
  },
  {
    name: "Velekněz",
    image: "images/karty/05-pope.jpg",
    meaning: "Zastav se a zeptej se: Čemu věřím? Dnešek přináší možnost spojit se s hlubším smyslem nebo moudrostí, která přesahuje jednotlivce. Někdy není třeba hledat nové cesty. Stačí důvěřovat těm, které fungují."
  },
  {
    name: "Zamilovaní",
    image: "images/karty/06-the-lovers.jpg",
    meaning: "Energie dne klade důraz na volbu. Nejen mezi „ano“ a „ne“, ale mezi tím, co s tebou ladí a co už ne. Odpovědi najdeš v sobě, ne ve vnějším světě. Ať už jde o vztah, hodnoty nebo směr. Rozhodnutí srdcem bude to pravé."
  },
{
    name: "Vůz",
    image: "images/karty/07-the-chariot.jpg",
    meaning: "Dnes je čas vzít opratě pevně do rukou a řídit svůj směr. Nejde jen o rychlost, ale o jasný cíl, kam míříš. Síla vůle a soustředění tě udrží na cestě, i když kolem bude zmatek. Když máš kontrolu nad sebou, zvládneš vést i svůj osud."
  },
{
    name: "Spravedlnost",
    image: "images/karty/08-justice.jpg",
    meaning: "Dnes tě život staví před zrcadlo, ve kterém není prostor pro výmluvy. Pravda se může ukázat ostře, ale osvobozuje. Rozhodnutí, která dnes uděláš, budou mít dlouhý dosah. Vnímej fakta, pocity i intuici, jen jejich rovnováha ti dá odpověď, která obstojí."
  },
{
    name: "Poustevník",
    image: "images/karty/09-the-hermit.jpg",
    meaning: "Možná je čas stáhnout se z hluku a ruchu a dopřát si chvíli ticha. Uvnitř sebe máš odpovědi, které ti venku nikdo nedá. Dnešní den je vhodný k přemýšlení, k hledání vnitřního světla. Nepospíchej, někdy cesta vede dovnitř, ne vpřed."
  },
{
    name: "Kolo štěstí",
    image: "images/karty/10-wheel-of-fortune.jpg",
    meaning: "Život se dnes může pohnout nečekaným směrem. Někdy jsme nahoře, jindy dole. A to se mění rychleji, než bychom chtěli. Přijmi pohyb kola bez odporu. Využij příležitosti, když se objeví, a nezoufej, pokud se věci odvrátí. Vše má svůj čas a návraty jsou jisté."
  },
{
    name: "Síla",
    image: "images/karty/11-strength.jpg",
    meaning: "Tvá největší moc dnes neleží v tvrdosti, ale v jemnosti. Odvaha a klidné srdce zvládnou víc než nátlak. Dokážeš zkrotit chaos, když se k němu postavíš s respektem. Dnešní výzvy tě prověří, ale taky ti ukážou, jak moc už umíš zvládat."
  },
{
    name: "Viselec",
    image: "images/karty/12-the-hanged-man.jpg",
    meaning: "Možná máš pocit, že jsi zaseklý a nemůžeš dál. Ale dnešek není o pohybu, je o jiném pohledu. Zkus se dívat z úhlu, který jsi dřív přehlížel. Když se dokážeš vzdát kontroly, otevřeš dveře k novému pochopení."
  },
{
    name: "Smrt",
    image: "images/karty/13-death.jpg",
    meaning: "Něco dnes končí, i když bys to nejradši držel. Ale tam, kde se dveře zavřou, jiné se otevřou. Přeměna může být bolestivá, ale je nezbytná, aby mohlo přijít něco živého. Nech odejít, co už vyčerpalo svůj čas."
  },
{
    name: "Umírněnost",
    image: "images/karty/14-temperance.jpg",
    meaning: "Den tě zve k vyrovnání vnitřních i vnějších extrémů. Možná potřebuješ ubrat tam, kde tlačíš, a přidat tam, kde zanedbáváš. Harmonie nepřijde sama. Je to vědomé míchání, spojování a ladění. Dnes se učíš být tvůrcem rovnováhy."
  },
{
    name: "Ďábel",
    image: "images/karty/15-the-devil.jpg",
    meaning: "Dnešek ti může ukázat, kde tě něco poutá. Závislost, strach, starý zvyk. Pokušení může být lákavé, ale pod jeho leskem se skrývá pouto. Není to o boji, ale o uvědomění. Když si všimneš řetězu, můžeš ho sundat."
  },
{
    name: "Věž",
    image: "images/karty/16-the-tower.jpg",
    meaning: "Něco, na čem sis myslel, že stojíš pevně, se může dnes otřást. Staré jistoty padají, ale jen proto, aby udělaly místo skutečné pevnosti. Změna může přijít náhle, ale přinese prostor k novému začátku."
  },
{
    name: "Hvězda",
    image: "images/karty/17-the-star.jpg",
    meaning: "Po bouři přichází klid. Dnešek je o naději, víře a návratu k sobě. Když dovolíš své duši nadechnout se, uvidíš světlo i tam, kde byla tma. Není kam spěchat, jen důvěřuj, že cesta se před tebou rozsvěcuje."
  },
{
    name: "Měsíc",
    image: "images/karty/18-the-moon.jpg",
    meaning: "Ne všechno, co dnes uvidíš, je takové, jak to vypadá. Iluze a sny se mohou prolínat s realitou. Vnímej své pocity, ale zůstaň nohama na zemi. Cesta měsícem vede skrz mlhu, ale ta jednou opadne."
  },
{
    name: "Slunce",
    image: "images/karty/19-the-sun.jpg",
    meaning: "Radost, teplo a lehkost dnes svítí do tvého života. Možná se věci konečně ukážou jasně. Tohle je čas být autentický, sdílet se a nechat své světlo zářit. Co dnes zasadíš, poroste silné."
  },
{
    name: "Soud",
    image: "images/karty/20-judgement.jpg",
    meaning: "Dnes se můžeš probudit do nové kapitoly svého života. Staré chyby i zásluhy se připomínají, aby ses z nich poučil. Je čas slyšet vnitřní hlas, který tě volá dál. Změna není jen možnost. Je to rozhodnutí."
  },
{
    name: "Svět",
    image: "images/karty/21-the-world.jpg",
    meaning: "Cesta, po které jsi šel, se dnes uzavírá. Cítíš, že jsi něčeho dosáhl, a můžeš se nadechnout s pocitem naplnění. Teď je prostor slavit, ale i přemýšlet, kam dál. Každý konec je i nový začátek, a ty máš vše, co potřebuješ, abys vykročil."
  },

];

// Kontrola, jestli už dnes byla karta vytažena
let ulozenaKarta = JSON.parse(localStorage.getItem('kartaDneData'));
const ulozeneDatum = localStorage.getItem('kartaDneDatum');

if (ulozeneDatum === dnesniDatum && ulozenaKarta) {
    // Už dnes byla vyložena → zobrazíme rovnou
    introText.style.display = 'none';
    cardContainer.style.display = 'block';
    meaningText.style.display = 'block';
    backButton.classList.add('show');

    cardFront.style.backgroundImage = `url(${ulozenaKarta.image})`;
    meaningText.innerText = ulozenaKarta.meaning;
    tarotCard.classList.add('is-flipped');
} else {
    // Nová karta dnes
    cardContainer.style.display = 'none';
    meaningText.style.display = 'none';
    backButton.classList.remove('show');

    // Po 5s intro fade out a zobrazení karty
    setTimeout(() => {
        introText.style.animation = 'fadeOut 1s ease forwards';
        setTimeout(() => {
            introText.style.display = 'none';
            cardContainer.style.display = 'block';
        }, 1000);
    }, 5000);

    // Kliknutí na kartu
    tarotCard.addEventListener('click', () => {
        if (tarotCard.classList.contains('is-flipped')) return;

        tarotCard.classList.add('is-flipped');

        const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        cardFront.style.backgroundImage = `url(${randomCard.image})`;
        meaningText.innerText = randomCard.meaning;
        meaningText.style.display = 'block';
        backButton.classList.add('show');

        // Uložíme kartu do localStorage
        localStorage.setItem('kartaDneDatum', dnesniDatum);
        localStorage.setItem('kartaDneData', JSON.stringify(randomCard));
    });
}

// Funkce zpět
backButton.addEventListener('click', () => {
    window.location.href = 'tarot.html';
});