import { Box, Button, Heading, Img, Select, Text, useToast } from '@chakra-ui/react';
import '../CSS/ProductDetail.css';
import { StarIcon } from '@chakra-ui/icons';
import cartlogo from "../Assets/cartLogo.png"
import wishlistlogo from '../Assets/wishList.png';
import addwishlistlogo from '../Assets/addWishlist.png';
import AccordionComp from './AccordionComp';
import AddToCartButton from './AddToCartButton';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToWishList, removeFromWishlist } from '../Redux/api';
import { useDispatch, useSelector } from 'react-redux';
import onlinepayment from "../Assets/onlinePayment.png"
import codpayment from "../Assets/codPayment.webp"
import upipayment from "../Assets/upiPayment.png"


const SingleProductDetails = ({ currProduct }) => {
    const [wish, setWish] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast()


    const { wishedProducts } = useSelector((store) => store.wishlistReducer)
    let check_wishProduct = wishedProducts.find((prod) => prod.id === currProduct.id)
    useEffect(() => {
        if (check_wishProduct) {
            setWish(true)
        }
        else {
            setWish(false)
        }

    }, [wishedProducts])

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

    // if (currProduct.category === "male")
    return (
        <Box className="main_single_page_container">
            <Box className="breadcrumb_container"></Box>
            <Box className="product_single_page_container">
                <Box className="img_single_page_container">
                    <img src={currProduct.image} alt="" />
                </Box>
                <Box className="title_single_page_container" >
                    <Heading size={"md"}>{currProduct.title}</Heading>

                    <Box mb={3} className="rating_single_page_container" >
                        <Heading size={"md"} padding={"0 10px 0 5px"} >{currProduct.rating}</Heading>
                        <StarIcon alignItems={"start"} marginTop={"4px"} marginRight={"5px"} color="grey" />
                        |   <Box marginLeft={"10px"} > {Math.floor(Math.random() * 100)} Rating</Box>
                    </Box>
                    <hr />
                    <Box display={"flex"} marginTop={"10px"}> <Heading size={"md"} > ₹ {currProduct.price}</Heading>
                        <Text marginLeft={"10px"}> MRP </Text>  <Text marginLeft={"5px"} textDecoration={"line-through"} > ₹ {Math.ceil(currProduct.price / (1 - currProduct.discount))}</Text>
                        <Heading marginLeft={"5px"} size={"md"} color={"green"} > ({currProduct.discount * 100}% OFF)</Heading>
                    </Box>

                    <Box className='lafjlaj' pr={10} display={"flex"} justifyContent={"space-around"} marginTop={"20px"} >
                        <Box m={"auto"} width={"30%"} >
                            <Text fontSize={"1.3rem"} textAlign={"center"} mt={1} > <b>Select Size</b> </Text>
                        </Box>
                        <Box width={"70%"}>
                            {
                                <Select onChange={(e) => setSelectedSize(e.target.value)} placeholder='Select Size'>
                                    {currProduct.size?.map((option, idx) => {
                                        return (
                                            <option key={idx} value={option} >{option}</option>
                                        )
                                    })}
                                </Select>
                            }
                        </Box>
                    </Box>
                    <Box marginTop={"3rem"}><hr /></Box>
                    <Box marginTop={"1rem"} display={"flex"} justifyContent={"space-around"}>
                        <Box p={4} w={"50%"} m={"auto"} >
                            <AddToCartButton cartItems={currProduct} selectedSize={selectedSize} />
                        </Box>
                        <Button backgroundImage={"linear-gradient(to bottom right, #f9eccc, #eea39e)"} m={"auto"} p={4}
                            onClick={() => {
                                if (wish) {
                                    handleRemoveWish(currProduct.id)
                                }
                                else {
                                    handleAddWish(currProduct)
                                }
                            }}
                        ><img src={wish ? wishlistlogo : addwishlistlogo} alt="wishlist" height={35} width={30} /></Button>
                    </Box>
                    <Box marginTop={"1rem"}><hr />
                    </Box>
                    <Box textAlign="center" mt="1.5rem" ml="3rem" >
                        <Button
                            mr={1}
                            ml={1}
                            pl="8rem"
                            pr="8rem"
                            colorScheme="none"
                            color="black"
                            border="2px"
                            borderColor='green'
                            backgroundImage="linear-gradient(to bottom right, #f9eccc, #eea39e)"
                            onClick={() => Navigate("/cart")}
                        >
                            <img src={cartlogo} alt="" height={"20px"} width={"25px"} />
                            <Box pl={2} color={"black"}>GO TO CART
                            </Box>
                        </Button>
                    </Box>

                </Box>
            </Box>
            <Box className="details_single_page_container">
                <Box className="basic_details_single_page_container">
                    <Box>
                        <Heading size={"sm"} >Product Details</Heading>
                        <p>Formal</p>
                        <p>Regular Fit</p>
                        <p>Mid Rise</p>
                        <p>Length : Regular</p>
                        <p>Pattern : Solid</p>
                        <p>Feature : Plain</p>
                    </Box>
                    <Box>
                        <Heading size={"sm"} >Size & Fit</Heading>
                        <p>Regular Fit</p>
                        <p>Model Size: M</p>
                        <p>Waist : 33"</p>
                        <p> Hips: 40"</p>
                        <p>Height : 6'2"</p>
                    </Box>
                    <Box>
                        <Heading size={"sm"} >Material & Wash</Heading>
                        <p>83% Polyester, 15% Viscose, 12% Elastane
                            Machine wash</p>
                    </Box>
                </Box>

                <Box className="payment_details_single_page_container" >
                    <Box className="payment_option_single_page" textAlign={"center"}>
                        <Box mb={"1rem"} > <b>Card Payment</b>
                            <Img src={onlinepayment} placeholder="onlinepayment" h={175} w={175} boxShadow={"0 0 10px black"} borderRadius={"5%"} mt={".5rem"} ></Img>
                        </Box>
                        <Box mb={"1rem"}> <b>Cash On Delivery</b>
                            <Img src={codpayment} placeholder="onlinepayment" h={175} w={175} boxShadow={"0 0 10px black"} borderRadius={"5%"} mt={".5rem"}  ></Img>
                        </Box>
                        <Box mb={"1rem"}>
                            <b>UPI</b>
                            <Img src={upipayment} placeholder="onlinepayment" h={175} w={175} boxShadow={"0 0 10px black"} borderRadius={"5%"} mt={".5rem"} ></Img>
                        </Box>
                    </Box>
                    <Box mb={".5rem"}>
                        <b>Warrenty : Standard Warrenty is Applicable</b>
                    </Box>
                    <Box>
                        <b>Exchange & Return : 7 Days Easy and Hassel Free Return </b>
                    </Box>
                </Box>
            </Box>
            <Box p={"1rem"}>
                <b>Specifications : </b>
                <AccordionComp />
            </Box>
        </Box >
    )
}

export default SingleProductDetails;