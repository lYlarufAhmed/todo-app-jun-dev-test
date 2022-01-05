import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {default as rootReducer} from './reducers';
import {ApplicationState} from "./types";

const configureStore = (initialState: ApplicationState) => {
    // Middleware and store enhancers
    const enhancers = [applyMiddleware(thunk)];

    if (process.env.NODE_ENV === 'development') {
        // Enable DevTools only when rendering during development
        enhancers.push((window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose);
    }
    // @ts-ignore
    return createStore(rootReducer,
        initialState, compose(...enhancers));
};

export default configureStore;
