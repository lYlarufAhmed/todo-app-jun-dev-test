import {ThunkAction} from 'redux-thunk';
import {ApplicationState, ApplicationAction, TodoItemStatus} from './types';
import {loadUserRequest, loadUserSuccess, loadUserError, updateTask, addTask, deleteTask} from './actions';
import * as userService from '../services/userService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadUser = (): Effect => (dispatch) => {
    dispatch(loadUserRequest());
    return userService.loadUser()
        .then(user => dispatch(loadUserSuccess(user)))
        .catch(() => dispatch(loadUserError("Network Failure.")));
};

export const updateItem = (id: number, field: string, value: string): Effect => dispatch => {
    dispatch(updateTask(id, field, value))
}

export const addItem = (title: string, description: string, status: TodoItemStatus): Effect => (dispatch, getState) => {
    const prevState = getState()
    const lastId = prevState.tasks.slice(-1)[0].id
    dispatch(addTask({title, status, description, id: lastId + 1}))
}

export const deleteItem = (id: number): Effect => dispatch => dispatch(deleteTask(id))