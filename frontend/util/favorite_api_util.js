export const createFavorite = (favorite) => {
  console.log(favorite);
  return (
    $.ajax({
      method: 'POST',
      url: '/api/favorites',
      data: {favorite}
    })
  );
};

export const removeFavorite = (kitchenId, userId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/favorites/?kitchenId=${kitchenId}&userId=${userId}`,
    })
  );
};

export const fetchFavorite = (kitchenId, userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/favorites/?kitchenId=${kitchenId}&userId=${userId}`,
    })
  );
};
