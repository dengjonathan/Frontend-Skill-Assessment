import {createStore} from 'redux';

import rootReducer from '../reducers/rootReducer'

const store = createStore(rootReducer,);

export const getState = () => store.getState();

export const dispatch = action => store.dispatch(action);

export default store;