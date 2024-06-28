import { Box, CircularProgress } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";
import LoginNavbar from "../component/Navbar/LoginNavbar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { authCheckAsync } from "../store/async/authAsync";
import React, { useEffect, useState } from "react";

const IndexLayout = () => {
  const dispatch = useAppDispatch();
  const { isLogin, profile } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLogin,profile);
  
  useEffect(() => {
    dispatch(authCheckAsync())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  console.log(profile);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isLogin ===false) {
    return <Navigate to={"/home"} />;
  }

  if (isLogin && profile.role === "Seller") {
    return <Navigate to={"/seller"} />;
  }

  return (
    <Box>
      <LoginNavbar
        image={profile.photoProfile}
        cartLength={profile.cart?.length > 0 ? profile.cart.length : 0}
      />
      <Outlet />
    </Box>
  );
};

export default IndexLayout;
