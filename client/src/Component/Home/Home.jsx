import { Stack, Paper } from "@mui/material";
import Chat from "../Chat/Chat";
import MainScroll from "../Main/MainScroll";
import Profile from "../Profile/Profile";

const Home = () => {
  return (
    <Stack
      flexDirection={"row"}
      sx={{ background: "#eeeeee" }}
      width={"100%"}
      height={"92vh"}
    >
      <Stack
        variant="elevation"
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
        elevation="4"
        sx={{ margin: 2 }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            height: "100%",
            background: "#eee",
            padding: "4px",
            overflowY: "scroll",
          }}
        >
          <Profile />
        </Paper>
      </Stack>
      <Stack
        variant="elevation"
        justifyContent={"center"}
        alignItems={"center"}
        width={"40%"}
        elevation="4"
        sx={{
          margin: "14px 0px",
          padding: "4px",
          overflowY: "scroll",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <MainScroll />
        </Stack>
      </Stack>
      <Stack
        variant="elevation"
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
        elevation="4"
        sx={{
          margin: 2,
          // overflowY: "scroll",
          padding: "4px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "88vh",
          }}
        >
          {" "}
          <Chat />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
