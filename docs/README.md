[Heroku Link]
(https://feasteasy.herokuapp.com/)

[Trello Link]
(https://trello.com/invite/b/wV42ikNz/21a1bb08fc1f69a9880879a2d1e81e54/feasteasy)

## **Minimum Viable Product**
1. New account creation, login, and guest/demo login

2. A production README, replacing this README (NB: check out the sample production README -- you'll write this later)

3. Hosting on Heroku

## **Required Features:**
  4. Create and search for OpenKitchen (Local's home kitchen)
  5. Reservations for a spot per evening on any available day
  6. Ratings/reviews for the kitchen
  7. Favorites

## **Bonus**
  8. Bonus: Users profiles with pictures(on user show and reviews)
  9. Bonus: Explore other diners' profiles

## **Design Docs**
+ [View Wireframes](./wireframes/)  
+ [React Components](./component-hierarchy.md)  
+ [API Endpoints](./api-endpoints.md)  
+ [DB Schema](./schema.md)  
+ [Sample State](./sample-state.md)  

## **Implementation Timeline**  

### **Phase 1: Backend setup and Front End User Authentification (2 days)**

+ Functioning rails project with front-end Authentification. Customer log-in and sign-up enabled. Has header component with login and sign up button. Has log in and sign up components. Has footer. Header and footer persist across views.  

### **Phase 2: Kitchen Model, API and Kitchen Show Components (2 days)**  

+ Kitchens have photos and the following show container sections: about, photos, a kitchen information/about sidebar, and a sidebar with links to different parts of the kitchen show component. Also, a create kitchen button to create a kitchen.  

### **Phase 3: Reviews show and create form (2 days)**  

+ On each kitchen show page, create a scollrable reviews show container/component to display all the reviews for the kitchen.
Also create a createReviewComponent on the same kitchen show page.

### **Phase 4: Reservations (1.5 day)**

+ Users can make reservations on the kitchen show page and add kitchen to favorites which shows on their user account page.

### **Phase 5: Restaurant Search (2 days)**  

+ Customers can search for kitchens with tables of the right size available on specified dates. Customers can search for kitchens by city, cuisine type and name. Conducting a search leads to a search result component showing top search results and short kitchen profiles with links to kitchen show components.

### **Phase 6: Popular kitchens filtered by cities drop down (1 days)**  

+ By selecting a specific city drop down, kitchen icons will render below the search bar which users can click on to access kitchen show page.

### **Bonuses: Add user profile pics and links to other user profile on reviews (TBD)**
