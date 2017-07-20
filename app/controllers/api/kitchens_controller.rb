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
    filtered_kitchens = get_kitchens_using_params
    @kitchens = reservation_comparator(filtered_kitchens)
  end

  def show
    @kitchen = Kitchen.find(params[:id])
  end

  def get_kitchens_using_params(params)
    size = params[:search][:size].to_i
    search_string = params[:search][:search_string]
    kitchens = Kitchen.where({city_id: params[:search][:city_id]}).where('size > ?', size)
    if params[:search][search_string] == ""
      filtered_kitchens = kitchens
    else
      filtered_kitchens = kitchens.where('LOWER(name) LIKE ? OR LOWER(cuisine) LIKE ? OR LOWER(about) LIKE ?', "%#{search_string.downcase}%","%#{search_string.downcase}%","%#{search_string.downcase}%")
    end
    filtered_kitchens
  end

  def reservation_comparator(filtered_kitchens)
    date = params[:search][:date]
    result = [];
    filtered_kitchens.each do |kitchen|
      total_seats = 0;
      kitchen.reservations.each do |reservation|
        if date == reservation.date
          total_seats += reservation.seats
        end
      end
      unless size + total_seats > kitchen.size
        result << kitchen
      end
    end
    result
  end
  # test case

  # params = {search:{city_id:1, size:4, search_string:"asian", date:Date.new(2007, 6, 1)}}
  #
  # filtered_kitchens = get_kitchens_using_params(params)
  #
  # reservation_comparator(filtered_kitchens)


  private

  def kitchen_params
    params.require(:kitchen).permit(:name, :cuisine, :size, :feast_time, :address, :phone, :about)
  end

  def search_params
    params.require(:search).permit(:city_id, :size, :date, :search_string)
  end


end
