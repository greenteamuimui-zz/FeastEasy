@users.each do |user|
  if user.image_url == nil
    image_url = ""
  else
    image_url = user.image_url
  end
  if user.kitchens.empty?
    kitchenId = ""
    kitchenName = ""
  else
    kitchenId = user.kitchens.first.id
    kitchenName = user.kitchens.first.name
  end

  json.set! user.id do
    json.extract! user, :id, :username
    json.kitchenId kitchenId
    json.kitchenName kitchenName
    json.image_url image_url
  end
end
