  # json.extract! user, :id, :username

json.extract! user, :id, :username
json.reservations user.reservations
json.favorites user.favorites
json.kitchen user.kitchens
json.review user.reviews;
