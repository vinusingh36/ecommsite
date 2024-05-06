import { Box, Button, useToast } from "@chakra-ui/react";
import cartlogo from "../Assets/cartLogo.png"
import { addProductToTheCart } from "../Redux/api";

const AddToCartButton = ({ cartItems, selectedSize }) => {
    const toast = useToast();
    let handleAddToCart = () => {
        if (selectedSize === "") {
            toast({
                title: 'Select Size Before Proceed',
                description: "",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
        }
        else {
            addProductToTheCart(cartItems, selectedSize)
                .then(() => {
                    toast({
                        title: 'Product Added To the Cart',
                        description: "",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    })
                })
                .catch(() => {
                    toast({
                        title: 'Item Already In the Cart',
                        description: "",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                })
        }
    }

    return (
        <Button
            mr={1}
            ml={1}
            pl={14}
            pr={14}
            colorScheme="none"
            border="2px"
            borderColor='green'
            backgroundImage="linear-gradient(to bottom right, #f9eccc, #eea39e)"
            onClick={handleAddToCart}
        >
            <img src={cartlogo} alt="" height={"20px"} width={"25px"} />
            <Box pl={2} color={"black"}>Add To Cart
            </Box>
        </Button>
    )
}

export default AddToCartButton;