# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


admin = User.create({email: "admin@admin.com", username: "admin", password: "admin", admin: true})
q_1 = Question.create({
    q_text: "In which country is Tibet?",
    correct_ans: "China",
    wrong_ans_1: "Nepal",
    wrong_ans_2: "India",
    category: "Geography"
})

q_2 = Question.create({
    q_text: "When did the WW2 start?",
    correct_ans: "1939",
    wrong_ans_1: "1945",
    wrong_ans_2: "1918",
    category: "History"
})