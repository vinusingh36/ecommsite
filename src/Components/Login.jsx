import { Box, Button, FormControl, Heading, Input, InputGroup, InputRightElement, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useState } from "react";
import SignupModal from "./SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginSuccess } from "../Redux/actions";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [show, setShow] = useState(false)
    const [loginData, setLogindata] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast()
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleChange = (e) => {
        setLogindata({ ...loginData, [e.target.name]: e.target.value })
    }

    const { currUser } = useSelector((store) => store.accountsReducer);

    const handleUserLogin = (e) => {
        e.preventDefault();
        e.target.reset();
        if (currUser.name && currUser.password) {

            if (loginData.username === currUser.name && loginData.password === currUser.password) {
                dispatch(setUserLoginSuccess())
                toast({
                    title: 'Sign In Successful',
                    position: "top",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                Navigate("/")
            }

            else {
                toast({
                    title: 'Enter Correct Details.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        }
        else {
            toast({
                title: 'Create Account for Login',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }


    const handleClick = () => setShow(!show)


    return (
        <Box minHeight={362} width="40%" m="auto" textAlign="center" mt="4em" >
            <form onSubmit={handleUserLogin} >
                <FormControl isRequired>
                    <Heading size="lg" mb="2rem" >Login/SignUp</Heading>
                    <Input placeholder="Enter Username" name="username" id="#####" onChange={handleChange} />
                    <InputGroup size='md' mt="2.5rem" >
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter Password'
                            name="password"
                            onChange={handleChange}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {
                        <Button mt="1.5em" pl="5em" pr="5em" type="submit" >Login</Button>
                    }
                </FormControl>
            </form>
            <Box mt=".5rem" display="flex" justifyContent="space-between">
                <Text ml=".5rem">Don't Have Account? </Text>
                <Button variant="none" outline="none" textDecoration="underline" onClick={onOpen}>SignUp Here<SignupModal isOpen={isOpen} onClose={onClose} /></Button>
            </Box>

        </Box>
    )
}

export default Login;