import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from "../../store/store";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#ffffff", // Ubah sesuai kebutuhan warna background
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Efek bayangan jika diperlukan
}));

const NavBar = () => {
    const navigate = useNavigate()

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to={'/'} style={{textDecoration:"none"}}>
        <img height={'50px'} src="/image.png"/> 
        </Link>
        <Box>
          <Button sx={{border:"2px solid #613D2B",paddingX:"20px",color:"#613D2B",height:"30px"}} onClick={(e)=>navigate('/auth/login')}>
            Login
          </Button>
          <Button sx={{border:"2px solid #613D2B",paddingX:"20px",bgcolor:"#613D2B",height:"30px",color:"white",marginLeft:"20px"}} onClick={(e)=>navigate('/auth/register')}>
            Register
          </Button>
        </Box>
        </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
