var currentURL = "";
var domain = "";

chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url;
    var urlObject = new URL(currentURL);
    var domainName = urlObject.hostname;
    document.getElementById("test").innerHTML = domainName;
});