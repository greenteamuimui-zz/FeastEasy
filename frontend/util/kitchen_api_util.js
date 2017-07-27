export const fetchKitchens = (search) => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/kitchens',
      data: {search}
    })
  );
};

export const fetchKitchen = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/kitchens/${id}`,
    })
  );
};

export const fetchFavoriteKitchens = (ids) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/kitchens`,
      data: ids
    })
  );
};

export const createKitchen = (kitchen) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/kitchens/`,
      data: {kitchen}
    })
  );
};
