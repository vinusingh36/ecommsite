import { SET_USER_ADDRESS } from "../actionTypes";

let initData = {
    addressData: [],
    cardData: []
}

const paymentReducer = (state = initData, action) => {

    switch (action.type) {
        case SET_USER_ADDRESS: return { ...state, addressData: [action.payload] }
        default: {
            return state;
        }
    }

}

export default paymentReducer;