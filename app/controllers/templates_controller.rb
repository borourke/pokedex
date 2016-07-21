class TemplatesController <  ApplicationController
  def home
  end

  def index
    render json: TemplateComponent.new(route: :index).as_json
  end

  def show
    render json: TemplateComponent.new(route: :show, template_id: params[:id]).as_json
  end
end