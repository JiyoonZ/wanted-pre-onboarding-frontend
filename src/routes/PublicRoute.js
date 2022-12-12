import {Navigate} from "react-router-dom";
import {getToken} from "../utils/authToken";

const PublicRoute = ({children}) => {
  const isLogined = getToken();
  return isLogined !== null ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
