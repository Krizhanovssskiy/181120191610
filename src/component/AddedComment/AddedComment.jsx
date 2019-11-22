import './style.scss';

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { onAddedReview } from '../../_actions';
import { month } from '../../_helpers';

const AddedComment = ({ onAddedReview }) => {

  const [ comment, setComment ] = useState('');
  const onChangeTextarea = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const onSubmit = () => {
    const date = new Date();

    const day = date.getDate();
    const monthNum = date.getMonth();
    const year = date.getFullYear();
    if (comment !== '') {
      onAddedReview({
        date: `${day} ${month[ monthNum ]} ${year}`,
        userName: 'Аноним',
        review: comment
      });
    }
    setComment('');
  };

  return (
    <div className="AddedComment">
        <textarea
          value={comment}
          onChange={onChangeTextarea}
          className='App__middle-text'
        />
      <button
        onClick={onSubmit}
        className='App__big-text'
      >
        Написать консультанту
      </button>
    </div>
  )
}

export default connect(
  null,
  {
    onAddedReview
  }
)(AddedComment);
