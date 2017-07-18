{    
  currentUser: {  
      id: 1,  
      email: "bob@gmail.com",  
      },

    forms: {
      signUp: {errors: []},
      logIn: {errors: []},
      createNote: {errors: ["body can't be blank"]}
    },

    cities: { (might need to think wether I need city)
      1: {     
        id: 1,
        name: "New York",
        gps_location: [coordinates],
        photo: image_url,
        kitchens: [1, 2]
        }
      },  

    kitchens: {
      1: {      
        id: 1,
        creator_id: 1,
        name: "Ilya's kitchen",
        cuisine: "Russian",
        size: 6,
        rating_score: 4,
        address: "200 Okay Street, Brooklyn NY 11216",  
        phone: "987-123-4567",
        about: "Great cafe is an awesome cafe.",  
        gps_location: [coordinates],
        photos: [image_urls],
        city_name: "New York", (or city_id)
      }
    }

    reservations: {
      1: {
        id: 1,
        kitchen_id: 1,
        user_id: 1,
        seats: 2,
        date: "01/01/2017"
      }

    reviews: {
      1: {
        id: 1,
        kitchen_id: 1,
        user_id: 1,
        title: "Greatest Shakshuka ever",
        body: "Yummmm",
        food_score: 4,
        atmosphere_score: 3,
        host_score: 5,
        price_sore: 2,
        overall_score: 4,
        date: "01/01/2017"
      }
    }

    users: {
      1: {
        id: 1,
        favorites: [1, 2, 3],
        first_name: "Cherry",
        last_name: "Lam",
        email: "hehe@gmail.com",
        image: [image_url]
      }
    }

  }
