  # json.extract! user, :id, :username
# picture = ""
# user.favorited_kitchens.each do |favorite_kitchen|



json.extract! user, :id, :username
json.reservations user.reservations
json.favorites user.favorited_kitchens
json.kitchens user.kitchens
json.image_url  user.image_url

json.pictures do
  user.favorited_kitchens.each do |favorite_kitchen|
    json.array! favorite_kitchen.pictures.limit(1)
  end
end


json.reviews user.reviews;
