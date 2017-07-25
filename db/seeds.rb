User.destroy_all
City.destroy_all
Kitchen.destroy_all
Reservation.destroy_all
Picture.destroy_all
Review.destroy_all
Favorite.destroy_all

u1 = User.create(username: "Cherry", email:"cherry@gmail.com", password:"123456")
u2 = User.create(username: "Ilya", email:"ilya@gmail.com", password:"654321")
u3 = User.create(username: "Guest", email:"guest@gmail.com", password:"123456")
u4 = User.create(username: "Andre", email:"andre@gmail.com", password:"123456")
u5 = User.create(username: "Suzy", email:"suzy@gmail.com", password:"123456")
u6 = User.create(username: "Hans", email:"hans@gmail.com", password:"123456")
u7 = User.create(username: "Zelda", email:"zelda@gmail.com", password:"123456")
u8 = User.create(username: "Johnny", email:"johnny@gmail.com", password:"123456")


c1 = City.create(name:"San Francisco", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509423/sf_lzgrsr.jpg")
c2 = City.create(name:"New Orleans", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/c_scale,h_1800/v1500509703/nola_eirw5u.png")
c3 = City.create(name:"Hong Kong", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509813/hk_wjtwej.jpg")
c4 = City.create(name:"London", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510203/london_clojc4.jpg")
c5 = City.create(name:"Stockholm", photo_url:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510371/stockholm1_wvs9ib.jpg")

k1 = Kitchen.create!(user_id:u1.id, city_id:c1.id, name:"Fan-Asian table", cuisine:"Pan-Asian", size:8, feast_time:"7:30 PM", address:"700 Oak Street, San Francisco, CA 94117", phone:"415-282-7339", about:"Are you a big fan of asian good? So am I!")

k2 = Kitchen.create!(user_id:u2.id, city_id:c1.id, name:"Pelmenis Manifest", cuisine:"Russian", size:6, feast_time:"8:30 PM", address:"600 Market Street, San Francisco, CA 94103", phone:"415-432-4324", about:"Russian Dumplings with an asian kick.")

k3 = Kitchen.create!(user_id:u3.id, city_id:c1.id, name:"Grill Time, beer time!", cuisine:"American", size:8, feast_time:"5:30 PM", address:"3621 26th Street, San Francisco, CA 94107", phone:"415-221-0038", about:"We start early with beer and good old american charcoal barbeque hotdogs!")

k4 = Kitchen.create!(user_id:u1.id, city_id:c3.id, name:"Hong Kong Home Style Cafe", cuisine:"Chinese", size:12, feast_time:"7:30 PM", phone:"28898091", address:"City Garden, North Point, Hong Kong", about:"Milk tea all the way")

k5 = Kitchen.create!(user_id:u4.id, city_id:c1.id, name:"Andre's Scandinavian Kitchen", cuisine:"Scandinavian", size:6, feast_time:"7:00 PM", address:"2085 Bush St, San Francisco, CA 94115", phone:"415-233-7767", about:"Andre's inspiration for home Scandinavian cooking comes from his childhood meals at home in Ålesund, Norway. Just like his mom who prepared fresh fish, smoked meats and salads from crispy in-season vegetables, Andre strives to bring his childhood home to his new home in the Bay Area. But it doesn't end there, Andre is always experimenting with his friendly neighbors' cuisine, be it freshly baked Danishes from (where else, Denmark) to Finnish Ruisleipä, rye bread, to Swedish meatballs. And no, those are not the kind you find at Ikea. Andre's love of cooking and nostalgic desire to for home food will make you feel like you transported to Scandinavia. Minus the harsh winter.  Come join Andre and you will surely discover something new in your culinary adventures. ")

k6 = Kitchen.create!(user_id:u5.id, city_id:c1.id, name:"Suzy's and Vadim's Korean Home", cuisine:"Korean", size:10, feast_time:"8:00 PM", address:"420 Filbert Street, San Francisco, CA 94133", phone:"478-121-3214", about:"Hi, I'm Suzy! I love food, lol :) But no, it's not just that I like to eat. I love to cook, experiment, add more spices, add less spices. I also love sharing my food with good people. My husband and I would be delighted to welcome you to our home. You never know what I will cook up next. It could be spicy tofu kimchi soup, or maybe delicious Korean fried chicken (warning: you won't ever go back to KFC after trying out my spicy and juicy chicken). If you don't know the difference between Japanese and Korean Ramen, given me a chance and I will show you which one is the best. I may be a little biased on that but you be the judge.

P.S. My husband is Russian, so as a bonus you may experience some traditional Russian dumplings side by side with the beef bulgogi. But that depends on his mood lol
")

k7 = Kitchen.create!(user_id:u6.id, city_id:c1.id, name:"Hans and Friends - German cuisine and humor", cuisine:"German", size:6, feast_time:"6:30 PM", address:"645 5th Street, San Francisco, CA 94107", phone:"760-282-2132", about:"Guten Morgen or Guten Abend, friends! I would like to invite you to my home to share a meal and conversation about German culture and about anything else that may pop up. Although, I’m pretty new to cooking, I’m certainly not new to appreciating German food. Be it hardy potatoes with meat sauces, sweet Apfelstrudel, or salty pretzels, I’m sure you will find something you like. And of course, no meal will be served without some German beer. You may want to take public transportation because I will not let you go home sober ;)")

k8 = Kitchen.create!(user_id:u7.id, city_id:c1.id, name:"Vegan Paradise", cuisine:"Vegan", size:6, feast_time:"7:30 PM", address:"2320 Green Street, San Francisco, CA 94123", phone:"650-112-3255", about:"I’ve been there. Being vegan is not easy. Restaurants offer your basic quinoa salad and a few veggies. I believe that being vegan doesn’t mean you should compromise on quality. My meals are served made with delicious sauces and yummy bread. Let me surprise you by meals made of nuts, tofu, root vegetables, local fruits - I promise you, that even hard code meat eaters will leave thinking that they should consider that \"vegan thing\"")


k9 = Kitchen.create!(user_id:u8.id, city_id:c1.id, name:"Homemade sushi party", cuisine:"Japanese", size:8, feast_time:"7:00 PM", address:"1800 Mission Street, San Francisco, CA 94103", phone:"651-322-1231", about:"I got hooked on the art of Sushi while living in Japan. I fell in love with the rice, fresh fish, delicate way of handling the knife, precise placement of sheets of seaweed. I have 3 rice cookers that I like to experiment with and I try different ingredients every time so feel free to come multiple times - it is very likely you will have different experiences every single time. I invite my guests to come early to help me cook. I truly believe that cooking sushi is a great way to learn new skills that you can use every day. Join me. You host, Johny.")

r1 = Reservation.create!(kitchen_id: k1.id, user_id:u2.id, seats: 4, date: Date.new(2007, 6, 1))
r2 = Reservation.create!(kitchen_id: k1.id, user_id:u3.id, seats: 1, date: Date.new(2007, 6, 1))
r3 = Reservation.create!(kitchen_id: k2.id, user_id:u1.id, seats: 6, date: Date.new(2007, 6, 2))

p1 = Picture.create!(kitchen_id: k1.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570168/k1-p1_blvogo.jpg")
p2 = Picture.create!(kitchen_id: k1.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570484/k1-p2_y1nysx.jpg")
p3 = Picture.create!(kitchen_id: k1.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570488/k1-p4_n5pw59.jpg")
p4 = Picture.create!(kitchen_id: k2.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570791/k2-p2_dstrmx.jpg")
p5 = Picture.create!(kitchen_id: k2.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570791/k2-p3_pdrzub.jpg")
p6 = Picture.create!(kitchen_id: k2.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500570788/k2-1_pzjzfj.jpg")
p7 = Picture.create!(kitchen_id: k3.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500571065/k3-p1_uln9ta.jpg")
p8 = Picture.create!(kitchen_id: k3.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500571066/k3-p2_iif2df.jpg")
p9 = Picture.create!(kitchen_id: k3.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500571067/k3-p3_expq2w.jpg")

p10 = Picture.create!(kitchen_id: k5.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877198/k5-p1_bd61qq.jpg")
p11 = Picture.create!(kitchen_id: k5.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877201/k5-p2_kmjach.jpg")
p12 = Picture.create!(kitchen_id: k5.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877201/k5-p3_hbbkfj.jpg")
p13 = Picture.create!(kitchen_id: k6.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877274/k6-p1_hjdtue.jpg")
p14 = Picture.create!(kitchen_id: k6.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877275/k6-p2_n2q5lt.jpg")
p15 = Picture.create!(kitchen_id: k6.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877332/k6-p3_mt0u78.jpg")
p16 = Picture.create!(kitchen_id: k7.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877626/k7-p1_ooda8p.jpg")
p17 = Picture.create!(kitchen_id: k7.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877628/k7-p2_e2zucb.jpg")
p18 = Picture.create!(kitchen_id: k7.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500877628/k7-p3_if6ach.jpg")
p19 = Picture.create!(kitchen_id: k8.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913184/k8-p1_y3ityd.png")
p20 = Picture.create!(kitchen_id: k8.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913184/k8-p2_aacavn.jpg")
p21 = Picture.create!(kitchen_id: k8.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913185/k8-p3_sblmhi.jpg")
p22 = Picture.create!(kitchen_id: k9.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913399/k9-p1_huw4qx.jpg")
p23 = Picture.create!(kitchen_id: k9.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913400/k9-p2_xxjau4.jpg")
p24 = Picture.create!(kitchen_id: k9.id, image_url: "http://res.cloudinary.com/greenteamuimui/image/upload/v1500913402/k9-p3_bahnif.jpg")

r1 = Review.create!(kitchen_id: k1.id, user_id: u3.id, title:"Great Asian Food!", body:"Awesome host, great convos, delicious food, I am so digging it!", food_score:4, atmosphere_score: 4, host_score: 5, price_score: 3)
r2 = Review.create!(kitchen_id: k1.id, user_id: u2.id, title:"I love it!", body:"Cherry knows her asian food, the culture, the food, the drinks!", food_score:3, atmosphere_score: 4, host_score: 4, price_score: 4)
r3 = Review.create!(kitchen_id: k2.id, user_id: u1.id, title:"Need to make friends with Ilya!", body:"The way you drink with the best folks!", food_score:3, atmosphere_score: 3, host_score: 4, price_score: 4)
r4 = Review.create!(kitchen_id: k2.id, user_id: u3.id, title:"The Russian way of drinking vodka!", body:"Best home cook russian food ever!", food_score:4, atmosphere_score: 4, host_score: 5, price_score: 3)
r5 = Review.create!(kitchen_id: k3.id, user_id: u1.id, title:"Good old time!", body:"Who doesn't love drinking beer in a nice secluded backyard!", food_score:3, atmosphere_score: 4, host_score: 4, price_score: 3)

f1 = Favorite.create!(kitchen_id: k1.id, user_id:u2.id)
f2 = Favorite.create!(kitchen_id: k2.id, user_id:u1.id)
