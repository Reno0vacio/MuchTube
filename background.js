// chrome.tabs.onUpdated.addListener((tabId,tab) => {
//     if (tab && tab.url && tab.url.includes("youtube.com/watch")) {
//         const queryParamaters = tab.url.split("?")[1];
//         const urlParameters = new URLSearchParams(queryParamaters);
//         console.log(urlParameters);
//         chrome.tabs.sendMessage(tabId,  {
//             type: "New",
//             videoId: urlParameters.get("v")
//         })
//     }
//     chrome.tabs.insertCSS(tabId, {file: "style.css"});

// })