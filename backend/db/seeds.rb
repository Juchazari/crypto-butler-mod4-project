user = User.create(first_name: "John", last_name: "Doe", username: "Joedirt", password: "password")

portfolio = Portfolio.create(name: "Alt-Coins", user: user)

# coin = Coin.create(name: "Bitcoin", symbol: "BTC", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png")
# coin2 = Coin.create(name: "Litecoin", symbol: "LTC", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png")
# coin3 = Coin.create(name: "Ethereum", symbol: "ETH", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png")

# transaction = Transaction.create(portfolio: portfolio, coin: coin, bought_price: 1000.25, quantity: 5)
# transaction2 = Transaction.create(portfolio: portfolio, coin: coin2, bought_price: 25.00, quantity: 10)
# transaction3 = Transaction.create(portfolio: portfolio, coin: coin3, bought_price: 100.35, quantity: 15)




cmc_coins = HTTParty.get('https://s2.coinmarketcap.com/generated/search/quick_search.json')
base_url_logo = "https://s2.coinmarketcap.com/static/img/coins/64x64"

cmc_coins.each do |coin|
    Coin.create(
        name: coin[:name],
        symbol: coin[:symbol],
        url_logo: "#{base_url_logo}/#{coin[:id]}.png"
    )
end