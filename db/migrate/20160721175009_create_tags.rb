class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :template_id
      t.string :tag

      t.timestamps
    end
  end
end
