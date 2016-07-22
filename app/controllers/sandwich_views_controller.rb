class SandwichViewsController < ApplicationController
	before_action :authenticate_user!, only: [:show, :index]

	def index
		@allSandwiches = Sandwich.all

		render :index
	end

	def show
		@sandwich = Sandwich.find(params[:id])
		@allIngredients = Ingredient.all
		# @top_users = User.top_users

		render :show
	end

	def home
		
	end

end
