class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :kitchen_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :favorites, :kitchen_id
    add_index :favorites, :user_id
  end
end
