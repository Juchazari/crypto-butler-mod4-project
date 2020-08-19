Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :coins, only: [:index]
end
