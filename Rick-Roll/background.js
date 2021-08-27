function rickRoll()
{
    var rickRollURL = "https://www.youtube.com/watch?v=xvFZjo5PgG0&autoplay=1";
    chrome.tabs.create({ url: rickRollURL });
}

function getActivatedTab(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        try{
            if(tabs[0]!=undefined){
                rickRoll();  
            }
        }
        catch(err){
            setTimeout(function() {
            getActivatedTab();
            },100);
        }
    })
}

chrome.windows.onCreated.addListener(tab => {
    getActivatedTab();
});