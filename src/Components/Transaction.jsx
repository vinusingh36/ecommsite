import { Box, Button, FormControl, Heading, Input, Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletProductFromtheCart } from "../Redux/api";


const Transaction = ({ onClose }) => {
    const [value, setValue] = useState("1")
    const [cardData, setCarddata] = useState({});
    const [cardPlaceholder, setCardplaceholder] = useState(true);
    const toast = useToast();


    const Navigate = useNavigate();

    const { cartProducts } = useSelector((store) => store.cartReducer)

    const handleChange = (e) => {
        setCarddata({ ...cardData, [e.target.name]: e.target.value });

    }

    const handleOrderConfirmation = () => {
        if (cardData.cardnumber === "1234 1234 1234 1234" && cardData.cvv === "123") {
            toast({
                title: 'Please Wait!',
                description: "Your Order is being Processed.............",
                status: "loading",
                duration: 4000,
                isClosable: true,
            })
            Navigate("/orderconfirmation")
            //Empty the Cart once order is Placed
            cartProducts?.map((item) =>
                deletProductFromtheCart(item.id)
            )
        }
        else {
            toast({
                title: 'Enter Correct Card Details',
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
    }
    const handleCashOnDeliveryPay = () => {
        toast({
            title: 'Please Wait!',
            description: "Your Order is being Processed.............",
            status: "loading",
            duration: 4000,
            isClosable: true,
        })
        Navigate("/orderconfirmation")
        //Empty the Cart once order is Placed
        cartProducts?.map((item) =>
            deletProductFromtheCart(item.id)
        )
    }

    return (
        <Box>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='row'>
                    <Radio colorScheme='green' value='1'>Card Payment</Radio>
                    <Radio colorScheme='green' value='2'>COD</Radio>
                </Stack>
            </RadioGroup>
            {value === "1" ? <Box mt="1em">

                <FormControl isRequired>
                    <Input size='sm' onFocus={() => setCardplaceholder(false)} placeholder={cardPlaceholder ? "Card Number" : "1234 1234 1234 1234"} name="cardnumber" onChange={handleChange} ></Input>
                    <Input size='sm' placeholder="Name" mt="1em" name="name" onChange={handleChange} ></Input>
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        gap="1em"
                    >
                        <Input type="month" scrollBehavior="smooth" size="sm" mt="1em" name="month" onChange={handleChange} ></Input>
                        <Input type="number" placeholder="CVV" size="sm" mt="1em" name="cvv" onChange={handleChange}></Input>

                    </Box>
                    <Box mt="1.5rem" mb="1em" display="flex" justifyContent="space-around"  >
                        <Button pl="4rem" pr="4rem" colorScheme='green' type="submit" onClick={handleOrderConfirmation} >Pay</Button>
                        <Button pl="2rem" pr="2rem" colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </Box>
                </FormControl>

            </Box>
                :
                <Box>
                    <Heading size="md" h="4rem" mt="2rem" >
                        Please pay the total amount to our delivery agent.
                    </Heading>

                    <Box mt="1.5rem" mb="1em" display="flex" justifyContent="space-around"  >
                        <Button pl="4rem" pr="4rem" colorScheme='green' onClick={handleCashOnDeliveryPay} >Pay</Button>
                        <Button pl="2rem" pr="2rem" colorScheme='red' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </Box>
                </Box>
            }

        </Box >
    )
}

export default Transaction;