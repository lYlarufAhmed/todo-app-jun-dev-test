import {User, TodoItem, UpdateTaskStatus, LoadUserRequest, LoadUserSuccess, LoadUserError} from "./types";

export const loadUserRequest = (): LoadUserRequest => ({
    type: 'loadUserRequest'
})

export const loadUserSuccess = (user: User): LoadUserSuccess => ({
    type: 'loadUserSuccess',
    payload: {user}
})
export const loadUserError = (message: string): LoadUserError => ({
    type: 'loadUserError',
    payload: {message}
})

export {}