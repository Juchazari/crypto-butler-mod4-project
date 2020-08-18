class Portfolio < ApplicationRecord
  belongs_to :user

  has_many :transactions
  has_many :coins, through: :transactions
  # accepts_nested_attributes_for :transaction, :coin
end
