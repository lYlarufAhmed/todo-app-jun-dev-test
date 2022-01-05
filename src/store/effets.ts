import {ThunkAction} from 'redux-thunk';
import {ApplicationState, ApplicationAction} from './types';
import {loadUserRequest, loadUserSuccess, loadUserError, updateTask} from './actions';
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