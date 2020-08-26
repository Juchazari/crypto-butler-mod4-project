class WatchlistCoinsController < ApplicationController

    def create
        watchlist = Watchlist.find(params[:watchlist_id])
        coin = Coin.find(params[:coin_id])
        watchlistCoin = WatchlistCoin.create(
            watchlist: watchlist,
            coin: coin
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