
import axios from "axios"
import { addWishlistDataSuccess, getwWishListDataError, getwWishListDataLoading, getwWishListDataSuccess, removeWishlistDataSuccess } from "./actions"
//API call for getting all the products with sort and Filter Query

let mainURL = "https://ecommsitedb.onrender.com/"

export const getProductsData = async (page, sortvalue, categoryValue, filterQuery, ratingQuery) => {
    let url = `${mainURL}products?_page=${page}&_limit=9`

    if (sortvalue) {
        if (sortvalue === "discount" && categoryValue !== "") {
            return axios.get(url + `&_sort=${sortvalue}&category=${categoryValue}`)
        }

        if (sortvalue === "discount") {
            return axios.get(url + `&_sort=${sortvalue}`)
        }

        if (sortvalue && categoryValue !== "") {
            return axios.get(url + `&_sort=price&_order=${sortvalue}&category=${categoryValue}`)
        }
        return axios.get(url + `&_sort=price&_order=${sortvalue}`)

    }
    if (categoryValue !== "") {
        return axios.get(url + `&category=${categoryValue}`)
    }
    if (filterQuery !== "") {
        return axios.get(url + `&${filterQuery}`)
    }
    if (ratingQuery !== "") {
        return axios.get(url + `&${ratingQuery}`)
    }


    return axios.get(url)
}


//Getting Single product from the cart
export const getSingleProductData = (id) => {
    let url = `${mainURL}products`
    return axios.get(url + `/${id}`)
}

//Adding Product to the Cart
export const addProductToTheCart = (cartItems, selectedSize) => {

    return axios.post(`${mainURL}cart`, {
        ...cartItems,
        selectedSize: selectedSize
    });
}

//Updating Data in Cart
export const updateProductToTheCart = (cartItems, selectedSize) => {
    return axios.put(`${mainURL}cart/${cartItems.id}`, {
        ...cartItems,
        selectedSize: selectedSize,
    });
}




//Getting product from the cart
export const getProductsFromtheCart = () => {
    let url = `${mainURL}cart`
    return axios.get(url)
}

export const deletProductFromtheCart = (id) => {
    let url = `${mainURL}cart`
    return axios.delete(url + `/${id}`)
}


export const getWishlistData = () => (dispatch) => {
    let url = `${mainURL}wishlist`
    dispatch(getwWishListDataLoading());
    axios.get(url)
        .then((resData) => {
            dispatch(getwWishListDataSuccess(resData.data))
        })
        .catch(() => {
            dispatch(getwWishListDataError)
        })
}

export const addToWishList = (item) => (dispatch) => {

    let url = `${mainURL}wishlist`;
    dispatch(getwWishListDataLoading());
    axios
        .post(url, item)
        .then((res) => {
            dispatch(addWishlistDataSuccess(res.data))
        })
        .catch(() => {
            dispatch(getwWishListDataError)
        })
}

export const removeFromWishlist = (id) => (dispatch) => {

    let url = `${mainURL}wishlist`;
    dispatch(getwWishListDataLoading());
    axios
        .delete(url + `/${id}`)
        .then((res) => {
            dispatch(removeWishlistDataSuccess(id))
        })
        .catch(() => {
            dispatch(getwWishListDataError)
        })
}