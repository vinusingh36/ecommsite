import { Box, Button, Heading, Input, InputGroup, } from "@chakra-ui/react";
import '../CSS/Footer.css'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.webp'
import twitter from '../Assets/twitter.webp'
import youtube from '../Assets/youtube.webp'

const Footer = () => {
    return (
        <Box className="top_container">
            <Box className="main_container">
                <Box className="social_media_logo" >
                    <Heading size='md'>KEEP IN TOUCH</Heading>
                    <Box>
                        <img src={facebook} alt="##" width={50} />
                        <img src={instagram} alt="##" width={50} />
                        <img src={youtube} alt="##" width={50} />
                        <img src={twitter} alt="##" width={50} />
                    </Box>
                </Box>
                <Box className="online_shoping">
                    <Heading marginBottom="10px" size='xs'>ONLINE SHOPPING</Heading>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Gifts&Cards</p>
                </Box>
                <Box className="popular_searches">
                    <Heading marginBottom="10px" size='xs'>POPULAR SEARCHES</Heading>
                    <p>T-Shirt</p>
                    <p>Shirt</p>
                    <p>Wallets</p>
                    <p>Blazers For Men</p>
                    <p>Ladies Wear</p>
                    <p>Suit</p>
                </Box>
                <Box className="brand_names">
                    <Heading marginBottom="10px" size='xs'>SHOP BY BRANDS</Heading>
                    <p>Nike</p>
                    <p>Adidas</p>
                    <p>Puma</p>
                    <p>Peter England</p>
                    <p>Snitch</p>
                    <p>Mast&Harbour</p>
                </Box>
                <Box className="customer_policy">
                    <Heading marginBottom="10px" size='xs'>CUSTOMER POLICY</Heading>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>FAQ</p>
                    <p>Terms Of Use</p>
                    <p>T&C</p>
                    <p>Privacy Policy</p>
                </Box>
                <Box className="support_div">
                    <Heading marginBottom="10px" size='xs'>HELP AND SUPPORT</Heading>
                    <p>Support Center</p>
                    <p>Shipping & Track Orders</p>
                    <p>Returns</p>
                    <p>Cancellation</p>
                </Box>
                <Box className="contact_us-div">
                    <Heading marginBottom="15px" size='sx'>SHARE YOUR EMAIL WE WILL REACH YOU</Heading>
                    <InputGroup size='sm'>
                        <Input borderRadius="7px 0px 0px 7px" variant="none"
                            style={{ outline: "black", border: "0.13rem solid black", }}
                            placeholder='Enter Your Email' />
                        <Button variant='outline' borderRadius="0px 7px 7px 0px" style={{ outline: "black", border: "0.13rem solid black", }} >Share</Button>
                    </InputGroup>
                    <p>By submitting your email address you agree to the <a href="##">Terms & Conditions</a> </p>
                </Box>
            </Box>
            <Box className="copyright_container">
                © 2024. John Douglas, All Rights Reserved
            </Box>
        </Box>
    )
}

export default Footer;