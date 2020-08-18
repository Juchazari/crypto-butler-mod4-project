class PortfoliosController < ApplicationController
    def index
        portfolios = Portfolio.all
        render json: portfolios, include: {
            transactions: {
                include: :coin,
                except: [:coin_id, :portfolio_id]
            }
        }
    end
end