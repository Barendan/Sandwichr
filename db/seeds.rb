# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



italian = Sandwich.create(name: "italian", bread_type: "Multi-grain")
blt = Sandwich.create(name: "blt", bread_type: "Wheat")
russian = Sandwich.create(name: "russian", bread_type: "White")


tomato = Ingredient.create(name: "tomato", calories: 25)
lettuce = Ingredient.create(name: "lettuce", calories: 15)
ham = Ingredient.create(name: "ham", calories: 100)
turkey = Ingredient.create(name: "turkey", calories: 90)
