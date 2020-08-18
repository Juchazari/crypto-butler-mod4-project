class CreateWatchlistCoins < ActiveRecord::Migration[6.0]
  def change
    create_table :watchlist_coins do |t|
      t.references :watchlist, null: false, foreign_key: true
      t.references :coin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
