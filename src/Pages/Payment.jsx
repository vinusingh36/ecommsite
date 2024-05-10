import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, Select, useDisclosure } from "@chakra-ui/react";
import Cart from "../Components/Cart";
import Cartsummary from "../Components/Cartsummary";
import ShippingModal from "../Components/ShippingModal";


const Payment = () => {

    return (
        <Box minHeight={362}>
            <Box>BreadCrumb Box</Box>
            <Box display={"flex"} justifyContent={"space-around"} border={"2px solid black"} >
                <Heading size={"md"}>Payment Page</Heading>
            </Box>
            <Box border={"2px solid black"} display={"flex"} justifyContent={"space-around"} textAlign={"center"} >
                <Box p={12} border={"2px solid black"} w={"55%"} >
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                        <FormLabel>Mobile Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon>
                                +91
                            </InputLeftAddon>
                            <Input type='tel' placeholder='phone number' />
                        </InputGroup>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Enter Address' />
                        <Box display={"flex"}>
                            <FormLabel m={3} w={"30%"} >City and Country </FormLabel>
                            <Select m={3} placeholder='Select City'>
                                <option>Banglore</option>
                                <option>Lucknow</option>
                            </Select>
                            <Select m={3} placeholder='Select State'>
                                <option value="India" >Karnatka</option>
                                <option>Uttar Pradesh</option>
                            </Select>
                        </Box>
                        <FormLabel>PinCode</FormLabel>
                        <Input placeholder='Enter Pincode' />
                        <ShippingModal />
                    </FormControl>
                </Box>
                <Box border={"2px solid black"} w={"40%"}>
                    <Heading size={"lg"} >Cart Summary</Heading>
                    <Cartsummary /> </Box>
            </Box>

        </Box>
    )
}

export default Payment;