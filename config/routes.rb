Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :show, :index, :update]
    resources :kitchens, only:[:create, :show, :index]
    resources :cities, only:[:index]
    resources :reservations, only:[:index, :create]
    resources :reviews, only:[:index, :create]
    resources :favorites, only:[:destroy, :create, :index]
    resource :session, only:[:create, :destroy]

  end
  root "static_pages#root"
end
