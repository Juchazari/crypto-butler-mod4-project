class TransactionsController < ApplicationController

    def create
        user = User.first
        portfolio = Portfolio.create(name: params[:name], user: user)
        coin = Coin.find(params[:coins][0])

        Transaction.create(
            portfolio: portfolio,
            coin: coin,
            bought_price: 200.0,
            quantity: 5.5
        )
    end

    private

    def transaction_params
        params.require(:portfolio).permit(:coin_id, :portfolio_id)
    end

end