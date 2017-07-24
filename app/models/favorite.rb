class Favorite < ApplicationRecord
  validates :kitchen_id, :user_id, null: false

  belongs_to :kitchen
  belongs_to :user
end
