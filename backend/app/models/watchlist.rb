class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_coins
  has_many :coins, through: :watchlist_coins
end
