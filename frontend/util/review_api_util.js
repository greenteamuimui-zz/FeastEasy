export const createReview = (review) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: {review}
    })
  );
};

export const fetchReviews = (kitchenId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reviews/?kitchenId=${kitchenId}`,
    })
  );
};
