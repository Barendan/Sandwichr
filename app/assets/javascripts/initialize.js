if (window.SandwichrApp === undefined) {
	window.SandwichrApp = {};
}


SandwichrApp.kickOff = function () {
	console.log("SandwichrApp ONLINE!");
};


$(document).on("turbolinks:load", function () {

	SandwichrApp.kickOff();

});
