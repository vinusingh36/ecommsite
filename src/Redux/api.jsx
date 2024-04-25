
import axios from "axios"


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

