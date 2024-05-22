import { Box, Button, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import "../CSS/Products.css"
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import wishlistlogo from '../Assets/wishList.png';
import addwishlistlogo from '../Assets/addWishlist.png';
import { addToWishList, removeFromWishlist } from "../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


const ProductsCard = ({ products }) => {

    const [wish, setWish] = useState(false);
    let Navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();

    const { wishedProducts } = useSelector((store) => store.wishlistReducer)

    let check_wishProduct = wishedProducts.find((prod) => prod.id === products.id)

    useEffect(() => {
        if (check_wishProduct) {
            setWish(true)
        }
        else {
            setWish(false)
        }
    }, [wishedProducts])

    let gotoProductsDetailsPage = (id) => {
        Navigate(`/products/details/${id}`)
    }


    const handleAddWish = (products) => {
        dispatch(addToWishList(products));
        toast({
            title: 'Product Added to Wishlist',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    const handleRemoveWish = (id) => {
        dispatch(removeFromWishlist(id))
        toast({
            title: 'Product Removed From Wishlist',
            status: 'error',
            duration: 4000,
            isClosable: true,
        })
    }

    return (

        <div className="cards_div" >
            <img className="cards_div_img" loading="lazy" src={products.image} alt="productsimage" onClick={() => gotoProductsDetailsPage(products.id)} />
            <Heading size="xs">{products.title}</Heading>
            <p> <span className="products_price"> ₹ {Math.ceil(products.price / (1 - products.discount))} </span>&nbsp;<span className="discount_price" >{products.discount * 100}%off</span> </p>
            <p className="sale_price">₹ {products.price}</p>
            <div className="wishlist_addtocart">
                <Box display={"flex"}>
                    <StarIcon margin={"auto"} color="grey" /> <Heading size={"md"} margin={"auto"} p={2} > {products.rating}</Heading>
                </Box>
                <Box>
                    <Button ml={3} mr={5} pl={2} pr={2} backgroundImage={"linear-gradient(to bottom right, #f9eccc, #eea39e)"} onClick={() => {
                        if (wish) {
                            handleRemoveWish(products.id)
                        }
                        else {
                            handleAddWish(products)
                        }
                    }} ><img src={wish ? wishlistlogo : addwishlistlogo} alt="wishlist" style={{ height: "1.5rem", width: "2.5rem" }}
                        /></Button>
                </Box>
            </div>
        </div>
    )
}

export default ProductsCard;