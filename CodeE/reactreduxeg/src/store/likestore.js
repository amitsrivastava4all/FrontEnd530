import {createStore} from 'redux';
import {LikeReducer} from '../reducers/likereducer';
export const store = createStore(LikeReducer);