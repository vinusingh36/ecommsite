import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Protected from "./Proctected"
import Login from "../Components/Login";
import Products from "../Pages/Products";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";
import Payment from "../Pages/Payment";
import About from "../Pages/About";
import Pagenotfound from "../Components/Pagenotfound";
import ProductsDetails from "../Pages/ProductsDetails";
import OrderConfirmation from "../Components/OrderConfirmation";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/details/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/payment" element={<Protected><Payment /></Protected>} />
            <Route path="/orderconfirmation" element={<OrderConfirmation />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
    )
}

export default AllRoutes;