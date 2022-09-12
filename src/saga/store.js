import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { todoWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const initialState = {
    titles: {
        first: "first",
        second: "second"
    },
    data: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_TODOS":
            // console.log(state.data.title);
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(todoWatcher);

export default store;