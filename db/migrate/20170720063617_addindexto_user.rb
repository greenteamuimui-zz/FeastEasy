class AddindextoUser < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :username
  end
end
