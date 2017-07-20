class Reservation < ApplicationRecord
  validates :user_id, :kitchen_id, :seats, :date, presence: true

  belongs_to :user
  belongs_to :kitchen
  has_one :city, through: :kitchen

end
