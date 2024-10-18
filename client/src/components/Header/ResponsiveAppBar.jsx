import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "../../App.css";

const pages = ["Home", "About", "Services", "Plans", "Contact Us"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = ["Login", "Register"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src="./image/FL.png"
              alt="Logo"
              width="170"
              height="85"
              className="d-inline-block align-text-top"
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

          <Box
            noWrap
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, flexGrow: 1 }}
          >
            <img
              src="./image/FL.png"
              alt="Logo"
              width="170"
              height="85"
              className="d-inline-block align-text-top"
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center", // Align items vertically centered
              justifyContent: "flex-end", // Align items to the left
            }}
            className="muiNav"
          >
            <div onClick={handleCloseNavMenu} className="muiNav1 mr-5">
              {/* {page} */}
              <ul className="m-auto">
                <li className=" active">
                  <Link to={"/"} className="">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="">
                  <Link to={"/about"} className="">
                    About
                  </Link>
                </li>
                <li className="">
                  <Link to={"/service"} className="">
                    Services
                  </Link>
                </li>
                <li className="">
                  <Link to={"/price"} className="">
                    Plans
                  </Link>
                </li>
                <li className="">
                  <Link to={"/contact"} className="">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* // ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <div onClick={handleOpenUserMenu}>
                <i className="fa-regular fa-xl fa-circle-user text-white"></i>
              </div>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}

              <div onClick={handleCloseUserMenu} className="muiDD">
                <ul className="">
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>

                  <li className="">
                    <Link to={"/register"}>Register</Link>
                  </li>
                </ul>
              </div>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
