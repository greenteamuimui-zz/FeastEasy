overall_score = 0
total_num = 0
@kitchen.reviews.each do |review|
  overall_score += review.overall_score
  total_num += 1
end


  json.extract! @kitchen, :id, :user_id, :name, :cuisine, :city_id, :size, :feast_time, :address, :phone, :about
  json.overall_score (overall_score/total_num)
  json.image_url @kitchen.pictures.each do |picture|
    json.image_url picture.image_url
  end


# json.image_url @kitchen.pictures.each do |picture|
#   json.set! picture.id do
#     json.extract! picture, :image_url
#   end
