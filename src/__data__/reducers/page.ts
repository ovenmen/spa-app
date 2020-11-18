import { CHANGE_CURRENT_PAGE } from '../actionsTypes';

type Action = {
    type: string,
    payload: {
        currentPage: string
    }
}

const initialState = {
    currentPage: 'Главная'
};

export const pageReducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case CHANGE_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.payload
        };
    default:
        return state;
    }
};