class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.integer :kitchen_id, null: false
      t.string :image_url, null: false
      t.timestamps
    end
    add_index :pictures, :kitchen_id
  end
end
