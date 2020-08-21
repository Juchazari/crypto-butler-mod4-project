class TransactionsController < ApplicationController

    def create
        user = User.first
        portfolio = Portfolio.find(params[:portfolio])
        coin = Coin.find(params[:coin])
        transaction = Transaction.create(
            portfolio: portfolio,
            coin: coin,
            bought_price: params[:bought_price],
            quantity: params[:quantity]
        )

        render json: transaction, include: :coin
    end

    def update
        transaction = Transaction.find(params[:id])
        transaction.update(quantity: params[:quantity], bought_price: params[:bought_price])

        render json: transaction
    end

    def destroy
        Transaction.find(params[:id]).destroy
    end

    private

    def transaction_params
        params.require(:transaction).permit(:coin_id, :portfolio_id, :quantity, :bought_price)
    end

end