import { Box, Button, Heading, Select, Text } from '@chakra-ui/react';
import '../CSS/ProductDetail.css';
import { StarIcon } from '@chakra-ui/icons';

import wishlistlogo from '../Assets/wishList.png'
import AccordionComp from './AccordionComp';
import AddToCartButton from './AddToCartButton';
import { useState } from 'react';


const SingleProductDetails = ({ currProduct }) => {
    console.log(currProduct);

    const [selectedSize, setSelectedSize] = useState("");

    console.log(selectedSize);

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
                        <Button backgroundImage={"linear-gradient(to bottom right, #f9eccc, #eea39e)"} m={"auto"} p={4} ><img src={wishlistlogo} alt="wishlist" height={35} width={30} /></Button>
                    </Box>
                    <Box marginTop={"1rem"}><hr /></Box>
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
                    <Box className="payment_option_single_page">
                        <Box> Pay Online
                        </Box>
                        <Box> Pay On Delivery</Box>
                        <Box>
                            UPI & Credit Card
                        </Box>
                    </Box>
                    <Box>
                        <b>Warrenty : </b>
                    </Box>
                    <Box>
                        <b>Exchange & Return</b>
                    </Box>
                </Box>
            </Box>
            <Box>
                <b>Specifications : </b>
                <AccordionComp />
            </Box>
        </Box >
    )
    // if (currProduct.category === "female")
    //     return (
    //         <Box>
    //             <p>Female Box</p>
    //         </Box>
    //     )
    // if (currProduct.category === "Kids")
    //     return (
    //         <Box>
    //             <p>Kids Box</p>
    //         </Box>
    //     )
}

export default SingleProductDetails;