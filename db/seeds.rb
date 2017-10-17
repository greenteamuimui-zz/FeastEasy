User.destroy_all
City.destroy_all
Kitchen.destroy_all
Reservation.destroy_all
Picture.destroy_all
Review.destroy_all
Favorite.destroy_all

u1 = User.create(username: "Cherry", email:"cherry@gmail.com", password:"123456", image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132405/9313_10151085029292245_1912354645_n_eomioh.jpg")
u2 = User.create(username: "Ilya", email:"ilya@gmail.com", password:"654321", image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132680/user3_lwhnyk.jpg")
u3 = User.create(username: "Guest", email:"guest@gmail.com", password:"123456")
u4 = User.create(username: "Andre", email:"andre@gmail.com", password:"123456", image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132683/user5_wnqa41.jpg")
u5 = User.create(username: "Suzy", email:"suzy@gmail.com", password:"123456", image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132684/user6_vbbyhf.jpg")
u6 = User.create(username: "Hans", email:"hans@gmail.com", password:"123456",image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132681/user4_xmu2vu.jpg")
u7 = User.create(username: "Zelda", email:"zelda@gmail.com", password:"123456",image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132685/user7_mkxynm.jpg" )
u8 = User.create(username: "Johnny", email:"johnny@gmail.com", password:"123456", image_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501132806/user8_nkimur.jpg")


c1 = City.create(name:"San Francisco", photo_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501043971/sf1_duv0ry.jpg")
c2 = City.create(name:"New Orleans", photo_url:"https://res.cloudinary.com/greenteamuimui/image/upload/c_scale,h_1800/v1500509703/nola_eirw5u.png")
c3 = City.create(name:"Hong Kong", photo_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1501050713/hk1_sj3tqx.jpg")
c4 = City.create(name:"London", photo_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1500510203/london_clojc4.jpg")
c5 = City.create(name:"Stockholm", photo_url:"https://res.cloudinary.com/greenteamuimui/image/upload/v1500510371/stockholm1_wvs9ib.jpg")

k1 = Kitchen.create!(user_id:u1.id, city_id:c1.id, name:"Fan-Asian table", cuisine:"Pan-Asian", size:8, feast_time:"7:30 PM", address:"700 Oak Street, San Francisco, CA 94117", phone:"415-282-7339", about:"Are you a big fan of asian food? So am I! Come join us at party and make some kick ass asian food with the real foodie....(hehe)")

k2 = Kitchen.create!(user_id:u2.id, city_id:c1.id, name:"Pelmenis Manifest", cuisine:"Russian", size:6, feast_time:"8:30 PM", address:"600 Market Street, San Francisco, CA 94103", phone:"415-432-4324", about:"Russian Dumplings with an asian kick. My wife is asian and we love making dumplings, when east meets even more EAST! Book your seats now!")

k3 = Kitchen.create!(user_id:u3.id, city_id:c1.id, name:"Grill Time, beer time!", cuisine:"American", size:8, feast_time:"5:30 PM", address:"3621 26th Street, San Francisco, CA 94107", phone:"415-221-0038", about:"We start early with beer and good old american charcoal barbeque hotdogs! Who does nt love grilling the backyard, let's not kid ourselves, let's leave work a bit early , what'd you say?")

k4 = Kitchen.create!(user_id:u1.id, city_id:c3.id, name:"Hong Kong Home Style Cafe", cuisine:"Chinese", size:12, feast_time:"7:30 PM", phone:"28898091", address:"City Garden, North Point, Hong Kong", about:"Milk tea all the way, who knows milktea can be so good, HK style french toast is soooo awesome, especially when made at home, come enjoy the HK kind of high-tea!")

k5 = Kitchen.create!(user_id:u4.id, city_id:c1.id, name:"Andre's Scandinavian Kitchen", cuisine:"Scandinavian", size:6, feast_time:"7:00 PM", address:"2085 Bush St, San Francisco, CA 94115", phone:"415-233-7767", about:"Andre's inspiration for home Scandinavian cooking comes from his childhood meals at home in Ålesund, Norway. Just like his mom who prepared fresh fish, smoked meats and salads from crispy in-season vegetables, Andre strives to bring his childhood home to his new home in the Bay Area. But it doesn't end there, Andre is always experimenting with his friendly neighbors' cuisine, be it freshly baked Danishes from (where else, Denmark) to Finnish Ruisleipä, rye bread, to Swedish meatballs. And no, those are not the kind you find at Ikea. Andre's love of cooking and nostalgic desire to for home food will make you feel like you transported to Scandinavia. Minus the harsh winter.  Come join Andre and you will surely discover something new in your culinary adventures. ")

k6 = Kitchen.create!(user_id:u5.id, city_id:c1.id, name:"Suzy's and Vadim's Korean Home", cuisine:"Korean", size:10, feast_time:"8:00 PM", address:"420 Filbert Street, San Francisco, CA 94133", phone:"478-121-3214", about:"Hi, I'm Suzy! I love food, lol :) But no, it's not just that I like to eat. I love to cook, experiment, add more spices, add less spices. I also love sharing my food with good people. My husband and I would be delighted to welcome you to our home. You never know what I will cook up next. It could be spicy tofu kimchi soup, or maybe delicious Korean fried chicken (warning: you won't ever go back to KFC after trying out my spicy and juicy chicken). If you don't know the difference between Japanese and Korean Ramen, given me a chance and I will show you which one is the best. I may be a little biased on that but you be the judge.

P.S. My husband is Russian, so as a bonus you may experience some traditional Russian dumplings side by side with the beef bulgogi. But that depends on his mood lol
")

k7 = Kitchen.create!(user_id:u6.id, city_id:c1.id, name:"Hans and Friends - German cuisine and humor", cuisine:"German", size:6, feast_time:"6:30 PM", address:"645 5th Street, San Francisco, CA 94107", phone:"760-282-2132", about:"Guten Morgen or Guten Abend, friends! I would like to invite you to my home to share a meal and conversation about German culture and about anything else that may pop up. Although, I’m pretty new to cooking, I’m certainly not new to appreciating German food. Be it hardy potatoes with meat sauces, sweet Apfelstrudel, or salty pretzels, I’m sure you will find something you like. And of course, no meal will be served without some German beer. You may want to take public transportation because I will not let you go home sober ;)")

k8 = Kitchen.create!(user_id:u7.id, city_id:c1.id, name:"Vegan Paradise", cuisine:"Vegan", size:6, feast_time:"7:30 PM", address:"2320 Green Street, San Francisco, CA 94123", phone:"650-112-3255", about:"I’ve been there. Being vegan is not easy. Restaurants offer your basic quinoa salad and a few veggies. I believe that being vegan doesn’t mean you should compromise on quality. My meals are served made with delicious sauces and yummy bread. Let me surprise you by meals made of nuts, tofu, root vegetables, local fruits - I promise you, that even hard code meat eaters will leave thinking that they should consider that \"vegan thing\"")


k9 = Kitchen.create!(user_id:u8.id, city_id:c1.id, name:"Homemade sushi party", cuisine:"Japanese", size:8, feast_time:"7:00 PM", address:"1800 Mission Street, San Francisco, CA 94103", phone:"651-322-1231", about:"I got hooked on the art of Sushi while living in Japan. I fell in love with the rice, fresh fish, delicate way of handling the knife, precise placement of sheets of seaweed. I have 3 rice cookers that I like to experiment with and I try different ingredients every time so feel free to come multiple times - it is very likely you will have different experiences every single time. I invite my guests to come early to help me cook. I truly believe that cooking sushi is a great way to learn new skills that you can use every day. Join me. You host, Johny.")

k10 = Kitchen.create!(user_id:u4.id, city_id:c2.id, name:"Cuban Mikey
", cuisine:"Cuban", size:12, feast_time:"7:30 PM", address:"1440 Filmore Ave, New Orleans, LA 70122", phone:"504-322-1231", about:"Greetings. Mikey is inviting you to experience cuban cuisine like you’ve never seen it before. I love scrumptious chicken, juicy pork sandwiches, all surrounded by yellow rice with a generous portion of black beans. And don’t forget the carbs - sweet plantains, delicious pastries. Oucharama, forget about that new age stuff, come eat with me to get some oldies but goodies. Hola, good food!")

k11 = Kitchen.create!(user_id:u5.id, city_id:c2.id, name:"Texas BBQ
", cuisine:"American", size:10, feast_time:"7:00 PM", address:"5839 Franklin Ave, New Orleans, LA 70122", phone:"504-322-1231", about:"I am Dave. I love writing code and creating stories, teaching kids and learning new things. I also love to BBQ. I also love good company, good conversations (if I talk too much, let me know, it happens sometimes). I will be grilling and BBQ-ing right in my backyard. Smell alone will make you want to come over every week. Yes, it’s that good.")

k12 = Kitchen.create!(user_id:u6.id, city_id:c2.id, name:"Banitsa and others (Bulgarian)", cuisine:"American", size:10, feast_time:"7:00 PM", address:"516 Bourbon St, New Orleans, LA 70130", phone:"504-322-1231", about:"I bet you haven’t had too much Bulgarian food lately. You’re missing out! Food is rich and delicious. Hi there, I’m Naoum and I’m originally from Sofia. It’s a beautiful city with even better food. We have savory, we have sweet, we have filling, we have …. Yeah, filling, that’s what you want, right? Join us for dinner and our friendly dog, Metcho (means, white bear in Bulgarian) will teach you how to really appreciate  Bulgarian food. ")

k13 = Kitchen.create!(user_id:u1.id, city_id:c2.id, name:"Prime Rib Dinner Today", cuisine:"American", size:10, feast_time:"8:00 PM", address:"516 Bourbon St, New Orleans, LA 70130", phone:"504-322-1231", about:"Every dinner order comes with a bevy of accompaniments: tossed salad, mashed potatoes or a baked potato, and Yorkshire pudding. The English-style dining rooms have fireplaces and cozy leather banquettes, making this space as intimate as it is iconic.")

k14 = Kitchen.create!(user_id:u2.id, city_id:c3.id, name:"Pelemi’s kitchen", cuisine:"American", size:10, feast_time:"7:00 PM", address:"Caroline Centre, 28 Yun Ping Rd, East Point, Hong Kong", phone:"2645-9873", about:"Something about pelmeni just drives people crazy. Come eat with me, drink with me, have fun with everyone! See you soon.")

k15 = Kitchen.create!(user_id:u6.id, city_id:c3.id, name:"Donuts Chef", cuisine:"Dessert", size:10, feast_time:"9:00 PM", address:"2 City Garden Rd, Hong Kong", phone:"2643-9843", about:"We make quite possibly the biggest donut you've ever seen. Try the Bob's Challenge, which requires consuming it in three minutes. Or, you know, just enjoy a bunch of really tasty donuts at your own pace.")

k16 = Kitchen.create!(user_id:u2.id, city_id:c3.id, name:"Swan Oyster Depot", cuisine:"Seafood", size:10, feast_time:"9:00 PM", address:"2 City Garden Rd, Hong Kong", phone:"2325-9873", about:"Swan Oyster Depot, open since 1912 in Nob Hill, is a raw fish institution. The seafood is unbelievably fresh, and the menu includes everything from clams, oysters, and Dungeness crab to sashimi platters and sea urchin. The clam chowder, a buttery and briny both made with the day's clams, is awesome, as is the twice-cracked crab. Basically, everything here rocks. The narrow space has only 18 bar seats, and it's a great option for a solo lunch since parties of one can usually bypass the long wait.")

k17 = Kitchen.create!(user_id:u7.id, city_id:c4.id, name:"Ben’s Thai
", cuisine:"Thai", size:6, feast_time:"12:00 PM", address:"18 Noel St, London W1F, UK", phone:"20-7240-1220", about:"This simple Thai kitchen stands out among the saturation of Asian restaurants on Polk St for mixing standard fare with experimental dishes most diners likely haven't heard of. The green curry is great, and so are the family recipes that the mother-and-son team will probably suggest you order. Ben Thai has a small but cold beer selection (including local brews like Almanac), daily happy hour, and Thai-style brunch.")

k18 = Kitchen.create!(user_id:u8.id, city_id:c4.id, name:"Acquerello’s High End Italian", cuisine:"Italian", size:6, feast_time:"12:00 PM", address:"11-13 Macklin St, London WC2B 5NH, UK", phone:"20-7230-1220", about:"For more than two decades, Acquerello has been serving high-end Italian cuisine and wine in a converted Nob Hill chapel. Far from an old-school red sauce joint, the Michelin-starred restaurant is pure posh decadence. There are a few tasting menus available, either a three-course prix fixe or the truffle-heavy seasonal one, and both are well worth the splurge. Just make sure you save room for dessert.
s")

r1 = Reservation.create!(kitchen_id: k1.id, user_id:u2.id, seats: 4, date: Date.new(2007, 6, 1))
r2 = Reservation.create!(kitchen_id: k1.id, user_id:u3.id, seats: 1, date: Date.new(2007, 6, 1))
r3 = Reservation.create!(kitchen_id: k2.id, user_id:u1.id, seats: 6, date: Date.new(2007, 6, 2))

p1 = Picture.create!(kitchen_id: k1.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570168/k1-p1_blvogo.jpg")
p2 = Picture.create!(kitchen_id: k1.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570484/k1-p2_y1nysx.jpg")
p3 = Picture.create!(kitchen_id: k1.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570488/k1-p4_n5pw59.jpg")
p4 = Picture.create!(kitchen_id: k2.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570791/k2-p2_dstrmx.jpg")
p5 = Picture.create!(kitchen_id: k2.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570791/k2-p3_pdrzub.jpg")
p6 = Picture.create!(kitchen_id: k2.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570788/k2-1_pzjzfj.jpg")
p7 = Picture.create!(kitchen_id: k3.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500571065/k3-p1_uln9ta.jpg")
p8 = Picture.create!(kitchen_id: k3.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500571066/k3-p2_iif2df.jpg")
p9 = Picture.create!(kitchen_id: k3.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500571067/k3-p3_expq2w.jpg")

p10 = Picture.create!(kitchen_id: k5.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877198/k5-p1_bd61qq.jpg")
p11 = Picture.create!(kitchen_id: k5.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877201/k5-p2_kmjach.jpg")
p12 = Picture.create!(kitchen_id: k5.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877201/k5-p3_hbbkfj.jpg")
p13 = Picture.create!(kitchen_id: k6.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877274/k6-p1_hjdtue.jpg")
p14 = Picture.create!(kitchen_id: k6.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877275/k6-p2_n2q5lt.jpg")
p15 = Picture.create!(kitchen_id: k6.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877332/k6-p3_mt0u78.jpg")
p16 = Picture.create!(kitchen_id: k7.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877626/k7-p1_ooda8p.jpg")
p17 = Picture.create!(kitchen_id: k7.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877628/k7-p2_e2zucb.jpg")
p18 = Picture.create!(kitchen_id: k7.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877628/k7-p3_if6ach.jpg")
p19 = Picture.create!(kitchen_id: k8.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500913184/k8-p1_y3ityd.png")
p20 = Picture.create!(kitchen_id: k8.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500913184/k8-p2_aacavn.jpg")
p21 = Picture.create!(kitchen_id: k8.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500913185/k8-p3_sblmhi.jpg")
p22 = Picture.create!(kitchen_id: k9.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500913399/k9-p1_huw4qx.jpg")
p23 = Picture.create!(kitchen_id: k9.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500913400/k9-p2_xxjau4.jpg")
p24 = Picture.create!(kitchen_id: k10.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051641/k10-p1_gdmbhc.jpg")
p25 = Picture.create!(kitchen_id: k10.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051642/k10-p2_ygivni.jpg")
p26 = Picture.create!(kitchen_id: k10.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051640/k10-p3_wrpcrl.jpg")
p27 = Picture.create!(kitchen_id: k11.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051643/k11-p2_aiiykj.jpg")
p28 = Picture.create!(kitchen_id: k11.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051642/k11-p1_negtj2.jpg")
p29 = Picture.create!(kitchen_id: k11.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501051643/k11-p3_vgkftm.jpg")
p30 = Picture.create!(kitchen_id: k12.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877332/k6-p3_mt0u78.jpg")
p31 = Picture.create!(kitchen_id: k12.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500570484/k1-p2_y1nysx.jpg")
p32 = Picture.create!(kitchen_id: k12.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500571066/k3-p2_iif2df.jpg")
p33 = Picture.create!(kitchen_id: k13.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877275/k6-p2_n2q5lt.jpg")
p34 = Picture.create!(kitchen_id: k13.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500877201/k5-p2_kmjach.jpg")
p35 = Picture.create!(kitchen_id: k13.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1500571067/k3-p3_expq2w.jpg")
p36 = Picture.create!(kitchen_id: k4.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501222678/k4-p1_ffgbwp.jpg")
p37 = Picture.create!(kitchen_id: k4.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501222652/k4-p2_rapmep.jpg")
p38 = Picture.create!(kitchen_id: k4.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501222653/k4-p3_nhk8xl.jpg")
p39 = Picture.create!(kitchen_id: k14.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259142/k14-p1_gq5pas.webp")
p40 = Picture.create!(kitchen_id: k14.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259143/k14-p2_ewdijr.jpg")
p41 = Picture.create!(kitchen_id: k14.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259571/k14-p3_jg1hjm.jpg")
p42 = Picture.create!(kitchen_id: k15.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259251/k15-p1_sn6fxw.jpg")
p43 = Picture.create!(kitchen_id: k15.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259252/k15-p2_qcn52p.jpg")
p44 = Picture.create!(kitchen_id: k15.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259254/k15-p3_e4vcfi.jpg")
p45 = Picture.create!(kitchen_id: k16.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259353/k16-p1_siocpv.jpg")
p46 = Picture.create!(kitchen_id: k16.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259355/k16-p2_susiqf.jpg")
p47 = Picture.create!(kitchen_id: k16.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259722/k16-p3_vagxqf.jpg")
p48 = Picture.create!(kitchen_id: k17.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501223154/k17-p1_ah9fiw.jpg")
p49 = Picture.create!(kitchen_id: k17.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501223155/k17-p2_fpfjsv.jpg")
p50 = Picture.create!(kitchen_id: k17.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501223157/k17-p3_ndwbdx.jpg")
p51 = Picture.create!(kitchen_id: k18.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259420/k18-p1_jqkkqd.jpg")
p52 = Picture.create!(kitchen_id: k18.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259422/k18-p2_kztzxw.jpg")
p53 = Picture.create!(kitchen_id: k18.id, image_url: "https://res.cloudinary.com/greenteamuimui/image/upload/v1501259423/k18-p3_ckirrk.jpg")



r1 = Review.create!(kitchen_id: k1.id, user_id: u3.id, title:"Great Asian Food!", body:"Awesome host, great convos, delicious food, I am so digging it!", food_score:4, atmosphere_score: 4, host_score: 5, price_score: 3)
r2 = Review.create!(kitchen_id: k1.id, user_id: u2.id, title:"I love it!", body:"Cherry knows her asian food, the culture, the food, the drinks!", food_score:3, atmosphere_score: 4, host_score: 4, price_score: 4)
r3 = Review.create!(kitchen_id: k2.id, user_id: u1.id, title:"Need to make friends with Ilya!", body:"The way you drink with the best folks!", food_score:3, atmosphere_score: 3, host_score: 4, price_score: 4)
r4 = Review.create!(kitchen_id: k2.id, user_id: u3.id, title:"The Russian way of drinking vodka!", body:"Best home cook russian food ever!", food_score:4, atmosphere_score: 4, host_score: 5, price_score: 3)
r5 = Review.create!(kitchen_id: k3.id, user_id: u1.id, title:"Good old time!", body:"Who doesn't love drinking beer in a nice secluded backyard!", food_score:3, atmosphere_score: 4, host_score: 4, price_score: 3)
r6 = Review.create!(kitchen_id: k5.id, user_id: u6.id, title:"Andre is the best!", body:"5 Stars - It almost seems unnecessary to say how how welcoming the owner is. My short visit for lunch was by far the best lunch pretty much ever. When I left, Andre gave me a hug and wished me safe travels. When you visit Andre’s, you don't just get a meal, you get an always life changing experience.", food_score:5, atmosphere_score: 4, host_score: 4, price_score: 5)
r7 = Review.create!(kitchen_id: k6.id, user_id: u1.id, title:"Can't wait go to another one these!", body:"Dinner at La Vara was a very rewarding experience - the food, the ambiance and the service were top notch. We ordered a few tapas that included vegetables, rabbit, and fish and all were delicious complemented by exquisite sauces. It was certainly a feast in the mouth.", food_score:3, atmosphere_score: 4, host_score: 4, price_score: 5)
r8 = Review.create!(kitchen_id: k4.id, user_id: u2.id, title:"So Wonderful.", body:"4 stars - Certainly my neighborhood favorite. Food is delicious, prepared hot, service is very good. At times they have freshly baked good (haven't tried them but smells good).", food_score:5, atmosphere_score: 4, host_score: 3, price_score: 5)
r9 = Review.create!(kitchen_id: k1.id, user_id: u6.id, title:"What Can I say?", body:"5 stars - Dinner at Hans’ was a very rewarding experience - the food, the ambiance and the service were top notch. We ordered a few tapas that included vegetables, rabbit, and fish and all were delicious complemented by exquisite sauces. It was certainly a feast in the mouth.", food_score:5, atmosphere_score: 1, host_score: 3, price_score: 5)
r10 = Review.create!(kitchen_id: k1.id, user_id: u7.id, title:"Love the vibe and the whole party", body:"5 Stars - I was so pleasantly surprised by the service here. I came in to do some work on my laptop and soon found myself surrounded by a few very rowdy children. When the children left, someone from the staff offered me a free cupcake for the 'trouble' of enduring the children, which they had nothing to do with. I refused and when I went to buy coffee they tried to make me not pay for it for the same reason. I paid since they were not at fault at all. I was amazed by the quality of service! The coffee was very good too.",food_score:5, atmosphere_score: 1, host_score: 3, price_score: 5)
r11 = Review.create!(kitchen_id: k2.id, user_id: u8.id, title:"Need to come back...", body:"5 Stars - I was so pleasantly surprised by the service here. I came in to do some work on my laptop and soon found myself surrounded by a few very rowdy children. When the children left, someone from the staff offered me a free cupcake for the 'trouble' of enduring the children, which they had nothing to do with. I refused and when I went to buy coffee they tried to make me not pay for it for the same reason. I paid since they were not at fault at all. I was amazed by the quality of service! The coffee was very good too.",food_score:5, atmosphere_score: 1, host_score: 5, price_score: 4)
r12 = Review.create!(kitchen_id: k5.id, user_id: u1.id, title:"Awesome...", body:"This restaurant has everything I expect from a Sushi restaurant in this part of the city - hidden away, cozy atmosphere, great service (waitress was unreliably nice), excellent food. Even the portions exceeded my expectations - the plates were not small and we could have easily ordered less. Desert, while limited variety, was very good. Even the grumpy owner added to the atmosphere. We were a group of 5 and were the first ones for the evening, we did not have to wait long to get our entrees.",food_score:5, atmosphere_score: 2, host_score: 3, price_score: 4)
r13 = Review.create!(kitchen_id: k7.id, user_id: u4.id, title:"Incredible experience", body:" This is not a venue for a mindless meal. However, if you want character and staff with values, ethics and respect for food this place is for you. If you want to get a story for every meal, you will enjoy Miya's. If you want to challenge your assumptions about what it means to have a meal that is good for you and the environment, do not pass this by.
",food_score:5, atmosphere_score: 5, host_score: 5, price_score: 4)
r14 = Review.create!(kitchen_id: k3.id, user_id: u6.id, title:"No Need to come back...", body:"The wine was bad, and the food (we got Salmon Ceviche and salad) was just ok. It was probably not a great choice for dinner but would definitely come back for the wine. Cheese plates also looked good on neighboring tables.",food_score:1, atmosphere_score: 1, host_score: 2, price_score: 2)
r15 = Review.create!(kitchen_id: k8.id, user_id: u1.id, title:"Wonderful experience!", body:"CrispyChicken, Steak Tips, Crab and Meatballs.... yum right? But there's a catch... it's not real meat! I wasn't quite sure on how to feel about it while eating it, but It was surprisingly pleasant.",food_score:4, atmosphere_score: 2, host_score: 2, price_score: 2)
r16 = Review.create!(kitchen_id: k9.id, user_id: u3.id, title:"Not sure about it.", body:"Just came back from the party and honestly, it was not very good. The Daily Special came with 'chicken teriyaki, salmon teriyaki, and beef teriyaki.' Sounds like an amazing deal for $14, right? But the chicken was completely cold and the salmon was hard. Only the beef was tasty, albeit extremely fatty.",food_score:2, atmosphere_score: 3, host_score: 2, price_score: 2)
r17 = Review.create!(kitchen_id: k10.id, user_id: u3.id, title:"Great Great Great time.", body:"Love the ambience and the food is simple and flavorful. I recommend going here is a small group of 2 or 3 since it's a hole in the wall kind of place. Our server was a sweetheart. We had a pitcher of sangria which serves 2 pretty well and some house special pupusas for appetizers. I really liked their salad, the dressing was very refreshing.",food_score:3, atmosphere_score: 5, host_score: 4, price_score: 2)
r18 = Review.create!(kitchen_id: k11.id, user_id: u8.id, title:"While not in Texas...", body:"I can't believe I just ate here for the first time. It won't be the last! Everything I had here was so ridiculously good! I'm a vegetarian and now I want to try their meat. The staff was nice - they even asked if I was veggie or vegan when ordering potato salad. ",food_score:3, atmosphere_score: 5, host_score: 4, price_score: 2)
r19 = Review.create!(kitchen_id: k12.id, user_id: u2.id, title:"YUMMMMMMM", body:"I honestly never really knew what Bulgarian food consisted of besides piroshkis and dumplings.  A bunch of us from work decided to head over to this spot and order the preset banquet menu.",food_score:4, atmosphere_score: 5, host_score: 4, price_score: 5)
r20 = Review.create!(kitchen_id: k13.id, user_id: u5.id, title:"Being a prime rib expert...", body:"The Baby back ribs are amazing, especially with the secret BBQ sauce ( you have to ask for it) love the garlic bread too! Some might think it's expensive but I don't because of the quality of the meat.",food_score:4, atmosphere_score: 5, host_score: 4, price_score: 5)
r21 = Review.create!(kitchen_id: k14.id, user_id: u1.id, title:"Nope.", body:"First of all, I walked in here with Russian friends from LA in an attempt to show them a nice Russian place and to be completely honest, we were even welcomed in the rudest manner.",food_score:1, atmosphere_score: 1, host_score: 1, price_score: 2)
r22 = Review.create!(kitchen_id: k15.id, user_id: u3.id, title:"Who doesn't like donuts", body:"Okay, when I want donuts, I just want some nice good ole traditional donuts, nothing fancy. And this place has it nailed down!!!",food_score:5, atmosphere_score: 5, host_score: 5, price_score: 2)
r23 = Review.create!(kitchen_id: k17.id, user_id: u4.id, title:"Noway they can make thai food that good.", body:"Can Thai food be elevated while remaining Thai without becoming a bastardized variation? Yes it can. And at Kin Khao that's what you get.",food_score:5, atmosphere_score: 5, host_score: 5, price_score: 4)
r24 = Review.create!(kitchen_id: k18.id, user_id: u2.id, title:"Almost as good as being in Italy?", body:"Overall a great joint for fresh made pasta. I don't often find value in restaurants in the city but I found it here. Our bill came out to about $100 before tax, fee (4%) and tip.",food_score:4, atmosphere_score: 4, host_score: 5, price_score: 4)


f1 = Favorite.create!(kitchen_id: k1.id, user_id:u2.id)
f2 = Favorite.create!(kitchen_id: k7.id, user_id:u2.id)
f3 = Favorite.create!(kitchen_id: k2.id, user_id:u1.id)
f4 = Favorite.create!(kitchen_id: k4.id, user_id:u1.id)
f5 = Favorite.create!(kitchen_id: k5.id, user_id:u3.id)
f6 = Favorite.create!(kitchen_id: k1.id, user_id:u3.id)
f7 = Favorite.create!(kitchen_id: k5.id, user_id:u5.id)
f8 = Favorite.create!(kitchen_id: k8.id, user_id:u5.id)
