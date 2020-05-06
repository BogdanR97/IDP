class QuestionsController < ApplicationController
  before_action :is_admin
  before_action :authenticate_user
  before_action :set_question, only: [:show, :update, :destroy]
  

  # GET /questions
  def index
    @questions = Question.all

    render json: @questions
    
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    @question = Question.new(question_params)

    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    def is_admin
      render status: :unauthorized unless current_user.admin
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      {q_text: params[:q_text], correct_ans: params[:correct_ans], wrong_ans_1: params[:wrong_ans_1],
      wrong_ans_2: params[:wrong_ans_2], category: params[:category]}
    end
end
