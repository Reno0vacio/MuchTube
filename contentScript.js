function timeOut(second) {
    setTimeout(() => {
        const mainVideo = document.getElementsByClassName("style-scope ytd-player")[0].parentElement;
        const videoSize = document.querySelector("#movie_player");
        const videoWidth = videoSize.offsetWidth;
        const videoHeight = videoSize.offsetHeight;
        const pauseVideoClass = document.querySelector(".style-scope .ytd-player").firstElementChild.getAttribute("class");
        if(pauseVideoClass.includes("playing-mode")) {
            const pause = pauseVideoClass.replace("playing-mode", "paused-mode")
            document.querySelector(".style-scope .ytd-player").firstElementChild.setAttribute("class", pause)
            console.log(pause);
        }
        

        const div = document.createElement("div");
        const question = document.createElement("h1");
        const questionText = document.createTextNode("Why are you watching this video?");
        const input = document.createElement("textarea");
        const br = document.createElement("br");

        input.setAttribute("placeholder", "because of...");
        input.setAttribute("style", "width: 250px; height: 27px; resize: none; border: 1px solid black; border-radius:12px; background-color: rgba(0, 0, 0, 0.7); color: #f3f3f3e0");
        question.setAttribute("style", "color: #f3f3f3e0; font-size: 3rem; margin-bottom: 5px;")
        div.setAttribute("style", "display: flex; justify-content: center; flex-direction: column; align-items: center; position: absolute; background: rgba(0,0,0, 0.7); backdrop-filter: blur(10px); border-radius: 12px; " + "height:" + videoHeight + "px; " + "width:" + videoWidth + "px; " + "top: 0px;")
        question.appendChild(questionText);
        div.append(question, br, input);
        mainVideo.append(div)
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && input.value != "") {
                div.remove();
                let videoObj = {
                    title: videoTitle,
                    thumbnail: thumbnailUrl
                }
                chrome.storage.local.set({test: videoObj});
                console.log(chrome.storage.local.get(["test"]));
            }
        })

        // Actual video thumbnail
        const thumbnailUrl = document.querySelector('#watch7-content.watch-main-col link[itemprop="thumbnailUrl"]').getAttribute('href');
        const videoTitle = document.querySelector('#title > h1 > yt-formatted-string').innerText;

    }, second);
}
timeOut(2000);


//What i learned: 
// css styles: backdrop-filter, .
// timeout.
