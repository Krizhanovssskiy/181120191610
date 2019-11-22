import './style.scss';

import React from 'react';
import { connect } from 'react-redux';
import ReviewItem from "../ReviewItem";

const ListReviews = ({ showAllReview, reviews }) => {

  return (
    <ul>
      {
        reviews.map((item, idx) => {
          if(!showAllReview && idx > 2 ) {
            return null
          };
          return (
          <ReviewItem
            key={item.id}
            item={item}
          />
        )})
      }
    </ul>
  )
};

const mapStateToProps = ({reviews}) => ({
  reviews: reviews
});

export default connect(
  mapStateToProps
)(ListReviews);