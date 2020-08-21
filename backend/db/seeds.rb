require 'rest-client'

user = User.create(first_name: "John", last_name: "Doe", username: "Joedirt", password: "password")

portfolio = Portfolio.create(name: "Alt-Coins", user: user)
portfolio1 = Portfolio.create(name: "Lambo Szn", user: user)
portfolio2 = Portfolio.create(name: "Money Makers", user: user)

base_url_logo = "https://www.cryptocompare.com/media"; # /19633/btc.png?width=64
count = 0
19.times do
    data = RestClient.get "https://min-api.cryptocompare.com/data/top/totalvolfull?tsym=USD&page=#{count}"
    data_object = JSON.parse(data)["Data"]

    data_object.each do |obj|
        Coin.create(
            name: obj["CoinInfo"]["FullName"],
            symbol: obj["CoinInfo"]["Name"],
            url_logo: "#{base_url_logo}/#{obj["CoinInfo"]["ImageUrl"]}?width=64"
        )
    end

    count += 1
end