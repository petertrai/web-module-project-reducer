export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MPLUS_BUTTON = "MPLUS_BUTTON"
export const MZERO_BUTTON = "MZERO_BUTTON"
// export const mAppliedButton

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const mZeroButton = () => {
    return({type:MZERO_BUTTON})
}
export const mPlusButton = () => {
    return({type:MPLUS_BUTTON})
}