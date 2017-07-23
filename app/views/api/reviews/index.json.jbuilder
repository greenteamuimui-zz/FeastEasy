@reviews.each do |review|
  user = review.user.username
  json.set! review.id do
    json.extract! review, :id, :kitchen_id, :user_id, :title, :body, :food_score, :atmosphere_score, :host_score, :price_score, :overall_score, :created_at
    json.username user
  end
end
