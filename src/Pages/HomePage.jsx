import Carousel from "../Components/Carousel";
import '../CSS/Homepage.css';
import img1 from '../Assets/Homepage/cardimg1.webp'
import img2 from '../Assets/Homepage/cardimg2.jpg'
import img3 from '../Assets/Homepage/cardimg3.jpg'
import img4 from '../Assets/Homepage/cardimg4.webp'
import shopbycategory from '../Assets/Homepage/shopbycategory.webp'
import menscard from '../Assets/Homepage/menscard.webp'
import kidscard from '../Assets/Homepage/kidscard.webp'
import discountcard from '../Assets/Homepage/discountcard.webp'
import { Box } from "@chakra-ui/react";


const HomePage = () => {
    return (
        <Box>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Carousel />
            </Box>
            <Box className="img_container">
                <img src={img1} loading="lazy" alt="img1" />
                <img src={img2} loading="lazy" alt="img2" />
                <img src={img3} loading="lazy" alt="img3" />
                <img src={img4} loading="lazy" alt="img4" />
            </Box>
            <Box className="shop_category-div">
                <img src={shopbycategory} alt="" />
            </Box>
            <Box className="card_mens-kids">
                <img src={menscard} loading="lazy" alt="menscard" />
                <img src={kidscard} loading="lazy" alt="kidscard" />
                <img src={discountcard} loading="lazy" alt="discountcard" style={{ borderRadius: "10px" }} />
            </Box>
        </Box>

    )
}

export default HomePage;