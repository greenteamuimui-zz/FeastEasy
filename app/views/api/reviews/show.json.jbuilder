json.extract! @review, :id, :kitchen_id, :title, :body, :food_score, :atmosphere_score, :host_score, :price_score, :overall_score, :created_at

json.username @review.user.username
