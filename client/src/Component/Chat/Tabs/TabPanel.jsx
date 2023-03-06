import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{
        overflow: "auto",
      }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: [0, 2] }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabPanel1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "99.8%",
      }}
    >
      <Box
        sx={{
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Messages" sx={{ fontSize: "12px" }} {...a11yProps(0)} />
          <Tab label="Request(2)" sx={{ fontSize: "12px" }} {...a11yProps(1)} />
          <Tab label="Recent" sx={{ fontSize: "12px" }} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel
        style={{
          height: "80%",
          overflowY: "scroll",
        }}
        value={value}
        index={0}
      >
        <Tab1 />
      </TabPanel>
      <TabPanel
        style={{
          height: "80%",
          overflowY: "scroll",
        }}
        value={value}
        index={1}
      >
        <Tab2 />
      </TabPanel>
      <TabPanel
        style={{
          height: "80%",
          overflowY: "scroll",
        }}
        value={value}
        index={2}
      >
        <Tab3 />
      </TabPanel>
    </Box>
  );
}
