import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, Stack } from "@mui/material";
import { Comment } from "@mui/icons-material";

export default function Post({ data }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px 0px" }}>
      <CardHeader
        avatar={<Avatar src={data.userImage} aria-label="recipe" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.userName}
        subheader={data.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image[0]}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          flexDirection={"row"}
          variant="body2"
          color="text.secondary"
          display={"flex"}
        >
          {data.title}
          <Stack>
            <Typography
              sx={{ cursor: "pointer", flexDirection: "row" }}
              variant="subtitle2"
              color={"#3999e7"}
              display={"flex"}
            >
              {data.hashtags.map((data) => {
                return (
                  <Link href="#" underline="none" color={"#3999e7"}>
                    &nbsp; @{data}
                  </Link>
                );
              })}
            </Typography>
          </Stack>
        </Typography>
        <Stack>
          <Typography
            sx={{ cursor: "pointer", flexDirection: "column" }}
            variant="subtitle2"
            color={"#3999e7"}
            display={"flex"}
          >
            {data.hashtags.map((data) => {
              return (
                <Link href="#" underline="none" color={"#3999e7"}>
                  #{data}
                </Link>
              );
            })}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <Stack width={"100%"}>
          <Stack width={"100%"} flexDirection={"row"}>
            <IconButton
              aria-label="add to favorites"
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <FavoriteIcon color="disabled" />
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"8px"}
              >
                {data.likes}
              </Typography>
            </IconButton>
            <IconButton
              sx={{ display: "flex", flexDirection: "column" }}
              aria-label="share"
            >
              <ShareIcon />
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"8px"}
              >
                Share
              </Typography>
            </IconButton>
            <IconButton
              sx={{ display: "flex", flexDirection: "column" }}
              aria-label="share"
            >
              <Comment />
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={"8px"}
              >
                Comment
              </Typography>
            </IconButton>
          </Stack>
          {/* <Stack>
            {" "}
            <FormControl variant="standard">
              <Input
                id="input-with-icon-adornment"
                sx={{ width: "100%", outline: "none" }}
                startAdornment={
                  <InputAdornment position="start">
                    <Avatar
                      variant="circular"
                      src={me.profilePicture}
                      alt={me.userName}
                      sx={{ width: "30px", height: "30px", margin: "1px" }}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="send">
                      <Send />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack> */}
        </Stack>
      </CardActions>
    </Card>
  );
}
