import { Button, Heading } from "@chakra-ui/react";
import "../CSS/Products.css"
import { StarIcon } from "@chakra-ui/icons";


const ProductsCard = ({ products }) => {
    console.log(products);

    return (
        <div>

            <div className="productscard">
                {
                    products.map((item, idx) => {
                        return <div className="cards_div" key={idx}>
                            <img loading="lazy" src={item.image} alt="itemimage" />
                            <Heading size="xs">{item.title}</Heading>
                            <p> <span className="item_price"> ₹ {item.price} </span>&nbsp;<span className="discount_price" >{item.discount * 100}%off</span> </p>
                            <p className="sale_price">₹ {item.price * (1 - item.discount)}</p>
                            <div className="wishlist_addtocart">
                                <StarIcon margin={"auto"} color="grey" /> <Heading size={"md"} margin={"auto"} > {item.rating}</Heading>
                                <Button>WishList</Button>
                                <Button>Add To Cart</Button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >

    )
}

export default ProductsCard;