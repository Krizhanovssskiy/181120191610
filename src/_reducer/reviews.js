import { ADDED_REVIEW } from '../_actionType';

const InitialState = [
  {
    id: 1,
    date: '14 сентября 2019',
    review: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! ',
    userName: 'Антон'
  }
];

export default (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case ADDED_REVIEW:
      return [ payload, ...state ];

    default:
      return state;
  }
}