import { Box, Button, Heading } from "@chakra-ui/react";
import { getWishlistData } from "../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductsCard from "./ProductsCard";
import Loading from "./Loading";
import Error from "./Error";
import emptywishlist from "../Assets/emptyWishlist.webp"
import { useNavigate } from "react-router-dom";


const WishList = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();


    const { isLoading, isError, wishedProducts } = useSelector((store) => store.wishlistReducer)
    console.log(isLoading, isError, wishedProducts);

    useEffect(() => {
        dispatch(getWishlistData());
    }, [dispatch])

    if (wishedProducts.length === 0) {
        return (
            <Box w={"50%"} m={"auto"} pl={"10rem"} >
                <Heading pl={"4rem"} >Your Wishlist is Empty</Heading>
                <img src={emptywishlist} alt="####" />
                <Button
                    ml={"8rem"}
                    mb={"2rem"}
                    pl={"4rem"}
                    pr={"4rem"}
                    colorScheme="none"
                    border="2px"
                    borderColor='green'
                    color={"black"}
                    backgroundImage="linear-gradient(to bottom right, #f9eccc, #eea39e)"
                    onClick={() => Navigate("/products")}
                >
                    Go To Products
                </Button>
            </Box>
        )
    }

    return (
        <Box minHeight={"22rem"} textAlign="center" mt="1rem" m={"auto"} w={"80%"} >
            <Heading size="md">Wishlist Products</Heading>
            <Box >
                {
                    isLoading ? <Loading /> : isError ? <Error /> :
                        <Box
                            display={"grid"}
                            gridTemplateColumns={"1fr 1fr 1fr"}
                            padding={"5px 25px 25px 25px"}
                            mt={"30px"}
                            gap={"1.8rem"}
                            gridColumnGap={"4rem"}

                        >
                            {wishedProducts?.map((products) => <ProductsCard products={products} />)}
                        </Box>

                }
            </Box>
        </Box >
    )
}

export default WishList;