import { Box, Button, Heading, Select, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderCartProductData } from "../Redux/RenderUI";
import emptycartimg from "../Assets/emptycartimg.png"
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { deletProductFromtheCart, updateProductToTheCart } from "../Redux/api";
import { decCartProductsSuccessAction, deleteCartProductsSuccessAction, incCartProductsSuccessAction } from "../Redux/actions";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState("");
    const toast = useToast();
    const [totalBill, setTotalbill] = useState(0);
    const Navigate = useNavigate();


    const { isLoading, isError, cartProducts } = useSelector((store) => store.cartReducer)
    console.log(isLoading, isError, cartProducts);

    const handleSizeChange = (e, cartItems) => {
        if (e.target.value === cartItems.selectedSize) {
            toast({
                title: 'Select Different Size',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        else {
            setSelectedSize(e.target.value);
            updateProductToTheCart(cartItems, e.target.value)
                .then(() => {
                    toast({
                        title: 'Size Updated Successfully',
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    })
                })
                .catch(() => {
                    toast({
                        title: 'Not Able to Update Size',
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                })
        }
    }


    const CalTotal = () => {
        let total = cartProducts.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity
        }, 0)
        setTotalbill(total)
    }

    useEffect(() => {
        CalTotal();
    }, [cartProducts])
    console.log(totalBill);

    useEffect(() => {
        renderCartProductData(dispatch);
    }, [selectedSize])

    let decreaseItemQunatity = (id) => {
        dispatch(decCartProductsSuccessAction(id))
    }
    let increaseItemQunatity = (id) => {
        dispatch(incCartProductsSuccessAction(id))
    }

    let deleteProduct = (id) => {
        deletProductFromtheCart(id).then(() => {
            renderCartProductData(dispatch);
            toast({
                title: 'Product is Removed From Cart',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
        }).catch(() => {
            toast({
                title: 'Error While Removing Product',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        })
    }




    if (cartProducts.length === 0) {
        return (
            <Box w={"50%"} m={"auto"}>
                <img src={emptycartimg} alt="emptycartimg" />
            </Box>
        )
    }
    return (
        <Box border={"2px solid black"} minHeight={"362px"}>
            {
                cartProducts?.map((cartItems) => {
                    return (
                        <Box key={cartItems.id} border={"2px solid black"} p={3} display={"flex"} justifyContent={"space-around"}>
                            <img src={cartItems.image} alt="img" width={"75px"} height={"75px"} style={{ borderRadius: "10%" }} />
                            <Box w={"30%"}>
                                <Heading size={"sm"}>{cartItems.title}</Heading>
                                <Text>Selected Size : {cartItems.selectedSize}</Text>
                                <Box display={"flex"}>
                                    <Text width={"30%"} >Change Size : </Text>
                                    <Select onChange={(e) => handleSizeChange(e, cartItems)} placeholder={cartItems.selectedSize} >
                                        {cartItems?.size?.map((option, idx) => {
                                            return (
                                                <option key={idx} value={option} >{option}</option>
                                            )
                                        })}
                                    </Select>
                                </Box>
                            </Box>
                            <Box mt={7} display={"flex"}>
                                <Button isDisabled={cartItems.quantity === 1} onClick={() => decreaseItemQunatity(cartItems.id)} ><MinusIcon /></Button>
                                <Text mt={".5rem"} pl={3} pr={3} ><b>{cartItems.quantity}</b></Text>
                                <Button isDisabled={cartItems.quantity === 10} onClick={() => increaseItemQunatity(cartItems.id)}   ><AddIcon /></Button>
                            </Box>
                            <Heading mt={10} size={"xs"}> ₹  {cartItems.price * cartItems.quantity} </Heading>
                            <Button mt={7} color={"black"} bg={"pink.400"} onClick={() => deleteProduct(cartItems.id)} ><DeleteIcon /></Button>
                        </Box>


                    )
                })
            }
            <Box p={3} display={"flex"} justifyContent={"space-around"}>
                <Button mt={1} width={"300px"} border={"2px"} borderColor={"black"} backgroundImage={"linear-gradient(to bottom right, #f9eccc, #eea39e)"} onClick={() => Navigate("/payment")} >
                    Proceed For Payment
                </Button>
                <Heading size={"md"} p={3} textAlign={"right"} mr={16} >
                    TOTAL BILL : ${totalBill}
                </Heading>
            </Box>

        </Box >
    )
}

export default Cart;