class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :kitchen_id, null: false
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.integer :food_score, null: false
      t.integer :atmosphere_score, null: false
      t.integer :host_score, null: false
      t.integer :price_score, null: false
      t.float :overall_score
      t.timestamps
    end
    add_index :reviews, :kitchen_id
    add_index :reviews, :user_id
  end
end
