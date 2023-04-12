import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="ReLoad Your Jobs"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Your Favorite Jobs"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Your Location Jobs"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
