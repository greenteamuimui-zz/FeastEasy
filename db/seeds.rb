User.destroy_all
City.destroy_all
Kitchen.destroy_all
Reservation.destroy_all

u1 = User.create(username: "Cherry", email:"cherry@gmail.com", password:"123456")
u2 = User.create(username: "Ilya", email:"ilya@gmail.com", password:"654321")
u3 = User.create(username: "Guest", email:"guest@gmail.com", password:"123456")

c1 = City.create(name:"San Francisco", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509423/sf_lzgrsr.jpg")
c2 = City.create(name:"New Orleans", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/c_scale,h_1800/v1500509703/nola_eirw5u.png")
c3 = City.create(name:"Hong Kong", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509813/hk_wjtwej.jpg")
c4 = City.create(name:"London", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510203/london_clojc4.jpg")
c5 = City.create(name:"Stockholm", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510371/stockholm1_wvs9ib.jpg")

k1 = Kitchen.create!(user_id:u1.id, city_id:1, name:"Fan-Asian table", cuisine:"Pan-Asian", size:8, feast_time:"7:30 PM", address:"700 Oak Street, San Francisco, CA 94117", phone:"415-282-7339", about:"Are you a big fan of asian good? So am I!")

k2 = Kitchen.create!(user_id:u2.id, city_id:1, name:"Pelmenis Manifest", cuisine:"Russian", size:6, feast_time:"8:30 PM", address:"600 Market Street, San Francisco, CA 94103", phone:"415-432-4324", about:"Russian Dumplings with an asian kick.")

k3 = Kitchen.create!(user_id:u3.id, city_id:1, name:"Grill Time, beer time!", cuisine:"American", size:8, feast_time:"5:30 PM", address:"3621 26th Street, San Francisco, CA 94107", phone:"415-221-0038", about:"We start early with beer and good old american charcoal barbeque hotdogs!")

k4 = Kitchen.create!(user_id:u1.id, city_id:3, name:"Hong Kong Home Style Cafe", cuisine:"Chinese", size:12, feast_time:"7:30 PM", phone:"28898091", address:"City Garden, North Point, Hong Kong", about:"Milk tea all the way")

r1 = Reservation.create!()
