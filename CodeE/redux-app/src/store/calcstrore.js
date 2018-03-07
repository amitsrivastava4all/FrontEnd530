import { createStore } from 'redux';
import calcReducer from '../reducers/calcreducer';

const store =createStore(calcReducer);
export default store;