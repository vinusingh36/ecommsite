import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Protected from "./Proctected"

const AllRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<>Login Page</>} />
            <Route path="/products" element={<>Products Page</>} />
            <Route path="/products/details/:id" element={<>Products Details Page</>} />
            <Route path="/cart" element={<>Cart Page</>} />
            <Route path="/wishlist" element={<>Wishlist Page</>} />
            <Route path="/payment" element={<Protected><div>Payment Page</div></Protected>} />
            <Route path="/aboutus" element={<>AboutUs</>} />
            <Route path="*" element={<>Page Not Found </>} />
        </Routes>

    )
}

export default AllRoutes;