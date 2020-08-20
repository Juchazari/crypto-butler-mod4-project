user = User.create(first_name: "John", last_name: "Doe", username: "Joedirt", password: "password")

portfolio = Portfolio.create(name: "Alt-Coins", user: user)

# coin = Coin.create(name: "Bitcoin", symbol: "BTC", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png")
# coin2 = Coin.create(name: "Litecoin", symbol: "LTC", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png")
# coin3 = Coin.create(name: "Ethereum", symbol: "ETH", url_logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png")

# transaction = Transaction.create(portfolio: portfolio, coin: coin, bought_price: 1000.25, quantity: 5)
# transaction2 = Transaction.create(portfolio: portfolio, coin: coin2, bought_price: 25.00, quantity: 10)
# transaction3 = Transaction.create(portfolio: portfolio, coin: coin3, bought_price: 100.35, quantity: 15)




cmc_coins = [{"name": "Bitcoin", "symbol": "BTC", "rank": 1, "slug": "bitcoin", "tokens": ["Bitcoin", "bitcoin", "BTC"], "id": 1}, {"name": "Ethereum", "symbol": "ETH", "rank": 2, "slug": "ethereum", "tokens": ["Ethereum", "ethereum", "ETH"], "id": 1027}, {"name": "XRP", "symbol": "XRP", "rank": 3, "slug": "xrp", "tokens": ["XRP", "xrp", "XRP"], "id": 52}, {"name": "Tether", "symbol": "USDT", "rank": 4, "slug": "tether", "tokens": ["Tether", "tether", "USDT"], "id": 825}, {"name": "Chainlink", "symbol": "LINK", "rank": 5, "slug": "chainlink", "tokens": ["Chainlink", "chainlink", "LINK"], "id": 1975}, {"name": "Bitcoin Cash", "symbol": "BCH", "rank": 6, "slug": "bitcoin-cash", "tokens": ["Bitcoin Cash", "bitcoin-cash", "BCH"], "id": 1831}, {"name": "Litecoin", "symbol": "LTC", "rank": 7, "slug": "litecoin", "tokens": ["Litecoin", "litecoin", "LTC"], "id": 2}, {"name": "Bitcoin SV", "symbol": "BSV", "rank": 8, "slug": "bitcoin-sv", "tokens": ["Bitcoin SV", "bitcoin-sv", "BSV"], "id": 3602}, {"name": "Cardano", "symbol": "ADA", "rank": 9, "slug": "cardano", "tokens": ["Cardano", "cardano", "ADA"], "id": 2010}, {"name": "Binance Coin", "symbol": "BNB", "rank": 10, "slug": "binance-coin", "tokens": ["Binance Coin", "binance-coin", "BNB"], "id": 1839}, {"name": "EOS", "symbol": "EOS", "rank": 11, "slug": "eos", "tokens": ["EOS", "eos", "EOS"], "id": 1765}, {"name": "Crypto.com Coin", "symbol": "CRO", "rank": 12, "slug": "crypto-com-coin", "tokens": ["Crypto.com Coin", "crypto-com-coin", "CRO"], "id": 3635}, {"name": "Tezos", "symbol": "XTZ", "rank": 13, "slug": "tezos", "tokens": ["Tezos", "tezos", "XTZ"], "id": 2011}, {"name": "Stellar", "symbol": "XLM", "rank": 14, "slug": "stellar", "tokens": ["Stellar", "stellar", "XLM"], "id": 512}, {"name": "TRON", "symbol": "TRX", "rank": 15, "slug": "tron", "tokens": ["TRON", "tron", "TRX"], "id": 1958}, {"name": "Monero", "symbol": "XMR", "rank": 16, "slug": "monero", "tokens": ["Monero", "monero", "XMR"], "id": 328}, {"name": "Advanced Internet Blocks", "symbol": "AIB", "rank": 17, "slug": "advanced-internet-blocks", "tokens": ["Advanced Internet Blocks", "advanced-internet-blocks", "AIB"], "id": 911}, {"name": "USD Coin", "symbol": "USDC", "rank": 18, "slug": "usd-coin", "tokens": ["USD Coin", "usd-coin", "USDC"], "id": 3408}, {"name": "UNUS SED LEO", "symbol": "LEO", "rank": 19, "slug": "unus-sed-leo", "tokens": ["UNUS SED LEO", "unus-sed-leo", "LEO"], "id": 3957}, {"name": "Neo", "symbol": "NEO", "rank": 20, "slug": "neo", "tokens": ["Neo", "neo", "NEO"], "id": 1376}]
base_url_logo = "https://s2.coinmarketcap.com/static/img/coins/64x64"

cmc_coins.each do |coin|
    Coin.create(
        name: coin[:name],
        symbol: coin[:symbol],
        url_logo: "#{base_url_logo}/#{coin[:id]}.png"
    )
end