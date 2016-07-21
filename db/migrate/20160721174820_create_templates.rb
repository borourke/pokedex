class CreateTemplates < ActiveRecord::Migration
  def change
    create_table :templates do |t|
      t.integer :job_id
      t.text :title
      t.text :summary
      t.text :description
      t.text :author
      t.integer :rating

      t.timestamps
    end
  end
end
