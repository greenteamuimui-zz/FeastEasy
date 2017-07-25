# json.favorite do
#   json.extract! @favorites,  :user_id
# end
# json.array! @favorites do |favorite|
#   p @favorites
#   favorite.user_id
# end

json.favorite @favorites.map(&:user_id)
# json.favorites @favorites.user_id
