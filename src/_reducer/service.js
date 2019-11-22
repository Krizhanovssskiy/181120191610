import { GET_ALL_SERVICES } from '../_actionType'

const InitialState = [
  {
    nameService: 'Ручное бронирование',
    ofServices: 11,
    id: 1
  },
  {
    nameService: 'Пакетные туры',
    ofServices: 3,
    id: 2
  },
  {
    nameService: 'Отели',
    ofServices: 1,
    id: 3
  },
];

export default (state = InitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_ALL_SERVICES:
      return state;
    default:
      return state;
  }
}