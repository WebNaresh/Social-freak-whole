import { Avatar, Badge, Stack, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const ChatDisplay = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",

      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Stack direction={"row"} p={[0, 1]}>
      <Stack
        sx={{
          width: "46px",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{ right: "12px", position: "relative" }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </StyledBadge>
      </Stack>
      <Stack>
        <ButtonGroup
          orientation="vertical"
          variant="text"
          color="primary"
          aria-label=""
        >
          <Stack>
            <Typography fontWeight={"550"} variant="body1" fontSize={"13px"}>
              {" "}
              Edem Quist
            </Typography>
          </Stack>
          <Stack>
            {" "}
            <Typography variant="subtitle2" color={"GrayText"}>
              Are you Fine?.
            </Typography>
          </Stack>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ChatDisplay;
