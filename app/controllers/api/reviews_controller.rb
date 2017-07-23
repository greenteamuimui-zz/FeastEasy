class Api::ReviewsController < ApplicationController
  def create
    @review = User.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.where(kitchen_id: params[:kitchenId])
  end

  private
  def reviews_params
    params.require(:review).permit(:kitchen_id, :user_id, :title, :body, :food_score ,:atmosphere_score, :host_score, :price_score)
  end

end
