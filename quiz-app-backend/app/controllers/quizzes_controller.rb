class QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show, :update, :destroy]
  before_action :authenticate_user

  # GET /quizzes
  def index
    @quizzes = Quiz.all

    render json: @quizzes
  end

  # GET /quizzes/1
  def show
    render json: @quiz
  end

  # POST /quizzes
  def create
    @quiz = Quiz.new()
    q_ids = []

    categories = Question.distinct.pluck(:category)
    for category in categories do
      q_ids << Question.all.select { |m| m.category == category}.sample.id
    end

    @quiz.question_ids = q_ids
    @quiz.user = current_user

    if @quiz.save
      render json: @quiz, status: :created, serializer: QuizSerializer
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /quizzes/1
  def update
    params_hash = {:score => params["score"].to_i}
    if @quiz.update(params_hash)
      render json: @quiz, serializer: QuizSerializer
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  # DELETE /quizzes/1
  def destroy
    @quiz.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_quiz
      @quiz = Quiz.find(params[:id])
    end

end
