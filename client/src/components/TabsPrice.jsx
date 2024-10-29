import * as React from "react";
import { Box, Tabs, Tab } from "./imports/MuiImports";
import PriceSlide from "./PriceSlide";

export default function TabsPrice() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="glass ">
      <Tabs value={value} onChange={handleChange} centered className="mb-5">
        <Tab label="Zeta Fiber" />
        <Tab label="Zeta Air Fiber" />
        <Tab label="Other" />
      </Tabs>

      <div className="mt-5">
        {value === 0 ? (
          <>
            <h1 className="mb-5">Zeta Fiber</h1>
            <PriceSlide />
          </>
        ) : value === 1 ? (
          <>
            <h1 className="mb-5">Zeta Air Fiber</h1>
            <PriceSlide />
          </>
        ) : value === 2 ? (
          <>
            <h1 className="mb-5">Other</h1>
            <PriceSlide />
          </>
        ) : (
          ""
        )}
      </div>
    </Box>
  );
}
