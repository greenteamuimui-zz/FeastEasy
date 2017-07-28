class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def show
    date = Date.today.to_s
    @user = User.includes(:reservations).find(params[:id])
    # debugger
    # if @user.reservations.where('date > ?', date).empty?
    #   @user.concat[future: ""]
    # else
    #   @user.reservations.concat[future: @user.reservations.where('date > ?', date)]
    # end
  end

  def index
    @users = User.all
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url)
  end

end
