import {Action} from 'redux'

export type TodoItemStatus = 'to-do' | 'in-progress' | 'done'

export interface TodoItem {
    id: number;
    title: string;
    description: string;
    status: TodoItemStatus;
}

export interface TodoStatusOption {
    value: TodoItemStatus,
    label: string
}

export interface User {
    name: string;
    birth_year: string;
}

export interface LoadingState {
    user: boolean;
}

export interface ErrorState {
    user: string
}

export interface ApplicationState {
    loading: LoadingState,
    user: User,
    tasks: TodoItem[],
    error: ErrorState
}

export interface LoadUserRequest extends Action {
    type: 'loadUserRequest'
}

export interface LoadUserSuccess extends Action {
    type: 'loadUserSuccess',
    payload: { user: User }
}

export interface LoadUserError extends Action {
    type: 'loadUserError',
    payload: { message: string }
}


export interface UpdateTask extends Action {
    type: 'updateTask'
    payload: { id: number, field: string, value: string }
}

export interface AddTask extends Action {
    type: 'addTask'
    payload: { item: TodoItem }
}

export interface DeleteTask extends Action {
    type: 'deleteTask'
    payload: { id: number }
}

export type ApplicationAction = DeleteTask | AddTask | LoadUserRequest | LoadUserSuccess | LoadUserError | UpdateTask

