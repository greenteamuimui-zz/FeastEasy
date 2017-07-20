class CreateKitchens < ActiveRecord::Migration[5.1]
  def change
    create_table :kitchens do |t|
      t.integer :user_id, null: false
      t.integer :city_id, null: false
      t.string :name, null: false
      t.string :cuisine, null: false
      t.integer :size, null: false
      t.string :feast_time, null: false
      t.string :address, null: false
      t.string :phone, null: false
      t.string :about, null: false
      t.timestamps
    end
    add_index :kitchens, :user_id
    add_index :kitchens, :city_id
  end
end
