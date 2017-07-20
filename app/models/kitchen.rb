class Kitchen < ApplicationRecord
  validates :user_id, :city_id, :name, :cuisine, :size, :feast_time, :address, :phone, :about, presence: true

  belongs_to :user
  has_many :reservations
  has_many :reviews

end
