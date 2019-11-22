import { ADDED_REVIEW } from '../_actionType';


export const onAddedReview = ({ date, userName, review }) => (
  {
    type: ADDED_REVIEW,
    payload: {
      id: Date.now(),
      date,
      userName,
      review,
    }
  }
);