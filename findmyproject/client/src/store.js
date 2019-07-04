import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { compose } from 'redux';

const store = createStore(
	rootReducer,
	compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)	

export default store;