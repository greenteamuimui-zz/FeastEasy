export const createReservation = (reservation) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/reservations',
      data: reservation
    })
  );
};

export const fetchReservations = (kitchenId, date) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reservations/?kitchenId=${kitchenId}&date=${date}`,
    })
  );
};
