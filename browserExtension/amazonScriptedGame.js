var currentURL = "";
var domain = "";
var parser = new DOMParser();
var amazonHTML = "";

chrome.tabs.getSelected(null, function(tab) {
    currentURL = tab.url;
    var urlObject = new URL(currentURL);
    domain = urlObject.hostname;
    document.getElementById("test").innerHTML = domain;

    alert(fetch(currentURL));
    //fetch(currentURL).then(response => response.text()).then(data => alert(data));
    fetch(currentURL).then(response => response.text()).then(data => amazonHTML = data);
    alert(amazonHTML);
    if(data.getElementById("twotabsearchtextbox") != null)
    {
        alert("YES");
    }
    try {
        alert(currentURL.document.getElementById("twotabsearchtextbox").value);
      } catch (error) {
        alert(error);
      }
    if (domain === "www.amazon.com") {
        OnAmazon();
    }
});

function OnAmazon()
{
    alert("Inside function");
    alert(currentURL.getElementById("twotabsearchtextbox").value);
}