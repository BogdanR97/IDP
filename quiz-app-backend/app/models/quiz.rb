class Quiz < ApplicationRecord
    has_many :quiz_questions_mappers
    has_many :questions, through: :quiz_questions_mappers
    belongs_to :user
end
