Rails.application.routes.draw do
  root 'templates#home'

  get '/templates', to: 'templates#home', as: :templates
  get '/templates/index', to: 'templates#index'
  get '/templates/show/:id', to: 'templates#show'
  post '/templates', to: 'templates#create'
end
