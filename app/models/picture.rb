class Picture < ApplicationRecord
  validates :kitchen_id, :image_url, presence: true

  belongs_to :kitchen

end
