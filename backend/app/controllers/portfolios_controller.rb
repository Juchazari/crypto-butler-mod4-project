class PortfoliosController < ApplicationController
    # def index
    #     portfolios = Portfolio.all
    #     render json: portfolios, include: {
    #         transactions: {
    #             include: :coin,
    #             except: [:coin_id, :portfolio_id]
    #         }
    #     }
    # end

    # def create
    #     user = User.first
    #     Portfolio.create(
    #         name: portfolio_params[:name],
    #         user: user
    #     )
    # end

    # def show
    #     portfolio = Portfolio.find(params[:id])
    #     render json: portfolio, include: {
    #         transactions: {
    #             include: :coin,
    #             except: [:coin_id, :portfolio_id]
    #         }
    #     }
    # end

    # def update
    #     user = User.first
    #     portfolio = Portfolio.find(params[:id])
    # end

    # private

    # def portfolio_params
    #     params.require(:portfolio).permit(:name)
    # end
end