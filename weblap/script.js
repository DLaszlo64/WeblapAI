

gemini.onclick = function(){
    foCim.innerHTML = "Gemini"
    cim.innerHTML = ""
    li1.innerHTML = "Kép- és hangfelismerés:Képes képek, hangok és videók elemzésére"
    li2.innerHTML = "Természetes nyelvi feldolgozás:A Gemini AL képes szövegeket értelmezni, fordítani és generálni."
    li3.innerHTML = `<li>Prediktív analitika és adatfeldolgozás:képes nagy mennyiségű adat elemzésére és előrejelzések készítésére különféle területeken.<br> PL pénzügyi elemzésben. </li>`
    elonye.innerHTML = "A Gemini AL rendkívüli sebességgel képes feldolgozni hatalmas adatmennyiséget, amely az emberi döntéshozatalt nagymértékben felgyorsítja. Képesek rendkívüli pontossággal előrejelzéseket készíteni, különösen, ha elegendő és jó minőségű adat áll rendelkezésre."
    li4.innerHTML = "A Gemini AL rendszerek fejlesztése és üzemeltetése szoros összefüggésben áll az alkalmazott adatok minőségével. Ha a rendelkezésre álló adatok hibásak, torzítottak vagy nem elégségesek, akkor az AI rendszer is téves döntéseket hozhat."
    li5.style.display = "none"
    li3.style.display = "block"

}
chatgpt.onclick = function(){
    foCim.innerHTML = "ChatGPT"
    cim.innerHTML = `<h4>A ChatGPT az OpenAI egyik legnépszerűbb AI-modellje.</h4>`
    li1.innerHTML = "szövegalkotásra"
    li2.innerHTML = "kódolásra"
    li3.innerHTML = `<li>üzleti alkalmazásokhoz és ügyfélszolgálati támogatásra </li>`
    elonye.innerHTML = "képes kreatív és összetett szövegeket létrehozni, legyen szó marketingkampányok szövegezéséről, hirdetések megfogalmazásáról vagy akár szakmai blogok írásáról."
    li4.innerHTML = "Az ingyenes verzió csak GPT-3.5-höz fér hozzá"
    li5.style.display = "block"
    li5.innerHTML = `<li>Hajlamos néha hallucinációkra, azaz pontatlan információk generálására (ezért érdemes megkérni arra, ne találjon ki magától információkat, ha konkrét szövegre van szükséged) </li>`
    li3.style.display = "block"
    
}

copilot.onclick = function(){
    foCim.innerHTML = "Copilot"
    cim.innerHTML = `<h4>A copilot egy társalgási, AI-alapú asszisztens.</h4>`
    li1.innerHTML = "Programozás és forráskód írása"
    li2.innerHTML = "Rendszerfeladatok kezelése és automatizálás"
    li3.innerHTML = `<li>Képgenerálás és vizuális tartalom </li>`
    elonye.innerHTML = `<li>Növeli a produktivitást</li><li>Kényelmes, gyors hozzáférés a rendszerfunkciókhoz</li> <li>Széleskörű funkcionalitás</li> <li>Fejlett keresési lehetőségek </li> <li>Intuitív és felhasználóbarát élmény </li>`
    li4.innerHTML = "A Copilot folyamatosan figyeli a felhasználói interakciókat és alkalmazásokat, hogy jobban tudjon segíteni. Ez azonban adatvédelmi aggályokat vethet fel, mivel egyes felhasználók nem biztos, hogy szeretnék, hogy a rendszer ilyen mértékben gyűjtsön adatokat róluk."
    li5.style.display = "block"
    li5.innerHTML = `<li>Nem mindig pontos vagy releváns válaszokat ad.</li>`
    li3.style.display = "block"
    
}

deepseek.onclick = function(){
    foCim.innerHTML = "Deepseek"
    cim.innerHTML = `<h4>A DeepSeek egy olyan technológia, amely különböző kontextusokban használható, például a keresési rendszerekben.</h4>`
    li1.innerHTML = "Mesterséges Intelligencia és Gépi Tanulás"
    li2.innerHTML = "Orvosi Képalkotás"
    li3.innerHTML = `<li>Pénzügyi Szektor</li>`
    elonye.innerHTML = `<li>Gyors és pontos keresés: képes gyorsan és pontosan feldolgozni és visszaadni a releváns adatokat, ami javítja a felhasználói élményt és növeli a hatékonyságot.</li><li>Nagy mennyiségű adat kezelése</li> <li>Relevánsabb eredmények</li> <li>Skálázhatóság </li> <li>Automatizálás: A rendszer képes az automatizált adatgyűjtésre és -elemzésre, amely csökkenti az emberi munkaerő szükségességét és növeli a hatékonyságot.</li>`
    li4.innerHTML = "A DeepSeek és hasonló rendszerek hátrányai közé tartozik, hogy magas költségűek lehetnek a fejlesztésük és fenntartásuk, valamint komplexek a beállításuk és használatuk. "
    li5.style.display = "block"
    li5.innerHTML = `<li>Ezen kívül, adatvédelmi aggályok is felmerülhetnek, mivel érzékeny adatokat dolgozhatnak fel, és a rendszerek túl bonyolult eredményeket adhatnak, amelyeket nehéz értelmezni. Továbbá, az ilyen rendszerek függnek a technológiai infrastruktúrától, és ha az meghibásodik, komoly problémák keletkezhetnek.</li>`
    li3.style.display = "block"
    
}

grok.onclick = function(){
    foCim.innerHTML = "Grok"
    cim.innerHTML = `<h4>A Grok egy mesterséges intelligencia alapú rendszer, amelyet különböző alkalmazásokban használuk</h4>`
    li1.innerHTML = "Növekvő pontosság"
    li2.innerHTML = "Skálázhatóság"
    li3.style.display = "none"
    elonye.innerHTML = `<li>Növekvő pontosság: Mivel Grok gépi tanulásra épít, a rendszer egyre jobbá válik az idő előrehaladtával, ahogy több adatot dolgoz fel.</li><li>Erőteljes gépi tanulási képességek: Grok képes gyorsan és pontosan elemezni nagy adathalmazokat, és azokat hasznos információkká alakítani.</li> <li>Automatizált tanulás: Az ilyen rendszerek képesek folyamatosan tanulni és javítani a teljesítményüket az új adatbeáramlásával.</li> `
    li4.innerHTML = "Magas számítási igény: A Grok típusú rendszerek jelentős számítási erőforrást igényelhetnek, ami magas költségekkel járhat a fejlesztés és működtetés során."
    li5.style.display = "block"
    li5.innerHTML = `<li>Bonyolult implementáció: A telepítés és a rendszer teljes körű beállítása bonyolult lehet, különösen akkor, ha nem rendelkeznek megfelelő szakértői háttérrel.</li>`
    
}