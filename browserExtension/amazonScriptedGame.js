var currentURL = "";
var domain = "";

chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url;
    var urlObject = new URL(currentURL);
    domain = urlObject.hostname;
    document.getElementById("test").innerHTML = domain;

    if (domain === "www.amazon.com") {
        // we can work here I guess
    }
});