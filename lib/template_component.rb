class TemplateComponent
  attr_reader :as_json

  def initialize(route:)
    @as_json = send(route)
  end

  def index
    {
      templates: collect_templates
    }
  end

  private

  def collect_templates
    Template.all.each_with_object([]) do |template, results_array|
      results_array << {
        template_id: template.id,
        author: template.author,
        rating: template.rating,
        title: template.title,
        downloads: rand(1000),
        image_url: "https://2.bp.blogspot.com/-Gh9Drj62EFw/VeXMk3xcsOI/AAAAAAAAAxw/knYsAcpaABo/s1600/OGB-INSIDER-BLOGS-GoogleLogox2-Animated.gif",
        summary: template.summary
      }
    end
  end
end