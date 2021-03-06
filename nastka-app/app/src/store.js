import {createStore, combineReducers} from 'redux'

import equationAnswer from './state/equationAnswer'
import task from './state/mathTask'

const reducer = combineReducers({
  equationAnswer,
  task
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store