$(document).on("turbolinks:load", function () {
	
	$('.js-add-ingredient').click( SandwichrApp.addIngredientToSandwich ); 

});


SandwichrApp.addIngredientToSandwich = function (event) {
	var btn = event.currentTarget; 

	var IngredientId = $(btn).data("ingredient-id");
	var SandwichId = $(btn).data("sandwich-id");
	var IngredientName = $(btn).data("ingredient-name");
	
	var data = { ingredient_id: IngredientId };

	$.ajax({
		type: "POST",
		url: `/api/sandwiches/${SandwichId}/ingredients/add`,
		data: data,
		success: SandwichrApp.updateFunk,
		error: SandwichrApp.handleError,
	});
};

SandwichrApp.updateFunk = function (response) {
	console.log("Added ingredient successfully");
	console.log(response);

	var lastIndex = response.ingredients.length - 1;
	var newIngredient = response.ingredients[lastIndex];

	var show = `
	<li> ${newIngredient.name} </li>
	`;
	
	$('.js-ingredient-list').append(show);
};

SandwichrApp.handleError = function (err) {
	console.log("You got error:", err.responseText);

	`<div> The ingredient could not be added. Try again later! </div>`
}