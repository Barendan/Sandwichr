if (window.SandwichrApp === undefined) {
	window.SandwichrApp = {};
}


SandwichrApp.kickOff = function () {
	console.log("SandwichrApp ONLINE!");
};


$(document).on("turboLinks:load", function () {

	SandwichrApp.kickOff();


});
