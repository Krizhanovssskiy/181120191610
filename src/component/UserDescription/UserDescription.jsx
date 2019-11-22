import './style.scss';

import React from 'react';

const UserDescription = () => (
  <div className='UserDescription'>
    <p className='App__big-text'>
      Вероника Ростова
    </p>
    <p className='UserDescription__profession'>
      Менеджер по продажам
    </p>

    <div className='UserDescription__description'>
      <p className='App__middle-text'>
        Подберу для вас самые лучшие предложения.
        Мои услуги абсолютно бесплатны
      </p>
    </div>
  </div>
);

export default UserDescription;