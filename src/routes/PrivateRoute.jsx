import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const{user,isloading}=useAuth()

    if(isloading){
        return <div>Loading.....</div>
    }
    if(!isloading && !user?.email){
        return <Navigate to="/login"></Navigate>
    }


    return children
};

export default PrivateRoute;