$(document).ready( function () {
	
	$('.js-add-ingredient').click( SandwichrApp.addIngredientToSandwich ); 

});


SandwichrApp.addIngredientToSandwich = function (event) {
	event.preventDefault;
	// get button that was clicked from the event's currentTarget
	var btn = event.currentTarget; 

	var IngredientId = $(btn).data("ingredient-id");
	var SandwichId = $(btn).data("sandwich-id");
	var IngredientName = $(btn).data("ingredient-name");

	// String.prototype.capitalize = function() {
	// return IngredientName.charAt(0).toUpperCase() + IngredientName.slice(1);
	// }
	
	var data = {
		sandwich_id: SandwichId,
		ingredient_id: IngredientId,
	};

	$.ajax({
		type: "POST",
		url: `/api/sandwiches/${SandwichId}/ingredients/add`,
		data: data,
		success: SandwichrApp.updateFunk(IngredientName),
		error: SandwichrApp.handleError,
	});
};

SandwichrApp.updateFunk (ingredient) {
	console.log("Added ingredient successfully");
	var show = `
	<li> ${ingredient} </li>
	`;
	
	$('.ingredient_list').append(show);

	// var lastIndex = ingredient - 1;
	// var newIngredient = ingredient[lastIndex];

	// var html = `
	// <li> ${newIngredient.name} </li>
	// `;

	// $('.ingredient_list').append(show);
};

function SandwichrApp.handleError (err) {
	console.log("You got error:", err.responseText);

	`<div> The ingredient could not be added. Try again later! </div>`
}