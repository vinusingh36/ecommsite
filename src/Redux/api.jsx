
import axios from "axios"
//API call for getting all the products with sort and Filter Query

export const getProductsData = async (page, sortvalue, categoryValue, filterQuery, ratingQuery) => {
    let url = `http://localhost:8080/products?_page=${page}&_limit=9`

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
    let url = `http://localhost:8080/products`
    return axios.get(url + `/${id}`)
}

//Adding Product to the Cart
export const addProductToTheCart = (cartItems, selectedSize) => {

    return axios.post(`http://localhost:8080/cart`, {
        ...cartItems,
        selectedSize: selectedSize
    });
}

//Updating Data in Cart
export const updateProductToTheCart = (cartItems, selectedSize) => {
    return axios.put(`http://localhost:8080/cart/${cartItems.id}`, {
        ...cartItems,
        selectedSize: selectedSize,
    });
}

//




//Getting product from the cart
export const getProductsFromtheCart = () => {
    let url = `http://localhost:8080/cart`
    return axios.get(url)
}

export const deletProductFromtheCart = (id) => {
    let url = `http://localhost:8080/cart`
    return axios.delete(url + `/${id}`)
}