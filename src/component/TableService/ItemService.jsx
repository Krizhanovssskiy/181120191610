import React from 'react';

const ItemService = ({ item: {ofServices, nameService} }) => {

  const colorService = ofServices >= 8 ? 'Service-green' : 'Service-blue';
  return (
    <li className='Service-body'>
      <div className='Service-background'>
                <span
                  className={colorService}
                  style={{right: `${100 - (ofServices * 5)}%`}}
                />
        <p className="Service-nameTotalText">
          {nameService}
        </p>
      </div>
      <div className='Service-boxTotal'>
        <p className="Service-nameTotalText">
          {ofServices}
        </p>
      </div>
    </li>
  )
};

export default ItemService;