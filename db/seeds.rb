require 'csv'

csv_location = "/Users/borourke/Desktop/pokedex_seeds.csv"
possible_authors = %w(borourke@crowdflower.com bbeck10@crowdflower.com sydney@crowdflower.com romeo@crowdflower.com blake@crowdflower.com kirsten@crowdflower.com brian@crowdflower.com)
CSV.foreach(csv_location, headers: true) do |row|
  template = Template.create(job_id: row["SandboxJobID"], title: row["Title"], author: possible_authors[rand(possible_authors.length)], summary: row["Summary"], description: row["Description"], rating: row["Rating"].to_i, image_url: row["Image"])
  if row["Reviews"].nil?
    row["Reviews"].split("\n").each do |review|
      Review.create(template_id: template.id, review: review, reviewer: possible_authors[rand(possible_authors.length)], rating: rand(5))
    end
  end
  Tag.create(template_id: template.id, tag: row["tag"])
end


