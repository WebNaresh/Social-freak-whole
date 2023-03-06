import React, { useContext } from "react";
import UseContext from "../UseState/UseContext";
import LoginContext from "./LoginContext";
export const LoginState = (props) => {
  const { me, setMe } = useContext(UseContext);
  const handleFaceBookLogin = (responese) => {
    console.log(responese);
  };

  const handleFacebookComponentClicked = (response) => {
    console.log(response);
  };
  const handleGoogleLogin = (e) => {
    console.log(e);
  };
  const handleGoogleLoginFail = (e) => {
    console.log(e);
  };
  return (
    <LoginContext.Provider
      value={{
        handleFaceBookLogin,
        handleFacebookComponentClicked,
        handleGoogleLoginFail,
        handleGoogleLogin,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginState;
