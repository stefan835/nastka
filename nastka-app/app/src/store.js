import {createStore, combineReducers} from 'redux'

import equationAnswer from './state/equationAnswer'

const reducer = combineReducers({
  equationAnswer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store