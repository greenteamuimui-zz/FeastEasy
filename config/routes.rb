Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resources :kitchens, only:[:create, :show, :index]
    resources :cities, only:[:index]
    resource :session, only:[:create, :destroy]
  end
  root "static_pages#root"
end
