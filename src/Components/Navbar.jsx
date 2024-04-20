import '../CSS/Navbar.css'
import cartlogo from '../Assets/cartLogo.png'
import accountlogo from '../Assets/accountLogo.png'
import wishlistlogo from '../Assets/wishList.png'
import { Link } from 'react-router-dom'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

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

let routeIcons = [
    {
        path: "/cart",
        icon: cartlogo
    },
    {
        path: "/wishlist",
        icon: wishlistlogo
    },
    {
        path: "/login",
        icon: accountlogo
    },
]

const Navbar = () => {
    return (
        <div className="container" >
            <div className='logo-div'>
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
                {routeIcons.map((route, i) => {
                    return (
                        <div key={i}>
                            <Link to={route.path} style={{ textDecoration: "none" }} ><img src={route.icon} alt="##" height={30} width={25} /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;