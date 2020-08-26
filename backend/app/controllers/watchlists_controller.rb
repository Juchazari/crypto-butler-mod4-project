class WatchlistsController < ApplicationController

    def create
        user = User.first
        watchlist = Watchlist.create(
            user: user,
            name: params[:name]
        )
        render json: watchlist, include: :coins
    end

    # def update
    #     transaction = Transaction.find(params[:id])
    #     transaction.update(quantity: params[:quantity], bought_price: params[:bought_price])

    #     render json: transaction
    # end

    # def destroy
    #     Transaction.find(params[:id]).destroy
    # end

    # private

    # def transaction_params
    #     params.require(:transaction).permit(:coin_id, :portfolio_id, :quantity, :bought_price)
    # end

end