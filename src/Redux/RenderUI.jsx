import { getCartProductsErrorAction, getCartProductsLoadingAction, getCartProductsSuccessAction, getProductsErrorAction, getProductsLoadingAction, getProductsSuccessAction, getSingleProductSuccessAction } from "./actions";
import { getProductsData, getProductsFromtheCart, getSingleProductData } from "./api";

//Product Page Rendering

export const renderProductsData = (dispatch, page, sortvalue, categoryValue, filterQuery, ratingQuery) => {
    dispatch(getProductsLoadingAction())

    getProductsData(page, sortvalue, categoryValue, filterQuery, ratingQuery).then((products) => {
        dispatch(getProductsSuccessAction(products.data))
    }).catch((error) => {
        dispatch(getProductsErrorAction())
    })

}

//Single Product Rendering

export const renderSingleProductData = (dispatch, id) => {
    dispatch(getProductsLoadingAction())

    getSingleProductData(id).then((product) => {
        dispatch(getSingleProductSuccessAction(product.data))
    }).catch((error) => {
        dispatch(getProductsErrorAction())
    })

}

//Cart Data Rendering

export const renderCartProductData = (dispatch) => {
    dispatch(getCartProductsLoadingAction())

    getProductsFromtheCart().then((cartProducts) => {
        dispatch(getCartProductsSuccessAction(cartProducts.data))
    }).catch((error) => {
        dispatch(getCartProductsErrorAction())
    })
}
