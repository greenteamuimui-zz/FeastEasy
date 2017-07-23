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
