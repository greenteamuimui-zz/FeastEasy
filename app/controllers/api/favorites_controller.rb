class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def index
    @favorite = Favorite.find_by(kitchen_id: params[:kitchenId], user_id: params[:userId])
    if @favorite == nil
      render json:{}
    else
      render :index
    end
  end


  def destroy
    @favorite = Favorite.find_by(kitchen_id: params[:kitchenId], user_id: params[:userId])
    @favorite.destroy
  end

  private

  def favorite_params
    params.require(:favorite).permit(:kitchen_id, :user_id)
  end
end
