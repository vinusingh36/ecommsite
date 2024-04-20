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


const HomePage = () => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Carousel />
            </div>
            <div className="img_container">
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
                <img src={img3} alt="img3" />
                <img src={img4} alt="img4" />
            </div>
            <div className="shop_category-div">
                <img src={shopbycategory} alt="" />
            </div>
            <div className="card_mens-kids">
                <img src={menscard} alt="menscard" />
                <img src={kidscard} alt="kidscard" />
                <img src={discountcard} alt="discountcard" style={{ borderRadius: "10px" }} />
            </div>
        </div>

    )
}

export default HomePage;