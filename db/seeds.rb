
User.destroy_all
City.destroy_all
Kitchen.destroy_all

u1 = User.create(username: "Cherry", email:"cherry@gmail.com", password:"123456")
u2 = User.create(username: "Ilya", email:"ilya@gmail.com", password:"654321")
u3 = User.create(username: "Guest", email:"guest@gmail.com", password:"123456")

c1 = City.create(name:"San Francisco", photo:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509423/sf_lzgrsr.jpg")
c1 = City.create(name:"New Orleans", photo:"http://res.cloudinary.com/greenteamuimui/image/upload/c_scale,h_1800/v1500509703/nola_eirw5u.png")
c1 = City.create(name:"Hong Kong", photo:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500509813/hk_wjtwej.jpg")
c1 = City.create(name:"London", photo:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510203/london_clojc4.jpg")
c1 = City.create(name:"Stockholm", photo:"http://res.cloudinary.com/greenteamuimui/image/upload/v1500510371/stockholm1_wvs9ib.jpg")
