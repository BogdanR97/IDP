class Question < ApplicationRecord
    has_many :quiz_questions_mappers
    has_many :quizzes, through: :quiz_questions_mappers
end
