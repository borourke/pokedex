class TemplateComponent
  attr_reader :as_json, :params

  def initialize(route:, template_id: nil)
    @params = { template_id: template_id }
    @as_json = send(route, params)
  end

  def index(params)
    {
      templates: collect_templates
    }
  end

  def show(params)
    template = Template.find(params[:template_id])
    {
      template: tempalte_as_json(template: template),
      reviews: collect_reviews(template: template),
      tags: collect_tags(template: template)
    }
  end

  private

  def tempalte_as_json(template:)
    {
      template_id: template.id,
      author: template.author,
      rating: template.rating,
      title: template.title,
      downloads: rand(1000),
      image_url: "http://24.media.tumblr.com/tumblr_m31lobA6Lp1r3is9so1_500.jpg",
      summary: template.summary
    }
  end

  def collect_templates
    Template.all.each_with_object([]) do |template, results_array|
      results_array << tempalte_as_json(template: template)
    end
  end

  def collect_reviews(template:)
    template.reviews.each_with_object([]) do |review, results_array|
      results_array << {
        review: review.review,
        reviewer: review.reviewer,
      }
    end
  end

  def collect_tags(template:)
    template.tags.each_with_object([]) do |tag, results_array|
      results_array << {
        tag: tag.tag
      }
    end
  end
end
