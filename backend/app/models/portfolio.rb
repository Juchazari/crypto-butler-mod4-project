class Portfolio < ApplicationRecord
  belongs_to :user

  has_many :transactions, dependent: :delete_all
  has_many :coins, through: :transactions
end
