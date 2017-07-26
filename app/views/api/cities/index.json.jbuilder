# json.byId do
  @cities.each do |city|
    json.set! city.id do
      json.extract! city, :id, :name, :photo_url
    end
  end
# end
