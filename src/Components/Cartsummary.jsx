import { Box, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Cartsummary = () => {
    const [totalBill, setTotalbill] = useState(0);

    const { isLoading, isError, cartProducts } = useSelector((store) => store.cartReducer)
    console.log(isLoading, isError, cartProducts);

    const CalTotal = () => {
        let total = cartProducts.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity
        }, 0)
        setTotalbill(total)
    }


    useEffect(() => {
        CalTotal();
    }, [])

    return (
        <Box>
            {
                cartProducts?.map((cartItems) => {
                    return (
                        <Box p={".5rem"} display={"flex"} justifyContent={"space-between"} >
                            <Image src={cartItems.image} alt={cartItems.image} h={"6rem"} w={"5rem"} borderRadius={"1em"} />
                            <Heading size={"xs"} w={"30%"} ml={"1rem"} m={"auto"} >{cartItems.title}</Heading>
                            <Box m={"auto"} >
                                <Heading size={"sm"}>Size : {cartItems.selectedSize}</Heading>
                                <Heading size={"sm"}>Quantity : {cartItems.quantity}</Heading>
                            </Box>
                            <Heading m={"auto"} size={"md"}> ₹ {cartItems.price * cartItems.quantity} </Heading>
                        </Box>

                    )
                })
            }
            <Box>
                <Heading size={"md"} m={"auto"} p={"2rem"} >
                    TOTAL BILL : ₹ {totalBill}
                </Heading>
            </Box>
        </Box>
    )
}

export default Cartsummary;