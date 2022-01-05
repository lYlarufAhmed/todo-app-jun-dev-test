import {
    createStore
    , applyMiddleware
    // , compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {ApplicationState} from "./types";
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore = (initialState: ApplicationState) => {
    // Middleware and store enhancers
    // const enhancers = [applyMiddleware(thunk)];
    //
    // if (process.env.NODE_ENV === 'development') {
    //     // Enable DevTools only when rendering during development
    //     enhancers.push((window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);
    // }
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
