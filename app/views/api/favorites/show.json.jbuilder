json.favorite do
  json.extract! @favorite, :kitchen_id, :user_id
end
