import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isManualSignInThisTime: false,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isManualSignInThisTime: false,
                error: action.payload
            };
        case UserActionTypes.SET_MANUAL_SIGN_IN_THIS_TIME:
            return {
                ...state,
                isManualSignInThisTime: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;