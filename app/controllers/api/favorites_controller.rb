class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      @favorites = Favorite.where(kitchen_id: favorite_params[:kitchen_id])
      render :index
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def index
  end


  def destroy
    @favorite = Favorite.find_by(kitchen_id: params[:id], user_id: params[:user_id])
    @favorite.destroy
    @favorites = Favorite.where(kitchen_id: params[:id])
    render :index
  end

  private

  def favorite_params
    params.require(:favorite).permit(:kitchen_id, :user_id)
  end
end
