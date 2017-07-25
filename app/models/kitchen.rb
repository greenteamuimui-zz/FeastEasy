class Kitchen < ApplicationRecord
  validates :user_id, :city_id, :name, :cuisine, :size, :feast_time, :address, :phone, :about, presence: true

  belongs_to :user
  belongs_to :city
  has_many :reservations
  has_many :reviews
  has_many :pictures
  has_many :favorites

  has_many :favorited_user,
  through: :favorites,
  source: :user

end
