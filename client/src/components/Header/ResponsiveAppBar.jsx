import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import "../../App.css";


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
    <AppBar position="fixed" className="appBar px-5 animate__animated animate__fadeInDown">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              src="./image/FL.png"
              alt="Logo"
              width="170"
              height="85"
              className="d-inline-block align-text-top animate__animated animate__fadeInLeft"
              style={{ objectFit: "contain" }}
            />
          </Box>  {/* logo main */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} className="">
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
              <div onClick={handleCloseNavMenu} className="muiNavRes">
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
            </Menu>
          </Box> {/* menu resp */}

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
          </Box>  {/* logo resp */}
          

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center", // Align items vertically centered
              justifyContent: "flex-end", // Align items to the left
            }}
            className="muiNav  animate__animated animate__fadeInRight"
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
          </Box> {/* main menu */}

          <Box sx={{ flexGrow: 0 }} className="animate__animated animate__fadeInRight">
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
          </Box> {/* user dropdown */}


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
