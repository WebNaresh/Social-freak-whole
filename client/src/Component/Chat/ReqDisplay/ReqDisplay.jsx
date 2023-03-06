import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Check, RemoveDone } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";

export default function ReqDisplay() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Card
      sx={{
        margin: "5px 0px",
      }}
    >
      {/* <CardActionArea> */}
      <CardContent>
        <Stack direction={"row"}>
          <Stack>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
          <Stack sx={{ padding: "0px 15px" }}>
            <Typography variant="body2" color="text.primary">
              Randy Otsan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              6 mutual friend
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <Chip
            label="Accept"
            variant="contained"
            icon={<Check />}
            color="primary"
            onClick={handleClick}
            sx={{ margin: "15px 0px" }}
          />
          <Chip
            label="Decline"
            variant="contained"
            icon={<RemoveDone />}
            color="primary"
            onClick={handleClick}
            sx={{ margin: "15px 10px" }}
          />
        </Stack>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
