class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :q_text, :correct_ans, :wrong_ans_1, :wrong_ans_2, :category
end
