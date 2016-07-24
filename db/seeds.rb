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


Tomato = Ingredient.create(name: "Tomato", calories: 15)
Lettuce = Ingredient.create(name: "Lettuce", calories: 10)
BananaPepper = Ingredient.create(name: "Banana Pepper", calories: 20)
Turkey = Ingredient.create(name: "Turkey", calories: 90)
Prosciutto = Ingredient.create(name: "Prosciutto", calories: 115)
Ham = Ingredient.create(name: "Ham", calories: 100)
Mayo = Ingredient.create(name: "Mayo", calories: 50)
Spinach = Ingredient.create(name: "Spinach", calories: 10)
Salami = Ingredient.create(name: "Salami", calories: 100)

