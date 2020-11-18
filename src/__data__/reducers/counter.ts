import { INCREMENT, DECREMENT } from '../actionsTypes';

type Action = {
    type: string,
    payload: {
        value: number
    }
}

const initialState = {
    value: 0
};

export const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            value: state.value + 1
        };
    case DECREMENT:
        return {
            ...state,
            value: state.value - 1
        };
    default:
        return state;
    }
};
