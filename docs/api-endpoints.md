# **JSON API**  

## **HTML API**

### **Root**  

+ **GET** / - loads React web app  

## **JSON API**

### **Users**  
+ **POST** /api/users

### **Favorites**
+ **POST** /api/favorites
+ **DELETE** /api/favorites


### **Session**   
+ **POST** /api/session  
+ **DELETE** /api/session  


### **Kitchens**    
+ **GET** /api/kitchens (params would be cities/cuisine/name/cities)
+ **GET** /api/kitchens/:id  
+ **POST** /api/kitchens


### **Cities**  
+ **GET** /api/cities  


### **Reviews**  
+ **GET** /api/reviews
+ **POST** /api/reviews  


### **Reservations**    
+ **GET** /api/reservations  
+ **POST** /api/reservations (params: a lot of stuff)

## **Bonus**
### **Reservations** 
(If the current user is that reservation's customer or restaurant owner)
+ **PATCH** /api/reservations/:id  
+ **DELETE** /api/reservations/:id  

### **Users**  
+ **GET** /api/users/:userId
