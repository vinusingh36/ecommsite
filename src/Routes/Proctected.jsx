
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const Protected = ({ children }) => {

    let { isLogin } = useSelector((store) => store.accountsReducer)

    if (isLogin) {
        return children;
    }
    else {
        return <Navigate to="/login" />
    }

}

export default Protected;