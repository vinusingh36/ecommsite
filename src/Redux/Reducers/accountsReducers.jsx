import { SET_SIGNUP_USERDATA, SET_USER_LOGIN_SUCCESS, SET_USER_LOGOUT_SUCCESS } from "../actionTypes";

let initData = {
    currUser: [],
    isLogin: false
}

const accountsReducer = (state = initData, action) => {

    switch (action.type) {
        case SET_USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true
            }
        case SET_USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
            }

        case SET_SIGNUP_USERDATA:
            return {
                ...state,
                isLogin: false,
                currUser: action.payload
            }
        default: {
            return state;
        }
    }
}

export default accountsReducer;