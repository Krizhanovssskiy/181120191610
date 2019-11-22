import './style.scss';

import React from 'react';

const ReviewItem = ({ item }) => {
  const { date, review, userName } = item;

  return (
    <li className="ReviewItem__review">
      <div className="ReviewItem__review-header">
        <p className='App__middle-text'>
          {userName}
        </p>
        <p className='ReviewItem__review-data'>
          {date}
        </p>
      </div>
      <div className="ReviewItem__review-textBox">
        <span className='ReviewItem__review-arrow'/>
        <p className='App__middle-text'>
          {review}
        </p>
      </div>
    </li>
  )
};

export default ReviewItem;