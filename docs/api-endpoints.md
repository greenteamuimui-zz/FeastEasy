# **JSON API**  

## **HTML API**

### **Root**  

+ **GET** / - loads React web app  

## **JSON API**

### **Users**  
+ **POST** /api/users

### **Favorites**
+ **POST** /api/users/:userId/favorites


### **Session**   
+ **POST** /api/session  
+ **DELETE** /api/session  


### **Kitchens**    
+ **GET** /api/kitchens (params would be cities/cuisine/name/cities)
+ **GET** /api/kitchens/:id  
+ **POST** /api/kitchens


### **Cities**   (TBD)
+ **GET** /api/cities  
+ **GET** /api/cities/:id  


### **Reviews**  (nested or not? not sure...)
+ **GET** /api/kitchens/:kitchenId/reviews  
+ **POST** /api/kitchens/:kitchenId/reviews  


### **Reservations**    (nested or not? not sure...)
+ **POST** /api/kitchens/:kitchenId/reservations (params: a lot of stuff)

(need to verify whether reservations info show up on user page, is that a required feature?)
(If the current user is that reservation's customer or restaurant owner)  
+ **GET** /api/reservations  
+ **PATCH** /api/reservations/:id  
+ **DELETE** /api/reservations/:id  
