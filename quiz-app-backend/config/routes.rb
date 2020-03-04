Rails.application.routes.draw do
  resources :questions
  # resources :users
  resources :quizzes

  namespace :api do
    resources :users
    post 'user_token' => 'user_token#create'
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
