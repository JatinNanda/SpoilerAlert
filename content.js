chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);

      // This line is new!
     // chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);
function getText() {
	return document.body.innerText
}
function getHTML() {
	return document.body.outerHTML
}
console.log(getHTML());
//console.log(getText());