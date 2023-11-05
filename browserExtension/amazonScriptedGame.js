var currentWebsiteName = window.location.hostname;
console.log(currentWebsiteName);
var currentURL;
chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url;
    document.getElementById("test").innerHTML = currentURL;
    //hello 
});
