  # json.extract! user, :id, :username

json.extract! user, :id, :username
json.reservations user.reservations
json.favorites user.favorited_kitchens
json.kitchen user.kitchens
json.review user.reviews;
