import { getProductsErrorAction, getProductsLoadingAction, getProductsSuccessAction } from "./actions";
import { getProductsData } from "./api";

export const renderProductsData = (dispatch, page, sortvalue, categoryValue, filterQuery, ratingQuery) => {
    dispatch(getProductsLoadingAction())

    getProductsData(page, sortvalue, categoryValue, filterQuery, ratingQuery).then((products) => {
        dispatch(getProductsSuccessAction(products.data))
    }).catch((error) => {
        dispatch(getProductsErrorAction())
    })

}