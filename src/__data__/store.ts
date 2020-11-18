import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { counterReducer } from './reducers/counter';
import { pageReducer } from './reducers/page';

const redusers = combineReducers({
    counter: counterReducer,
    page: pageReducer
});

export default createStore(redusers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
));