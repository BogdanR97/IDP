class Api::UsersController < ApplicationController
  before_action :is_admin
  before_action :authenticate_user
  before_action :set_user, only: [:show, :update, :destroy]
  
  include Prometheus::Controller

  # GET /users
  def index
    @users = User.all.select { |user| user.admin == false }

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    GAUGE_USER
      .set(1, labels: {users: @user.username})

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    def is_admin
      render status: :unauthorized unless current_user.admin
    end

    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      {username: params[:username], email: params[:email], password: params[:password], admin: false }
    end
end
