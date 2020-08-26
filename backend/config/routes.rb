Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :portfolios, only: [:create, :show, :update, :destroy]
  resources :transactions, only: [:create, :update, :destroy]
  resources :coins, only: [:index]
  resources :watchlists, only: [:create]
  resources :watchlist_coins, only: [:create]
end
