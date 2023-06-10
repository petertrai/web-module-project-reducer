import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MPLUS_BUTTON, MZERO_BUTTON } from './../actions';

export const initialState = {
    total: 2,
    operation: "+",
    memory: 90
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case ("+"):
            return num1 + num2;
        case ("*"):
            return num1 * num2;
        case ("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case (ADD_ONE):
            return ({
                ...state,
                total: state.total + 1
            });

        case (APPLY_NUMBER):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            });

        case (CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case (CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            });
        case (MZERO_BUTTON):
            return ({
                ...state,
                memory: 0
            });
        case (MPLUS_BUTTON):
            return ({
                ...state,
                memory: state.total
            })

        default:
            return state;
    }
}

export default reducer;