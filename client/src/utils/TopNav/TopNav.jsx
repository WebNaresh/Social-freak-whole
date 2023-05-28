import * as React from "react";
import { styled } from "@mui/material/styles";

import {
  Add,
  AddAPhotoOutlined,
  Chat,
  Login,
  Logout,
  Search as SearchIcon,
} from "@mui/icons-material/";

import {
  Button,
  Avatar,
  MenuItem,
  Badge,
  InputBase,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Menu,
} from "@mui/material/";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import UseContext from "../../State/UseState/UseContext";
import TestContext from "../../State/Test/TestContext";
import { Link } from "react-router-dom";
import CreateModal from "../../Component/Main/createModal/CreateModal";
import {
  handleCloseCreate,
  handleOpenCreate,
} from "../../State/Function/Fuction";
import { Modal } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#eeeeee",
  "&:hover": {
    backgroundColor: "#eeeeee",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolutge",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "Inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopNav() {
  const {
    me,
    setOpen,
    open,
    data,
    setData,
    utils,
    removeCookie,
    setMe,
    setUtils,
    userId,
    setChats,
    chat,
  } = useContext(UseContext);
  const { handleLoader } = useContext(TestContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setUtils((utils) => ({
      ...utils,
      cuurentUserIdForMsg: null,
      chatSpinner: false,
    }));
    userId.current = null;
    setChats([]);
    chat.current = [];
  };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };
  const removeCookieFromBack = () => {
    handleLoader(true, "#E36049", 4000);
    removeCookie("login", { expires: new Date(0) });
    console.log("worked");
    setTimeout(() => {
      setMe({
        backgroundPicture: null,
        birthDate: null,
        collegeName: null,
        descriptionHighLight: null,
        followers: [],
        following: [],
        hashTags: null,
        hobby: null,
        memories: null,
        post: null,
        profilePicture: null,
        relationShip: null,
        taggedPeople: null,
        userEmail: null,
        userName: null,
        location: null,
        nickName: null,
        friends: null,
        userSuggestion: [],
        _id: null,
      });
    }, 3000);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={"/profile"}>
        <MenuItem onClick={handleMenuClose}>
          {" "}
          <Avatar
            sx={{ width: 30, height: 30, marginRight: 1 }}
            variant="circular"
            src={me.profilePicture}
            alt="wait"
          />{" "}
          Setting{" "}
        </MenuItem>
      </Link>
      <Link to={"/messages"}>
        <MenuItem onClick={handleMenuClose}>
          <Chat sx={{ marginX: 1 }} fontSize="small" />
          Chat{" "}
        </MenuItem>
      </Link>

      {me?._id === null || undefined ? (
        <Link to={"/login"}>
          {" "}
          <MenuItem onClick={handleMenuClose}>
            <Login sx={{ marginX: 1 }} fontSize="small"></Login> Login
          </MenuItem>
        </Link>
      ) : (
        <Link onClick={removeCookieFromBack} to={"/login"}>
          <MenuItem onClick={handleMenuClose}>
            {" "}
            <Logout sx={{ marginX: 1 }} fontSize="small"></Logout> Logout
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  // const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: {
          sm: "8vh",
          md: "9vh",
          xs: "8vh",
          lg: "9vh",
          xl: "9vh",
        },
      }}
    >
      <AppBar
        sx={{
          height: {
            sm: "8vh",
            md: "9vh",
            xs: "8vh",
            lg: "9vh",
            xl: "9vh",
          },
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ width: 120 }}>
            <Typewriter
              options={{
                strings: [
                  "SocialFreak",
                  "SocialMedia",
                  "SocialGroup",
                  "SocialFun",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Search
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="
Search
"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                borderRadius: 5,
                paddingX: 4,
                height: 35,
                margin: "auto",
                display: { xs: "flex", md: "flex" },
              }}
              variant="contained"
              color="secondary"
              startIcon={<AddAPhotoOutlined />}
              onClick={() => {
                handleOpenCreate(setOpen, open);
                setData({
                  ...data,
                  title: "Add an Title",
                  hashtagArray: ["example"],
                  taggedPeopleArray: ["example"],
                  uploadedImages: [],
                  imageArray: [],
                  files: null,
                  buttonDisable: true,
                });
              }}
            >
              {" "}
              Create
            </Button>
            <Modal
              open={open.createModal}
              onClose={() => handleCloseCreate(setOpen, open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CreateModal />
            </Modal>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge
                badgeContent={utils.messageNotification.length}
                color="error"
              >
                <Avatar variant="circular" src={me.profilePicture} alt="wait" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
