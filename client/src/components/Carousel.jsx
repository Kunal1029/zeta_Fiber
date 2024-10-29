/* eslint-disable react/prop-types */

import {
  Button,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ExpandLess,
  ExpandMore,
  AllInclusiveIcon,
  FactCheckIcon,
  ExpandCircleDownSharpIcon,
  NetworkCheckIcon,
} from "./imports/MuiImports";

import { useState } from "react";
import { zetaPlans } from "./priceCardData";
import Carousel from "react-material-ui-carousel";
import "../App.css";

const PriceSlide = () => {
  // Grouping plans into chunks of 3
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const groupedPlans = chunkArray(zetaPlans, 3); // Group into sets of 3 plans

  return (
    <div className="d-flex align-item-center justify-content-center">
      <Carousel
        navButtonsAlwaysVisible={true}
        animation="fade"
        className="carousel-container text-center"
        cycleNavigation={true}
        interval={3000}
        fullHeightHover={true}
        autoPlay={true}
        stopAutoPlayOnHover={true}
      >
        {groupedPlans.map((group, i) => (
          <div className="card-group" key={i}>
            {group.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

function Card({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="card m-auto CIT border-0 mb-3"
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header mb-4 bg-transparent  w-75 m-auto">
        <span>
          <NetworkCheckIcon /> {item.speed}
        </span>
      </div>
      <div className="card-body ">
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
        <h5 className="card-title mt-3">{item.name}</h5>
        <span className="card-text">₹{item.price} +GST/Month</span>
        <Stack direction="row" spacing={3} className="mt-4 mb-4">
          <Button variant="contained" className="">
            Buy Now
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default PriceSlide;
