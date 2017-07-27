  # json.extract! user, :id, :username
# picture = ""
# user.favorited_kitchens.each do |favorite_kitchen|


json.extract! user, :id, :username
json.favorites user.favorited_kitchens
json.kitchens user.kitchens
json.reservations do
  json.array! (user.reservations) do |reservation|
    json.kitchenName reservation.kitchen.name
    json.cityName reservation.city.name
    json.seats reservation.seats
    json.date reservation.date
  end
end
json.image_url user.image_url
json.joinDate user.created_at
json.email user.email

json.pictures do
  user.favorited_kitchens.each do |favorite_kitchen|
    json.array! favorite_kitchen.pictures.limit(1)
  end
end


# json.reviews user.reviews;

json.reviews do
  json.array! (user.reviews) do |review|
    json.kitchenName review.kitchen.name
    if review.kitchen.pictures.first == nil
      picture_url = ""
    else
      picture_url = review.kitchen.pictures.first.image_url
    end
    json.kitchenPicture picture_url
    json.kitchenId review.kitchen.id
    json.cityName review.kitchen.city.name
    json.title review.title
    json.body review.body
    json.date review.created_at
    json.overall_score review.overall_score
  end
end
