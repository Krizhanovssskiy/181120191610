import { combineReducers } from 'redux';

import service from "./service";
import reviews from "./reviews";

export default combineReducers({
  service,
  reviews
})
