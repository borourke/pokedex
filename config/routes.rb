Rails.application.routes.draw do
  root 'templates#home'

  get '/templates', to: 'templates#home', as: :templates
  get '/templates/index', to: 'templates#index'
end
