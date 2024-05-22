import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserSignupDataAction } from "../Redux/actions";



const SignupModal = ({ isOpen, onClose }) => {
    const [show, setShow] = useState(false);
    const [userData, setUserdata] = useState({});
    const toast = useToast();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserdata({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSignup = (e) => {
        e.preventDefault();
        e.target.reset();
        // console.log(userData);
        dispatch(setUserSignupDataAction(userData))
        toast({
            title: 'Account Created Successfully.',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })

    }

    const handleClick = () => setShow(!show);

    return (
        <Box>
            <Modal closeOnOverlayClick={false} size="lg" isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />

                <ModalContent>
                    <form onSubmit={handleSignup}>
                        <ModalHeader textAlign="center">Enter Details for Signup</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input placeholder='Name' name="name" id="##" onChange={handleChange} />
                                <FormLabel>Password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        name="password"
                                        id="###"
                                        onChange={handleChange}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder='Email' name="email" id="####" onChange={handleChange} />
                                <FormLabel>Phone</FormLabel>
                                <Input placeholder='Phone' name="phone" onChange={handleChange} />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter gap="2rem">
                            <Button colorScheme="green" type="submit" >Create Account</Button>
                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default SignupModal;