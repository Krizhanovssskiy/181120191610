import './style.scss';

import React from 'react';
import ItemService from './ItemService'

const TableService = ({service}) => {

  const totalService = (ArrayOfObject) => {
    let sum = 0;
    for (let i = 0; i < ArrayOfObject.length; i++) {
      sum += ArrayOfObject[i].ofServices
    }
    return sum;
  }

  return (
    <ul className='Service'>
      <li className='Service-header'>
        <div className='Service-boxTotal'>
          <p className="Service-nameTotalText">Услуг</p>
        </div>
      </li>
      {
        service.map(item => (
          <ItemService
            key={item.id}
            item={item}
          />
          ))
      }
      <li className='Service-footer'>
        <p className='App__big-text'>Всего:</p>
        <div className='Service-boxTotal'>
          <p className='App__big-text'>
            {
              totalService(service)
            }
          </p>
        </div>
      </li>
    </ul>
  )
};

export default TableService;