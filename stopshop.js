/*

1 - get the url
2 - check for "cart" -> for now, have isCart
3 - if no cart, close/end script
4 - if cart, 

*/

const questionsUrl = chrome.runtime.getURL("stopshop.html");

//when navigate to a new page
chrome.webRequest.onBeforeRequest.addListener(
	function(details) { 
		console.log("oh hey this is running");
		console.log("heading to " + details.url);
		/*if (/cart/.test(details.url)) { //this isn't working atm
			console.log("it's a cart");
			return;
		} else {
			console.log("not a cart");

		}*/
		return {redirectUrl: questionsUrl};
	},
  	// filters
 	{urls: ["https://*/*cart*", "http://*/*cart*"],  //will need to change filter method but for now?
 	 types: ["main_frame", "sub_frame"]},
 	// extraInfoSpec
 	["blocking"]);

//ok so it's only showing a redirect to cart on entering the url directly
//not via clicking a link on a page (it's still blocked then, but stopshop.html isn't showing up)
//...but it's working when opening tab on new page?

//for directing back to page:
//each request has unique ID, unique w/in browser session/extension context
//so should be able to save original request ID and resend?