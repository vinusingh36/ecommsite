import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, Select, useToast } from "@chakra-ui/react";
import Cartsummary from "../Components/Cartsummary";
import ShippingModal from "../Components/ShippingModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserAddress } from "../Redux/actions";


const Payment = () => {
    const [addressData, setAddressdata] = useState({});
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChange = (e) => {
        setAddressdata({ ...addressData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        dispatch(getUserAddress(addressData))
        setAddressdata({});
        toast({
            title: 'Address is saved Successfully',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }



    return (
        <Box >
            <Box>BreadCrumb Box</Box>
            <Box display={"flex"} justifyContent={"space-around"} >
                <Heading size={"md"}>Payment Page</Heading>
            </Box>
            <Box m={"1rem"} border={"2px solid black"} boxShadow={"0 0 2px black"} borderRadius={"2rem"} display={"flex"} justifyContent={"space-around"} textAlign={"center"} >
                <Box m={"1rem"} p={"1rem"} boxShadow={"0 0 20px white"} w={"55%"} borderRadius={"1rem"} >
                    <form onSubmit={handleFormSubmit}>
                        <FormControl isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input placeholder='First name' name="firstname" onChange={handleChange} />
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' name="lastname" onChange={handleChange} />
                            <FormLabel>Mobile Number</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>
                                    +91
                                </InputLeftAddon>
                                <Input type='tel' placeholder='phone number' name="phone" onChange={handleChange} />
                            </InputGroup>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Enter Address' name="address" onChange={handleChange} />
                            <Box display={"flex"}>
                                <FormLabel m={3} w={"30%"} >City and Country </FormLabel>
                                <Select m={3} placeholder='Select City' name="city" onChange={handleChange}>
                                    <option value="Banglore" >Banglore</option>
                                    <option value="Lucknow" >Lucknow</option>
                                </Select>
                                <Select m={3} placeholder='Select State' name="country" onChange={handleChange}>
                                    <option value="Karnataka" >Karnatka</option>
                                    <option value="Uttar Pradesh" >Uttar Pradesh</option>
                                </Select>
                            </Box>
                            <FormLabel>PinCode</FormLabel>
                            <Input placeholder='Enter Pincode' name="pincode" onChange={handleChange} />
                        </FormControl>
                        <Box mt="2rem" display="flex" justifyContent="space-around">
                            <Button type="submit"> ADD NEW ADDRESS</Button>
                            <ShippingModal />
                        </Box>
                    </form>
                </Box>
                <Box m={"1rem"} boxShadow={"0 0 10px white"} borderRadius={"1.5rem"} w={"40%"}>
                    <Heading size={"lg"} >Cart Summary</Heading>
                    <Cartsummary /> </Box>
            </Box>

        </Box>
    )
}

export default Payment;