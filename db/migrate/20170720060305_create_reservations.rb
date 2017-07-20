class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :kitchen_id, null: false
      t.integer :user_id, null: false
      t.integer :seats, null: false
      t.date :date, null: false
      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :kitchen_id
  end
end
