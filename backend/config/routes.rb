Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :portfolios, only: [:create, :show, :update]
  resources :transactions, only: [:create]
  resources :coins, only: [:index]
end
