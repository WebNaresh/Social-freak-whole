import { Stack } from "@mui/material";
import React, { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import Post from "./Post/Post";
import Status from "./Status/Status";

const MainScroll = () => {
  const { posts } = useContext(UseContext);
  return (
    <Stack width={"100%"}>
      <Status />

      {posts.map((data, key) => {
        return <Post key={key} data={data} />;
      })}
    </Stack>
  );
};

export default MainScroll;
