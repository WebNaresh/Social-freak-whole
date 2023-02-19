import { Stack, Paper } from "@mui/material";
import Chat from "../Chat/Chat";
import MainScroll from "../Main/MainScroll";

const Home = () => {
  return (
    <Stack
      flexDirection={"row"}
      sx={{ background: "#eeeeee" }}
      width={"100vw"}
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
        <Paper sx={{ width: "100%", height: "100%" }}>
          <Chat />
        </Paper>
      </Stack>
      <Stack
        variant="elevation"
        justifyContent={"center"}
        alignItems={"center"}
        width={"40%"}
        elevation="4"
        sx={{ margin: 2 }}
      >
        <Paper sx={{ width: "100%", height: "100%" }}>
          <MainScroll />
        </Paper>
      </Stack>
      <Stack
        variant="elevation"
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
        elevation="4"
        sx={{ margin: 2 }}
      >
        <Paper sx={{ width: "100%", height: "100%" }}>
          {" "}
          <Chat />
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Home;
