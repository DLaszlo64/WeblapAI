

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