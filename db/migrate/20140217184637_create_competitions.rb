class CreateCompetitions < ActiveRecord::Migration
  def change
    create_table :competitions do |t|
      t.string :prize
      t.date :Date
	  t.string :image_url

      t.timestamps
    end
  end
end
