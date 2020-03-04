class QuizSerializer < ActiveModel::Serializer
  attributes :id, :questions, :score
end
