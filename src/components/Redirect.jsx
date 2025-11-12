import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const Redirect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
const token = localStorage.getItem("token");
setIsLoggedIn(token)
}, []);

  if (isLoggedIn) {
    return <Navigate to={`/Profile`} replace />;
  }

  return <Login />;
};
export default Redirect;