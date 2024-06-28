import { Box, CircularProgress, Container } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import SellerNavbar from "../component/Navbar/SellerNavbar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect, useState } from "react";
import { authCheckAsync } from "../store/async/authAsync";

const SellerLayout = () => {
  const dispatch = useAppDispatch();
  const { isLogin, profile } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(authCheckAsync())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isLogin === true &&profile.role === "Buyer") {
    return <Navigate to={"/"} />;
  }else if (isLogin === false){
    return <Navigate to={'/home'}/>
  }

  return (
    <Box>
      <SellerNavbar image={profile.photoProfile} />
      <Outlet />
    </Box>
  );
};

export default SellerLayout;
