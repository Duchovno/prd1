const vyznamy = {
    1: "Dneska budeš mít chuť vzít věci do vlastních rukou. Energie jedničky tě táhne k samostatnosti, rozhodnosti a novým začátkům. Neboj se postavit do čela nebo udělat první krok. Ostatní tě budou následovat. Tvůj vnitřní kompas dnes ukazuje směrem vpřed, tak neváhej. Je to den, kdy se něco může zlomit. Pokud uděláš první krok, svět se přizpůsobí.",

    2: "Dnešek je o vztazích. Osobních i pracovních. Dvojka ti přináší potřebu rovnováhy, klidu a porozumění. Je ideální čas naslouchat druhým, najít společnou řeč nebo urovnat staré spory. Emoce budou silné, ale zároveň ti pomohou naladit se na jemné nuance okolí. Nepůjde o výkon, ale o soulad. Najdi svůj rytmus s ostatními.",

    3: "Tvoje myšlenky dnes poletí jako motýli. Lehké, hravé, inspirativní. Trojka přináší tvůrčí jiskru, takže ideální den na psaní, mluvení, tvoření nebo flirtování. Lidé tě budou chtít poslouchat, protože budeš sršet šarmem. Sdílej svoje nápady, buď vidět a slyšet. Dnešek je jako pozvánka do světa fantazie. Neodmítej ji.",

    4: "Dnes to chce disciplínu, přehled a pevné základy. Čtyřka tě volá k práci, plánování a organizaci, ale neboj, půjde to od ruky. Pokud něco potřebuješ dokončit nebo si v něčem udělat jasno, je ideální čas. Nečekej zázraky, ale buď vytrvalý. Právě tak se dnešní energie rozvine nejlíp. Není to den na chaos, ale na stabilitu.",

    5: "Dnes se může stát cokoliv a to tě bude bavit. Pětka přináší impulzivnost, nečekané zvraty a chuť něco změnit. Změň prostředí, zkus něco nového, dej si výlet. Hlavně nestůj na místě. Komunikace poběží na plné obrátky a můžeš potkat někoho zajímavého. Je to den odvahy a dobrodružství. Vyjdi z rutiny.",

    6: "Šestka je o srdci, rodině, vztazích a laskavosti. Dneska budeš mít chuť být oporou pro ostatní nebo naopak oceníš, když ti někdo nabídne svou náruč. Věci se můžou dojemně uklidnit nebo srovnat. Někdo ti dnes připomene, co je pro tebe skutečně důležité. Buď k sobě i druhým jemný.",

    7: "Dnešek tě může svádět k přemýšlení, samotě nebo duchovnímu hledání. Sedmička není povrchní a chce to jít do hloubky. Skvělé pro meditaci, studium, rozjímání nebo práci o samotě. Můžeš pochopit něco zásadního, pokud si dovolíš zpomalit. Není to den na dav, ale na nitro.",

    8: "Energie osmičky tě dnes nabíjí silou, odhodláním a touhou po výsledcích. Skvělý čas na rozhodování v oblasti financí, podnikání nebo kariéry. Jsi v moci, ale buď spravedlivý, jinak tě to doběhne. Může přijít nečekaná příležitost nebo odměna. Přemýšlej strategicky a nezapomeň. Síla není jen o penězích, ale i o moudrém vlivu.",

    9: "Devítka je číslo uzavření cyklu. Něco dnes může skončit nebo se uzdravit. Možná se vynoří vzpomínky, emoce, nebo lidé z minulosti. Je čas pustit to, co tě už netáhne dopředu. Buď velkorysý a otevřený. Je to den moudrosti, soucitu a hlubšího pochopení.",

    10: "Desítka je jako dveře. Čekají, až je otevřeš. Kombinuje nezávislost jedničky a sílu nuly, která vše umocňuje. Dnešek tě může nakopnout k nové cestě, ale bude záležet, jestli si dovolíš ji vidět. Věci se můžou rozběhnout jinak, než čekáš. Je to den vizí. Začni něco, co má přesah.",

    11: "Jedenáctka je mistrovské číslo. Dnes můžeš být extrémně vnímavý, napojený a kreativní. Nenech se stáhnout do běžné rutiny, dnešek je jako anténa na vyšší signál. Můžeš mít silné vize, sny nebo vnuknutí. Důvěřuj jim. Je to magický den.",

    12: "Dvanáctka tě dnes staví do role žáka i učitele. Můžeš se něco naučit, nebo pomoct druhým pochopit jejich lekce. Buď trpělivý, vše má svůj čas a tohle je den poznání. Uč se z toho, co se děje, i když to nedává hned smysl. Klíčové je otevřít se změně a nezůstat stát ve starých vzorcích.",

    13: "Třináctka má špatnou pověst, ale je to číslo transformační. Přináší zásadní změny, pokud je přijmeš. Můžeš dnes narazit na odpor, ztrátu nebo překážku, ale právě ta tě posune. Síla dneška je v odvaze nechat zemřít to, co už neslouží, a postavit nové. Budeš silnější, než si myslíš.",

    14: "Čtrnáctka přináší dynamiku, ale vyžaduje rovnováhu. Dnešek tě může vyhodit z komfortu, ale jen proto, abys našel nový střed. Není to o stabilitě, ale o pružnosti. Zkoušej, reaguj, adaptuj se. Čekej nečekané, ale udržuj si směr. Den tě naučí, že svoboda a zodpovědnost se nevylučují.",

    15: "Dnes budeš magnet pro lidi, myšlenky i situace. Patnáctka tě táhne k pokušením, ale i k osobní moci. Je to den, kdy se rozhoduješ. Buď podle ega, nebo podle srdce. Vše, co dnes uděláš, má silnější dopad než jindy. Buď vědomý. Jsi víc než to, co tě láká.",

    16: "Šestnáctka může otřást základy tvého dne. Některá přesvědčení mohou spadnout, aby se objevila pravda. Není to den pro masky a iluze. Pokud něco nehraje, dnes to praskne. Ale právě tím se otevře cesta ke svobodě a autentičnosti. Důvěřuj procesu. Je to den, který očišťuje.",

    17: "Dnešek tě povede k vyšším cílům. Sedmnáctka je číslo vizionářů a snílků. Můžeš mít jasno v tom, co chceš, nebo potkat někoho, kdo ti to připomene. Ideální den pro plánování budoucnosti, afirmace, nebo práci na tvém snu. Důležité je nezůstat v hlavě. Jednej!",

    18: "Osmnáctka tě vrací k lidem. K těm, kteří potřebují pomoc, i k těm, kteří tě podporují. Dnešek je o empatii, péči, i ochotě obětovat ego pro něco většího. Pomoc druhým tě dnes obohatí víc než vlastní zisk. Je to den, kdy můžeš napravit křivdy nebo podpořit někoho v krizi. Otevři srdce. Právě to je dnes klíčem.",

    19: "Devatenáctka je číslo vítězů, ale těch, kteří si to odmakali. Dnešek tě vede k sebevědomí, rozhodnosti a odvaze zářit. Máš v sobě slunce. Ukaž ho. Je to den, kdy tě okolí uvidí a uzná. Přijmi úspěch bez výčitek.",

    20: "Dvacítka ti přináší citlivé vnímání a potřebu rovnováhy. Možná budeš rozkolísaný, ale právě v tom je síla dne. Naučit se ladit sám na sebe. Vztahy budou klíčové. Mohou začít, obnovit se, nebo změnit směr. Odpusť a pusť, co už není potřeba. Tohle je den, kdy se rodí nový začátek. Z něhy, ne z tlaku.",
  };
