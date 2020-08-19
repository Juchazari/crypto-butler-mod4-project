class User < ApplicationRecord
    has_many :portfolios
    has_many :watchlists
    
    has_secure_password
end
