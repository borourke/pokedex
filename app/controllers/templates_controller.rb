class TemplatesController <  ApplicationController
  def home
  end

  def index
    render json: TemplateComponent.new(route: :index).as_json
  end

  def show
    render json: TemplateComponent.new(route: :show, template_id: params[:id]).as_json
  end

  def create
    render json: { new_template_id: Template.create(template_params).id }, status: 203
  end

  private

  def template_params
    params.require(:template).permit(:job_id, :summary, :description, :author, :title, :image_url)
  end
end
