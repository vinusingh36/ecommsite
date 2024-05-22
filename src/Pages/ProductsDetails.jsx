import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderSingleProductData } from "../Redux/RenderUI";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import SingleProductDetails from "../Components/SingleProductDetails";


const ProductsDetails = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        renderSingleProductData(dispatch, id)
    }, [dispatch, id])

    let { isLoading, isError, currProduct } = useSelector((store) => store.productsReducer)

    return (
        <div>
            <Heading size={"sm"}>Products Details Page</Heading>
            {
                isLoading ? <Loading /> : isError ? <Error /> : <SingleProductDetails currProduct={currProduct} />
            }
        </div>
    )
}

export default ProductsDetails;