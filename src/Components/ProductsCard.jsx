import { Box, Button, Heading } from "@chakra-ui/react";
import "../CSS/Products.css"
import { StarIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import wishlistlogo from '../Assets/wishList.png'
import AddToCartButton from "./AddToCartButton";


const ProductsCard = ({ products }) => {
    let Navigate = useNavigate();

    let gotoProductsDetailsPage = (id) => {
        Navigate(`/products/details/${id}`)
    }

    return (
        <div>

            <div className="productscard">
                {
                    products.map((item, idx) => {
                        return <div className="cards_div" key={idx} >
                            <img className="cards_div_img" loading="lazy" src={item.image} alt="itemimage" onClick={() => gotoProductsDetailsPage(item.id)} />
                            <Heading size="xs">{item.title}</Heading>
                            <p> <span className="item_price"> ₹ {Math.ceil(item.price / (1 - item.discount))} </span>&nbsp;<span className="discount_price" >{item.discount * 100}%off</span> </p>
                            <p className="sale_price">₹ {item.price}</p>
                            <div className="wishlist_addtocart">
                                <Box display={"flex"}>
                                    <StarIcon margin={"auto"} color="grey" /> <Heading size={"md"} margin={"auto"} p={2} > {item.rating}</Heading>
                                </Box>
                                <Box>
                                    <Button ml={3} mr={3} backgroundImage={"linear-gradient(to bottom right, #f9eccc, #eea39e)"} ><img src={wishlistlogo} alt="wishlist" style={{ height: "1.5rem", width: "2.5rem" }}
                                    /></Button>
                                </Box>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >

    )
}

export default ProductsCard;