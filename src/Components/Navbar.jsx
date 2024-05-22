import '../CSS/Navbar.css'
import cartlogo from '../Assets/cartLogo.png'
import accountlogo from '../Assets/accountLogo.png'
import accountSuccessLogo from '../Assets/accountSuccessLogo.png'
import wishlistlogo from '../Assets/wishList.png'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Heading, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useToast } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLogoutSuccess } from '../Redux/actions'
import { useEffect } from 'react'
import { getWishlistData } from '../Redux/api'
import { renderCartProductData } from '../Redux/RenderUI'

let routesData = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/products",
        title: "Products"
    },
    {
        path: "/AboutUs",
        title: "AboutUs"
    },
]


const Navbar = () => {
    const Navigate = useNavigate();
    const toast = useToast();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishlistData());
        renderCartProductData(dispatch);
    }, [dispatch])

    const { currUser, isLogin } = useSelector((store) => store.accountsReducer);
    const { cartProducts } = useSelector((store) => store.cartReducer);
    const { wishedProducts } = useSelector((store) => store.wishlistReducer)


    const handleUserLogout = (e) => {
        e.preventDefault();
        dispatch(setUserLogoutSuccess());
        toast({
            title: 'You have been Logout Successfully.',
            position: "top",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })

    }

    return (
        <div className="container" >
            <div className='logo-div' onClick={() => Navigate("/")} >
                <div>John Douglas</div>
                <div style={{ fontSize: ".6rem" }}> coming fashion for new generation</div>
            </div>
            <div className='search-div'>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.600' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Search Products' focusBorderColor="none"
                        className='search_field'
                        style={{ borderRadius: "20px", outline: "black", border: "0.13rem solid black", }} />

                </InputGroup>

            </div>
            <div className='main-div'>
                {routesData.map((route, i) => {
                    return (
                        <div key={i}>
                            <Link to={route.path} style={{ textDecoration: "none", fontSize: "18px" }} >{route.title}</Link>
                        </div>
                    )
                })}
            </div>
            <div className='icons-div'>
                <Link to="/cart"  >
                    <Text
                        position={"absolute"}
                        ml={"1.8rem"}
                        color={"white"}
                        bg={"red.500"}
                        borderRadius={"1rem"}
                        px={".2rem"}
                        my={"-1rem"}
                    >
                        {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
                    </Text>
                    <img src={cartlogo} alt="##" height={30} width={25} />
                </Link>
                <Link to="/wishlist" >
                    <Text
                        position={"absolute"}
                        ml={"1.7rem"}
                        color={"white"}
                        bg={"red.500"}
                        borderRadius={"1rem"}
                        px={".2rem"}
                        my={"-1rem"}
                    >
                        {wishedProducts.length > 0 && <span>{wishedProducts.length}</span>}
                    </Text>
                    <img src={wishlistlogo} alt="##" height={30} width={25} />
                </Link>
                <Menu>
                    {
                        isLogin ?
                            <MenuButton as={Button} colorScheme="none" pb="1em">
                                <img src={accountSuccessLogo} alt="##" height={35} width={35} />
                            </MenuButton>
                            :
                            <MenuButton as={Button} colorScheme="none" pb="1em" >
                                <img src={accountlogo} alt="##" height={30} width={25} />
                            </MenuButton>
                    }

                    <MenuList textAlign="center"
                        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, white 0px 1px 3px 1px"
                        backgroundImage="linear-gradient(to bottom right, #f9eccc, #eea39e)"
                    >

                        <MenuItem pl={"2rem"} colorScheme="none" textAlign="center" bg="none" >
                            {isLogin ? (<Box pr="1rem">
                                < Heading size="xm" > Welcome  {currUser.name} 🙏 </Heading>
                                <Heading size="xm"> <EmailIcon w={6} h={6} color="pink.500" mr=".3rem" /> {currUser.email} </Heading>
                                <Heading size="xm"> <PhoneIcon w={4} h={6} color="pink.500" mr=".3rem" /> {currUser.phone} </Heading>
                            </Box>)
                                :
                                <Heading size="xm"> You are Logged Out </Heading>}</MenuItem>
                        <MenuDivider />
                        {
                            isLogin ? <Button pl="5em" pr="5em" onClick={handleUserLogout} colorScheme='red' >Logout</Button> : <Button pl="3em" pr="3em" colorScheme='green' onClick={() => Navigate("/login")} > Login/SignUp </Button>
                        }

                    </MenuList>
                </Menu>
            </div>

        </div >
    )
}

export default Navbar;