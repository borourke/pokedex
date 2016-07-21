class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :template_id
      t.text :review
      t.integer :rating
      t.text :reviewer
    end
  end
end
