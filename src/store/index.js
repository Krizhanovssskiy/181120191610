import { createStore } from 'redux';
import reducer from '../_reducer';

export const store = createStore(reducer)