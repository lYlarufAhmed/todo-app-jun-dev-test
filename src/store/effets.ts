import {ThunkAction} from 'redux-thunk';
import {ApplicationState, ApplicationAction} from './types';
import {loadUserRequest, loadUserSuccess, loadUserError} from './actions';
import * as userService from '../services/userService';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const loadUsers = (): Effect => (dispatch, getState) => {
    dispatch(loadUserRequest());
    return userService.loadUser()
        .then(user => dispatch(loadUserSuccess(user)))
        .catch(() => dispatch(loadUserError("Network Failure.")));
};