class Review < ApplicationRecord
  validates :kitchen_id, :user_id, :title, :body, :food_score, :atmosphere_score, :host_score, :price_score, :overall_score, presence: true
  after_initialize :calculate_overallscore


  belongs_to :user
  belongs_to :kitchen

  def calculate_overallscore
    self.overall_score = (self.food_score + self.atmosphere_score + self.host_score + self.price_score)/4.0
  end

end
