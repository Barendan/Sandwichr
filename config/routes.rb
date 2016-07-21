Rails.application.routes.draw do
  devise_for :users

	resources :sandwiches, only: [:index, :show], controller: "sandwich_views"
	scope "/api" do
	  resources :ingredients, only: [:create, :destroy, :show]
	  resources :sandwiches, except: [:new, :edit]

	  post '/sandwiches/:id/ingredients/add', to: 'sandwiches#add_ingredient'
	end


	  get '/', to: 'sandwich_views#home'

	  get '/users/:id' => 'users#show'

end
