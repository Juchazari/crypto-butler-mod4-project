Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :coins, only: [:index]
  
  resources :users do
    resources :portfolios
  end
end
