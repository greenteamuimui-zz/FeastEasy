import { values } from 'lodash';

// export const selectReview = ({ reviewBox }, itemId) => {
//   const foundReview = reviewDetail.items.find(item => item.id === itemId);
//   return foundItem || {};
// }

// export const selectAllReviews = ({ review }) => values(review.entities);

export const selectAllReviews = ({review}) => {
  if (review === null) {
    return null;
  } else {
    return values(review);
  }
};

export const selectSingleKitchen = ({kitchen}, kitchenId) => {
  if (kitchen === null) {
    return null;
  } else {
    return kitchen[kitchenId];
  }
};

export const selectAllCities = ({city}) => {
  if (city === null) {
    return null;
  } else {
    return values(city);
  }
};
