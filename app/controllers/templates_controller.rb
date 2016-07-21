class TemplatesController <  ApplicationController
  def home
  end

  def index
    return TemplateComponent.new(route: :index).as_json
  end
end
