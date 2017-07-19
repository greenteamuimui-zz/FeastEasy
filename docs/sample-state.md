```javascript  
{    
  currentUser: {  
    id: 1,
    username: "Bob123",
  },

  errors: [],

  cities: {
    1: {     
      id: 1,
      name: "New York",
      photo: "image_url",
      kitchens: [1, 2]
      }
    },  

  kitchens: {
    1: {      
      id: 1,
      creator_id: 1,
      name: "Ilya's kitchen",
      cuisine: "Russian",
      city_id: 2
      size: 6,
      feast_time, "7PM",
      rating_score: 4,
      address: "200 Okay Street, Brooklyn NY 11216",  
      phone: "987-123-4567",
      about: "Great cafe is an awesome cafe.",  
      gps_location: [coordinates],
      photos: [image_urls],
    }
  },

  reservations: {
    1: {
      id: 1,
      kitchen_id: 1,
      user_id: 1,
      seats: 2,
      date: DateObject;
    }
  },

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
  },

  users: {
    1: {
      id: 1,
      favorites: [1, 2, 3],
      first_name: "Cherry",
      last_name: "Lam",
      email: "hehe@gmail.com"
    }
  }

  favorites: {
    kitchen_id: 1,
    user_id: 2
  }
}
```
