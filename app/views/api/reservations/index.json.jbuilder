@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :id, :kitchen_id, :user_id, :seats, :date
  end
end
