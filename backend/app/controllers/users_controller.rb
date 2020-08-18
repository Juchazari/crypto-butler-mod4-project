class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: {
            portfolios: {
                include: {
                    transactions: {
                        include: :coin,
                        except: [:coin_id, :portfolio_id]
                    }
                }
            }
        }
    end
end
