class AddEnabledToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :enabled, :boolean, null: false, default: true
  end
end
