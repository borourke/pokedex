Rails.application.routes.draw do
  root 'templates#home'

  get '/templates', to: 'templates#home', as: :templates
end
