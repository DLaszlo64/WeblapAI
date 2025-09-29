

gemini.onclick = function(){
    foCim.innerHTML = "Gemini"
    cim.innerHTML = ""
    li1.innerHTML = "Kép- és hangfelismerés:Képes képek, hangok és videók elemzésére"
    li2.innerHTML = "Természetes nyelvi feldolgozás:A Gemini AL képes szövegeket értelmezni, fordítani és generálni."
    li3.innerHTML = `Prediktív analitika és adatfeldolgozás:képes nagy mennyiségű adat elemzésére és előrejelzések készítésére különféle területeken.<br> PL pénzügyi elemzésben.`
    elonye.innerHTML = "A Gemini AL rendkívüli sebességgel képes feldolgozni hatalmas adatmennyiséget, amely az emberi döntéshozatalt nagymértékben felgyorsítja. Képesek rendkívüli pontossággal előrejelzéseket készíteni, különösen, ha elegendő és jó minőségű adat áll rendelkezésre."
    li4.innerHTML = "A Gemini AL rendszerek fejlesztése és üzemeltetése szoros összefüggésben áll az alkalmazott adatok minőségével. Ha a rendelkezésre álló adatok hibásak, torzítottak vagy nem elégségesek, akkor az AI rendszer is téves döntéseket hozhat."
    li5.style.display = "none"


}
chatgpt.onclick = function(){
    foCim.innerHTML = "ChatGPT"
    cim.innerHTML = `<h4>A ChatGPT az OpenAI egyik legnépszerűbb AI-modellje.</h4>`
    li1.innerHTML = "szövegalkotásra"
    li2.innerHTML = "kódolásra"
    li3.innerHTML = "üzleti alkalmazásokhoz és ügyfélszolgálati támogatásra"
    elonye.innerHTML = "képes kreatív és összetett szövegeket létrehozni, legyen szó marketingkampányok szövegezéséről, hirdetések megfogalmazásáról vagy akár szakmai blogok írásáról."
    li4.innerHTML = "Az ingyenes verzió csak GPT-3.5-höz fér hozzá"
    li5.style.display = "block"
    li5.innerHTML = `<li>Hajlamos néha hallucinációkra, azaz pontatlan információk generálására (ezért érdemes megkérni arra, ne találjon ki magától információkat, ha konkrét szövegre van szükséged) </li>`
    
}

copilot.onclick = function(){
    foCim.innerHTML = "Copilot"
    cim.innerHTML = `<h4>A copilot egy társalgási, AI-alapú asszisztens.</h4>`
    li1.innerHTML = "Programozás és forráskód írása,"
    li2.innerHTML = "Rendszerfeladatok kezelése és automatizálás"
    li3.innerHTML = "Képgenerálás és vizuális tartalom"
    elonye.innerHTML = `<li>Növeli a produktivitást</li><li>Kényelmes, gyors hozzáférés a rendszerfunkciókhoz</li> <li>Széleskörű funkcionalitás</li> <li>Fejlett keresési lehetőségek </li> <li>Intuitív és felhasználóbarát élmény </li>`
    li4.innerHTML = "A Copilot folyamatosan figyeli a felhasználói interakciókat és alkalmazásokat, hogy jobban tudjon segíteni. Ez azonban adatvédelmi aggályokat vethet fel, mivel egyes felhasználók nem biztos, hogy szeretnék, hogy a rendszer ilyen mértékben gyűjtsön adatokat róluk."
    li5.style.display = "block"
    li5.innerHTML = `<li>Nem mindig pontos vagy releváns válaszokat ad.</li>`
    
}