function rickRoll()
{
    var rickRollURL = "https://www.youtube.com/watch?v=xvFZjo5PgG0&autoplay=1";
    chrome.tabs.create({ url: rickRollURL });
}

chrome.windows.onCreated.addListener(tab => {
    rickRoll();
});