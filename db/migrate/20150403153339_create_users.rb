class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :country
      t.string :state
      t.string :postalCode

      t.timestamps null: false
    end
  end
end
