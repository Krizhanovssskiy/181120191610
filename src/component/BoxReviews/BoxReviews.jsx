import './style.scss';
import sprite from '../../images/sprite.svg'

import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddedComment from '../AddedComment';
import ListReviews from '../ListReviews';

const BoxReviews = ({ reviews }) => {

  const [ showAllReview, setShowAllReview ] = useState(false);

  const onShowReview = () => {
    setShowAllReview(!showAllReview);
  };

  return (
    <div className='ReviewsBox'>
      <div className='ReviewsBox__header'>
        <div className='ReviewsBox__header-boxText'>
          <p className='App__big-text'>Последние отзывы</p>
          <span
            className='App__middle-text'
            onClick={onShowReview}
          >
            Все отзывы
          </span>
        </div>

        <div className="ReviewsBox__counter">
          <div className="ReviewsBox__counter-likes">
            <svg>
              <use xlinkHref={`${sprite}#icon-heart`} />
            </svg>
            <span >122</span>
          </div>
          <div className="ReviewsBox__counter-rivers">
            <svg>
              <use xlinkHref={`${sprite}#icon-review`} />
            </svg>
            <span>
              {
                reviews.length
              }
            </span>
          </div>
        </div>
      </div>

      <ListReviews showAllReview={showAllReview} />

      <AddedComment />

    </div>
  )
};

const mapStateToProps = ({reviews}) => ({
  reviews
});

export default connect(
  mapStateToProps,
)(BoxReviews);