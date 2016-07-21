class AddImageUrlToTemplates < ActiveRecord::Migration
  def change
    add_column :templates, :image_url, :text
  end
end
