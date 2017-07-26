class Api::ReservationsController < ApplicationController

  def create
    if params[:reservation][:date] == ""
      render json: ["Please Select A Date"], status: 422
      return
    end
    if Date.parse(params[:reservation][:date]) < DateTime.now.to_date
      render json: ["We can't go back in time yet..."], status: 422
      return
    end
    kitchen = Kitchen.includes(:reservations).find_by(id: params[:reservation][:kitchen_id])
    total_seats = 0
    kitchen.reservations.each do |reservation|
      if reservation.date == Date.parse(params[:reservation][:date])
        total_seats += reservation.seats
      end
    end
    if total_seats + params[:reservation][:seats].to_i <= kitchen.size
      @reservation = Reservation.new(reservation_params)
      if @reservation.save
        render :show
      else
        render json: @reservation.errors.full_messages, status: 422
      end
    else
      render json: {}
    end
  end

  def index
    # debugger
    kitchens = Kitchen.find(params[:kitchenId])
    @reservations = kitchens.reservations.where(date: Date.parse(params[:date]))
  end

  private

  def reservation_params
    params.require(:reservation).permit(:kitchen_id, :user_id, :seats, :date)
  end

end
