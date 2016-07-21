class TemplatesController <  ApplicationController
  def home
  end

  def index
    return json: TemplateComponent.new(route: :index).as_json
  end
end