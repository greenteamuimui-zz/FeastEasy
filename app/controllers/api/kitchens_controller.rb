class Api::KitchensController < ApplicationController

  def create
    @kitchen = Kitchen.new(kitchen_params)
    if @kitchen.save
      render :show
    else
      render json: @kitchen.errors.full_messages, status: 422
    end
  end

  def index
    @kitchen = Kitchen.all
  end

  def show
    @kitch = Kitche.find(params[:id])
  end

  private

  def kitchen_params
    params.require(:search).permit(:name, :cuisine, :size, :feast_time, :address, :phone, :abovut)
  end

end
