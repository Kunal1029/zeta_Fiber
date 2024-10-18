/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { zetaPlans } from "./priceCardData";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ExpandCircleDownSharpIcon from "@mui/icons-material/ExpandCircleDownSharp";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import "../App.css";
import BuyModal from "./BuyModal";

const PriceSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const slideInterval = 3000; // 3 seconds for auto slide
  const theme = useTheme();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Do not run interval if paused

    const interval = setInterval(handleNext, slideInterval);

    // Cleanup interval when component unmounts or when pause state changes
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isPaused]); // Add isPaused as a dependency

  // Function to handle next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === zetaPlans.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous card
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? zetaPlans.length - 1 : prevIndex - 1
    );
  };

  // Get the cards that should be visible
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      cards.push(zetaPlans[(currentIndex + i) % zetaPlans.length]);
    }
    return cards;
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(zetaPlans.length);

  return (

    <div className="card3 mb-5 ">
      <div className="carousel-container">
        <div className="carousel-inner mb-5">
          {/* Previous Button */}
          <Button
            onClick={handlePrev}
            sx={{
              "&:focus": {
                outline: "none", // Remove the outline on focus
                boxShadow: "none", // Remove box shadow if any
              },
            }}
          >
            <ArrowBackIosIcon />
          </Button>
          {/* Render 3 visible cards */}
          <div className="card-group">
            {getVisibleCards().map((item, index) => {
              const middleIndex = Math.floor(visibleCards / 2);

              return (
                <div key={index} className="">
                  {middleIndex === index ? (
                    <div
                      className={`card-wrapper active bounce`}
                      style={{
                        transform: "scale(1.1)",
                        opacity: "1",
                        transition: "transform 0.4s ease",
                      }}
                    >
                      {/* Pass setIsPaused to the Card component */}
                      <Card item={item} setIsPaused={setIsPaused} />
                    </div>
                  ) : (
                    <div
                      className={`card-wrapper `}
                      style={{
                        transform: "scale(0.9)",
                        transition: "transform 0.4s ease",
                        opacity: "0.6",
                      }}
                    >
                      <Card item={item} setIsPaused={setIsPaused} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            onClick={handleNext}
            sx={{
              "&:focus": {
                outline: "none", // Remove the outline on focus
                boxShadow: "none", // Remove box shadow if any
              },
            }}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>

        {/* Pagination */}
        <MobileStepper
          variant="progress"
          steps={totalPages}
          position="static"
          activeStep={currentIndex}
          className=""
          sx={{ minWidth: 700, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              className="p-0"
              sx={{
                width: "30px", // Set equal width and height for circular shape
                height: "30px",
                borderRadius: "50%",
                outline: "none", // Remove the outline
                padding: "0", // Remove default padding
                minWidth: "0", // Remove minimum width
                minHeight: "0", // Remove minimum height
                "&:focus": {
                  outline: "none", // Remove the outline on focus
                  boxShadow: "none", // Remove box shadow if any
                },
              }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              className="p-0"
              onClick={handlePrev}
              sx={{
                width: "30px", // Set equal width and height for circular shape
                height: "30px",
                borderRadius: "50%",
                outline: "none", // Remove the outline
                padding: "0", // Remove default padding
                minWidth: "0", // Remove minimum width
                minHeight: "0", // Remove minimum height
                "&:focus": {
                  outline: "none", // Remove the outline on focus
                  boxShadow: "none", // Remove box shadow if any
                },
              }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </div>
  );
};

function Card({ item, setIsPaused }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="card text-center m-auto CIT border-0 mb-3 tr"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header mb-4 bg-transparent w-75 m-auto">
        <span>
          <NetworkCheckIcon /> {item.speed}
        </span>
      </div>
      <div className="card-body">
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <AllInclusiveIcon />
            </ListItemIcon>
            <ListItemText primary="Unlimited data (cup)" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <FactCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Monthly Validity" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ExpandCircleDownSharpIcon className="text-dark" />
            </ListItemIcon>
            <ListItemText primary="Available plans" />

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.availablePlans.map((plan, index) => (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <ListItemText primary={plan} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>

        <h5 className="card-title mt-3 text-warning">{item.name}</h5>
        <span className="card-text">₹{item.price} +GST/Month</span>

        <div className="mt-4 mb-4">
          {/* Trigger pausing and unpausing when BuyModal is opened/closed */}
          <BuyModal
            amount={item.price}
            onOpenModal={() => setIsPaused(true)}
            onCloseModal={() => setIsPaused(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default PriceSlide;
