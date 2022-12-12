import {Navigate} from "react-router-dom";
import {getToken} from "../utils/authToken";

const PrivateRoute = ({children}) => {
  const isLogined = getToken();
  return isLogined !== null ? children : <Navigate to="/" />;
};

export default PrivateRoute;
