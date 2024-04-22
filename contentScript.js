// Ez a script töltődik be az oldalba ahol vagyunk.
(() => {
    console.log("hello");
    function asd() {
        let yTContent = document.getElementById("full-bleed-container");
        let mainVideo = document.getElementsByClassName("ytp-overlay ytp-speedmaster-overlay")[0];
        let mainVideoContorls = document.getElementsByClassName("ytp-gradient-bottom")[0];
        mainVideo.setAttribute("style", "display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.9);");
        let question = document.createElement("p");
        let br = document.createElement("br");
        let input = document.createElement("input");

        question.appendChild(document.createTextNode("Miért nézed ezt a videót?: "));

        input.setAttribute("placeholder", "Mert...")
        question.setAttribute("style", "font-size: 30px;")

        mainVideo.appendChild(question);
        mainVideo.appendChild(br);
        mainVideo.appendChild(input);

        mainVideoContorls.setAttribute("stlye", "background: rgba(23, 23, 23, 0.044)");
        console.log("Sikerült");

    }
    setTimeout(asd, 1500);
})();



// Mindig az "utolsó" inline css stilus lesz aktuális.
// Meg kell várni hogy betöltődjenek az elmek.

