import React, { useEffect } from "react";
import { useContext } from "react";
import UseContext from "../UseState/UseContext";
import UseEffectContext from "./UseEffectContext";
export const UseEffectState = (props) => {
  const { setProgress, location } = useContext(UseContext);
  const state = { name: "harry", class: "5b" };
  useEffect(() => {
    // console.log(location);
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location]);
  return (
    <UseEffectContext.Provider value={{ state }}>
      {props.children}
    </UseEffectContext.Provider>
  );
};
export default UseEffectState;
