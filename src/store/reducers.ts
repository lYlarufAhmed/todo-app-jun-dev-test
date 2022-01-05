/**
 * Root Reducer
 */
import produce from 'immer';
import {ApplicationState, ApplicationAction} from './types';

const user = {
    name: 'maruf',
    birth_year: '1889'
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
    }
}

export default reducer;