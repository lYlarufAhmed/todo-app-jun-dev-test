import {User, TodoItem, LoadUserRequest, LoadUserSuccess, LoadUserError, UpdateTask, AddTask} from "./types";

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

export const updateTask = (id: number, field: string, value: string): UpdateTask => ({
    type: 'updateTask',
    payload: {id, field, value}
})

export const addTask = (item: TodoItem): AddTask => ({
    type: 'addTask',
    payload: {item}
})
