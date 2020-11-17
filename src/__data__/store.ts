import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    counterReducer
} from './reducers';

const redusers = combineReducers({
    counter: counterReducer
});

export default createStore(redusers, composeWithDevTools(
    applyMiddleware(ReduxThunk)
));