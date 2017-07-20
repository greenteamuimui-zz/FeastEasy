class City < ApplicationRecord
  validates :name, presence: true
  validates :photo_url, presence: true

  has_many :kitchens
  has_many :reservations, through: :kitchens

end
