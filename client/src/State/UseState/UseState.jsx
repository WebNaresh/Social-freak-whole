import React, { useState } from "react";
import UseContext from "./UseContext";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
export const UseState = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [backdrop, setBackdrop] = useState(false);

  const location = useLocation();

  const [appAlert, setAppAlert] = useState({
    alert: true,
    type: "success",
    msg: "this is success alert",
  });

  const [appLoading, setAppLoading] = useState({
    load: false,
    color: "#fff",
  });

  const [progress, setProgress] = useState(0);
  const [me, setMe] = useState({
    _id: "10101011d11ddf",
    userName: "Xing Fei",
    relationShip: "",
    from: "Maharastra",
    city: "Satara",
    descriptionHighlight: ["Actress", "Influncer", "Korean"],
    following: "278",
    followers: "378",
    profilePicture: "https://wallpapercave.com/wp/wp6159571.jpg",
    backgroundPicture:
      "https://captionsnation.com/wp-content/uploads/2021/06/Xing-Fei-Wiki.jpg",
    userEmail: "xingFei73@gmail.com",
    postCount: 4,
    collegeName: "Rajendra Jr. College Khandala",
    location: "Satara - Maharashtra",
    reletionShip: "single",
    hobby: "Photography",
    birthDate: "29th of December",
    taggedPeople: ["nareshBhosale", "infinite", "colorOs"],
    hashtags: ["nareshBhosale", "infinite", "colorOs"],
    memories: [
      {
        img: "https://captionsnation.com/wp-content/uploads/2021/06/Xing-Fei-Height-And-Weight.jpg",
        title: "Adventure",
      },
      {
        img: "https://i.pinimg.com/originals/4b/37/86/4b3786cd80faf32c148778fa77fc4159.jpg",
        title: "Travelling",
      },
      {
        img: "https://wallpapercave.com/wp/wp6159587.jpg",
        title: "Life",
      },
      {
        img: "https://i.pinimg.com/originals/20/6d/66/206d66f038dace0da3eb98cb560cef9c.jpg",
        title: "Profession",
      },
      {
        img: "https://captionsnation.com/wp-content/uploads/2021/06/Gallery-Xing-Fei1.jpg",
        title: "At Home",
      },
      {
        img: "https://i.pinimg.com/originals/30/b8/ed/30b8edc7f40188a5b60ab1264c9d5de9.jpg",
        title: "AfterBath",
      },
      {
        img: "https://i.pinimg.com/736x/c1/fa/d3/c1fad34035db928ce887aa66428913d3.jpg",
        title: "CuteMoment",
      },
      {
        img: "https://gizmostory.com/wp-content/uploads/2020/12/Put-Your-Head-On-My-Shoulder.jpg",
        title: "MyHoney",
      },
      {
        img: "https://i.pinimg.com/474x/b7/4d/79/b74d79ffce8690bd57d656c42b1dbcce.jpg",
        title: "Tennis",
      },
    ],
  });
  const [moments, SetMoments] = useState([
    {
      coverPhoto:
        "https://images.unsplash.com/photo-1619198511074-680af0a21527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      backgroundPicture:
        "https://images.unsplash.com/photo-1619198831203-6c48a27075f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      userName: "Dev fei",
    },
    {
      coverPhoto:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      backgroundPicture:
        "https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      userName: "xiomi fei",
    },
    {
      coverPhoto:
        "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      backgroundPicture:
        "https://images.unsplash.com/photo-1508449405506-2f559e868bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      userName: "xyne me",
    },
    {
      coverPhoto:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      backgroundPicture:
        "https://images.unsplash.com/photo-1593484330639-614d0634f68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      userName: "Shirley Setia",
    },
    {
      coverPhoto:
        "https://images.unsplash.com/photo-1622804136680-46dc2a8f0598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      backgroundPicture:
        "https://images.unsplash.com/photo-1533729590644-695ded775a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      userName: "Xing Fei",
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: "122",
      userName: "Xing Fei",
      userImage: "https://wallpapercave.com/wp/wp6159459.jpg",
      image: [
        "https://wallpapercave.com/wp/wp6159459.jpg",
        "https://wallpapercave.com/wp/wp6159567.jpg",
      ],
      date: "4rth November 2015",
      title: "Charming Today",
      likes: "4000",
      views: "10000",
      hashtags: ["IamSHine", "fairXing"],
      taggedPeople: ["XangArmy", "xingSupport"],
      location: "Korea",
      comments: [
        {
          userId: "123",
          pic: "https://64.media.tumblr.com/f02b5bd7037c86a9fe164c9fcdb048f2/tumblr_pfkn4soCEq1traf33o8_500.png",
          postId: "fds",
          text: "Ohh lady",
        },
        {
          userId: "123",
          pic: "https://th.bing.com/th/id/OIP.zOX2O0JmhYEDA_VC_iY__QAAAA?pid=ImgDet&rs=1",
          postId: "fds",
          text: "Ohh xing",
        },
      ],
    },
    {
      id: "122",
      userName: "Xing Fei",
      userImage: "https://pbs.twimg.com/media/DMVNXP0U8AEiUDl.jpg:large",
      image: [
        "https://wallpapercave.com/wp/wp6159459.jpg",
        "https://wallpapercave.com/wp/wp6159567.jpg",
      ],
      date: "4rth November 2015",
      title: "Charming Today",
      likes: "4000",
      views: "10000",
      hashtags: ["IamSHine", "fairXing"],
      taggedPeople: ["XangArmy", "xingSupport"],
      location: "Korea",
      comments: [
        {
          userId: "123",
          pic: "https://64.media.tumblr.com/f02b5bd7037c86a9fe164c9fcdb048f2/tumblr_pfkn4soCEq1traf33o8_500.png",
          postId: "fds",
          text: "Ohh lady",
        },
        {
          userId: "123",
          pic: "https://th.bing.com/th/id/OIP.zOX2O0JmhYEDA_VC_iY__QAAAA?pid=ImgDet&rs=1",
          postId: "fds",
          text: "Ohh xing",
        },
      ],
    },
    {
      id: "122",
      userName: "Xing Fei",
      userId: "12",
      userImage:
        "https://i.pinimg.com/originals/50/85/17/5085176f8c5d38858a92c3ebb9cab9df.png",
      image: [
        "https://wallpapercave.com/wp/wp6159459.jpg",
        "https://wallpapercave.com/wp/wp6159567.jpg",
      ],
      date: "4rth November 2015",
      title: "Charming Today",
      likes: "4000",
      views: "10000",
      hashtags: ["IamSHine", "fairXing"],
      taggedPeople: ["XangArmy", "xingSupport"],
      location: "Korea",
      comments: [
        {
          userId: "123",
          pic: "https://64.media.tumblr.com/f02b5bd7037c86a9fe164c9fcdb048f2/tumblr_pfkn4soCEq1traf33o8_500.png",
          postId: "fds",
          text: "Ohh lady",
        },
        {
          userId: "123",
          pic: "https://th.bing.com/th/id/OIP.zOX2O0JmhYEDA_VC_iY__QAAAA?pid=ImgDet&rs=1",
          postId: "fds",
          text: "Ohh xing",
        },
      ],
    },
  ]);
  const [open, setOpen] = React.useState({
    profileCard: false,
    profileInfo: false,
  });

  return (
    <UseContext.Provider
      value={{
        cookies,
        setCookie,
        removeCookie,
        appAlert,
        setAppAlert,
        appLoading,
        setAppLoading,
        progress,
        setProgress,
        location,
        me,
        setMe,
        backdrop,
        setBackdrop,
        moments,
        SetMoments,
        posts,
        setPosts,
        open,
        setOpen,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};
export default UseState;
