class Kitchen < ApplicationRecord
  validates :user_id, :city_id, :name, :cuisine, :size, :feast_time, :address, :phone, :about, presence: true

  belongs_to :kitchen
  has_many :reservations
  has_many :kitchens

end
