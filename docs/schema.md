# **Schema Information**  

## **Users**  

Column Name | Data Type | Details  
--- | --- | ---  
id | integer | primary key, not null  
first_name | string | not null  
last_name | string | not null  
email | string | not null  
password_digest | string | not null  
session_token | string | not null  
profile_photo(bonus) | image |  

has_many :reviews
has_many :reservations  
has_many :favorites

## **Kitchens**  

Column Name | Data Type | Details  
--- | --- | ---  
id | integer | primary key, not null  
creator_id | integer | not null, foreign_key   
name | string | not null  
cuisine | string | not null  
size | integer | not null    
rating_score | integer |       
address | string | not null  
phone | string | not null  
about | text | not null  
gps_location | array |  not null  
photos | array | default: []  
city_id | integer | not null, foreign key  

has_many :reservations
has_many :reviews
belongs_to : user

## **Cities**  

Column Name | Data Type | Details  
--- | --- | ---  
id | integer | primary key, not null  
name | string | not null  
gps_location | array |  not null  
photo | string | not null  
kitchens | array |

## **Reviews**  

Column Name | Data Type | Details  
--- | --- | ---  
id | integer | primary key, not null  
kitchen_id | integer | not null, foreign key  
user_id | integer | not null, foreign_key  
title | string | not null  
body | text | not null  
food_score | integer | not null
atmosphere_score | integer | not null
host_score | integer | not null
price_sore | integer | not null
overall_score | integer | not null

## **Reservations**  

Column Name | Data Type | Details  
--- | --- | ---  
id | integer | primary key, not null  
kitchen_id | integer | not null, foreign key  
user_id | integer | not null, foreign_key  
seats | integer | not null  
date | date | not null  
available | boolean | default: true  


## **Favorites**  
Column Name | Data Type | Details  
--- | --- | ---
id | integer | primary key, not null  
user_id | integer | not null, foreign_key  
kitchen_id | integer | not null, foreign key  
