import { call, put, takeLatest } from 'redux-saga/effects';

const myAction = (data) => {
    return {
        type: "FETCH_TODOS",
        payload: data
    }
};

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
};

export function* todoWorker() {
    const data = yield call(fetchTodos);
    yield put(myAction(data));
}

export function* todoWatcher() {
    yield takeLatest("INVOKE_DATA", todoWorker);
}