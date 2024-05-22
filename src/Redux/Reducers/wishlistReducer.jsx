import { ADD_WISHLIST_DATA_SUCCESS, GET_WISHLIST_DATA_ERROR, GET_WISHLIST_DATA_LOADING, GET_WISHLIST_DATA_SUCCESS, REMOVE_WISHLIST_DATA_SUCCESS } from "../actionTypes";

let initData = {
    isLoading: false,
    isError: false,
    wishedProducts: []
}

const wishlistReducer = (state = initData, action) => {
    switch (action.type) {
        case GET_WISHLIST_DATA_LOADING: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_WISHLIST_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isError: false,
                wishedProducts: action.payload
            }
        }
        case GET_WISHLIST_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        case ADD_WISHLIST_DATA_SUCCESS: {
            return {
                ...state,
                wishedProducts: [...state.wishedProducts, action.payload]
            }
        }
        case REMOVE_WISHLIST_DATA_SUCCESS: {
            return {
                ...state,
                wishedProducts: state.wishedProducts.filter((product) => product.id !== action.payload),
                isLoading: false,
                isError: false
            }
        }

        default: {
            return state;
        }
    }
}

export default wishlistReducer;