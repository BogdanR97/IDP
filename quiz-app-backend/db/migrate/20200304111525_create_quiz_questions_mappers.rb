class CreateQuizQuestionsMappers < ActiveRecord::Migration[6.0]
  def change
    create_table :quiz_questions_mappers, :id => false do |t|
      t.integer :question_id
      t.integer :quiz_id
      t.timestamps
    end
  end
end
