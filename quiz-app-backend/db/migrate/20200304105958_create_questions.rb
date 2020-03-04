class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :q_text
      t.string :correct_ans
      t.string :wrong_ans_1
      t.string :wrong_ans_2
      t.string :category
      t.timestamps
    end
    add_index :questions, :category
  end
end
