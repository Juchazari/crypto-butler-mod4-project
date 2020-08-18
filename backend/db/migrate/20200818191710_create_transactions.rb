class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.references :coin, null: false, foreign_key: true
      t.float :bought_price
      t.float :quantity

      t.timestamps
    end
  end
end
