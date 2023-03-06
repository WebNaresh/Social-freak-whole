import * as React from "react";
import {
  Card,
  CardContent,
  Stack,
  Paper,
  TextField,
  Button,
} from "@mui/material";
// import { useContext } from "react";
// import UseContext from "../../../../State/UseState/UseContext";

const UpdateProfileInfo = () => {
  // const { me, open, setOpen } = useContext(UseContext);
  return (
    <div>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ marginBottom: 2 }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              bottom: "10px",
              padding: "0px",
              marginTop: "8rem",
            }}
          >
            <Paper variant="outline">
              <Stack flexDirection={"column"}>
                <TextField
                  variant="filled"
                  id="userName"
                  label="College/School Name"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="Location"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="NickName"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="Hobbie"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="BirthDate"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="TaggedPeople"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="HashTags"
                  sx={{ margin: "10px 10px" }}
                />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </Paper>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
};

export default UpdateProfileInfo;
