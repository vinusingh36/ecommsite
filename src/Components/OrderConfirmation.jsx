import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import orderinprocess from "../Assets/orderinprocess.gif"
import orderplaced from "../Assets/orderplaced.gif"
import { useNavigate } from "react-router-dom";
import { renderCartProductData } from "../Redux/RenderUI";
import { useDispatch } from "react-redux";

const OrderConfirmation = () => {
    const [timeout, settimeOut] = useState(true)
    const Navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            settimeOut(false);
            toast({
                title: 'Congratualtions!',
                description: "Your Order is Placed 😀",
                status: "success",
                duration: 4000,
                isClosable: true,
                position: "top"
            })
            renderCartProductData(dispatch);
        }, 6000)
    }, [toast, dispatch])

    if (timeout) {
        return (
            <Box w="100%" mb=".5em" >
                <Image src={orderinprocess} alt="orderinprocess" m="auto" borderRadius="50%" />
            </Box>
        )
    }

    return (
        <Box textAlign="center" height="24rem" >
            <Image src={orderplaced} alt="orderinprocess" m="auto" h="17rem" w="17rem" borderRadius="40%" />
            <Heading color="green" size="xl" > Order ID : {Math.round(Math.random() * 1000000)} </Heading>
            <Button mt="1rem" colorScheme="green" onClick={() => Navigate("/")} >Continue Shopping...........</Button>
        </Box>
    )
}

export default OrderConfirmation;