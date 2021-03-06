/**
 * Root Reducer
 */
import produce from 'immer';
import {ApplicationState, ApplicationAction} from './types';

const user = {
    name: '',
    birth_year: ''
}
export const initialState: ApplicationState = {
    loading: {
        user: false,
    },
    user: user,
    tasks: [
        {
            id: 43343,
            title: 'Urgent for university',
            description: 'Parasite research',
            status: "to-do"
        }, {
            id: 434343,
            title: 'Attend Lab',
            description: 'Goto lab',
            status: "done"
        }, {
            id: 12323,
            title: 'Grocery shop',
            description: 'Buy tissues',
            status: "in-progress"
        },
    ],
    error: {
        user: ''
    }
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "loadUserRequest":
            return produce(state, draft => {
                draft.loading.user = true;
            });
        case "loadUserSuccess":
            return produce(state, draft => {
                draft.loading.user = false;
                draft.user = action.payload.user;
            });
        case "loadUserError":
            return produce(state, draft => {
                draft.loading.user = false;
                draft.error.user = action.payload.message
            });
        case "updateTask":
            return produce(state, draft => {
                draft.tasks = draft.tasks.map(task => task.id === action.payload.id ? {
                    ...task,
                    [action.payload.field]: action.payload.value
                } : task)
            })
        case "deleteTask":
            return produce(state, draft => {
                draft.tasks = draft.tasks.filter(task => task.id !== action.payload.id)
            })
        case "addTask":
            return produce(state, draft=>{
                draft.tasks.push(action.payload.item)
            })
        default:
            return initialState
    }
}

export default reducer;