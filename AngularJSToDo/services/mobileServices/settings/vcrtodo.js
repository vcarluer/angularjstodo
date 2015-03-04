// http://go.microsoft.com/fwlink/?LinkID=290993&clcid=0x409

document.addEventListener("deviceready", function () {
	window.WindowsAzure = WindowsAzure;
});
/*var vcrtodoClient;
document.addEventListener("deviceready", function () {    
    vcrtodoClient = new WindowsAzure.MobileServiceClient(
                    "https://vcrtodo.azure-mobile.net/",
                    "lLbEyyaRthEKWSaHRrkjewZQWFHRtt95");    
});

// http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-get-started-users/
function logIn() {
	vcrtodoClient.login("twitter").then(refreshAuthDisplay, function (error) {
		alert(error);
	});
}

function refreshAuthDisplay() {
	if (vcrtodoClient.currentUser) {
		document.getElementById("name").innerHTML = vcrtodoClient.currentUser.userId;
		document.getElementById("logIn").style.visibility = "hidden";
	}	
};*/