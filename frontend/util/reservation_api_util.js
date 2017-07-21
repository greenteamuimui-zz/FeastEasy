export const createReservation = (reservation) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/reservations',
      data: reservation
    })
  );
};

export const fetchReservations = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reservations/${id}`,
    })
  );
};
