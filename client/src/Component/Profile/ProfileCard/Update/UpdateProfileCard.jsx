import * as React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Avatar,
  Stack,
  IconButton,
  Paper,
  Badge,
  TextField,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useContext } from "react";
import UseContext from "../../../../State/UseState/UseContext";
import { handleOpenCard } from "../../../../State/Function/Fuction";

const UpdateProfileCard = () => {
  const { me, open, setOpen } = useContext(UseContext);
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
          <CardMedia
            sx={{ height: "20vh" }}
            image={me.backgroundPicture}
            title={`${me.userName} background pic`}
            style={{ backgroundPosition: "inherit" }}
          />
          <IconButton
            aria-label="Edit Profile"
            style={{ borderRadius: "10px" }}
            onClick={() => handleOpenCard(setOpen, open)}
            sx={{
              margin: "auto",
              position: "relative",
              left: "95%",
              top: "-20vh",
            }}
            color={"primary"}
          >
            <Edit fontSize="1px" />
          </IconButton>
          <Badge
            color="primary"
            badgeContent={<Edit fontSize="large" />}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{
              position: "absolute",
              left: "48%",
              transform: "translate(-50%, -50%)",
              height: "200px",
              span: {
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
              },
            }}
          >
            <Avatar
              sx={{
                width: "20vw",
                height: "20vh",
                margin: "auto",
                position: "relative",
                left: "15px",
                top: "-15px",
                boxShadow: "2px 7px 23px #605c5c",
              }}
              variant="circular"
              src={me.profilePicture}
              style={{ backgroundPosition: "inherit" }}
              alt="wait"
              title={`${me.userName} profile pic`}
            />{" "}
          </Badge>
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
                  label="UserName"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="Hignlight     1"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="Hignlight     2"
                  sx={{ margin: "10px 10px" }}
                />
                <TextField
                  variant="filled"
                  id="userName"
                  label="Hignlight     3"
                  sx={{ margin: "10px 10px" }}
                />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Stack>
            </Paper>
          </CardContent>
          <CardActions
            sx={{
              borderBottom: "1px solid #e0e0e0",
              borderTop: "1px solid #e0e0e0",
              margin: "10px 10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack>
              <Typography
                fontSize="0.7rem"
                margin={"auto"}
                variant="body2"
                component="div"
              >
                {me.followers}
              </Typography>
              <Typography
                fontSize="0.7rem"
                margin={"auto"}
                variant="subtitle2"
                color="text.secondary"
              >
                Follower
              </Typography>
            </Stack>
            <Stack
              sx={{
                borderLeft: "1px solid #e0e0e0",
                borderRight: "1px solid #e0e0e0",
                padding: "8px 12px",
              }}
            >
              <Typography
                fontSize="0.7rem"
                margin={"auto"}
                variant="body2"
                component="div"
              >
                {me.following}
              </Typography>
              <Typography
                margin={"auto"}
                fontSize="0.7rem"
                variant="body2"
                color="text.secondary"
              >
                Following
              </Typography>
            </Stack>
            <Stack>
              <Typography
                fontSize="0.7rem"
                margin={"auto"}
                variant="body2"
                component="div"
              >
                {me.postCount}
              </Typography>
              <Typography
                margin={"auto"}
                fontSize="0.7rem"
                variant="body2"
                color="text.secondary"
              >
                Post
              </Typography>
            </Stack>
          </CardActions>
        </Card>
      </Paper>
    </div>
  );
};

export default UpdateProfileCard;
