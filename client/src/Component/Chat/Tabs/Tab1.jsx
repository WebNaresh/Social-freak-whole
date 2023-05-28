import React, { useContext, useEffect, useState } from "react";
import ChatDisplay from "../ChatDisplay/ChatDisplay";
import UseContext from "../../../State/UseState/UseContext";
import ChatUI from "./ChatUi/ChatUI";

const Tab1 = () => {
  const { me, utils, tabData, setTabData } = useContext(UseContext);
  const [diff, setDiff] = useState([]);
  function getCommonObjectsByProperty(array1, array2, property) {
    var commonObjects = array1.filter(function (obj1) {
      return array2.some(function (obj2) {
        return obj1[property] === obj2[property];
      });
    });
    return commonObjects;
  }
  useEffect(() => {
    let difference = getCommonObjectsByProperty(me.followers, me.following);

    setDiff(difference);
    setTabData((copy) => ({ ...copy, tab1: difference }));
  }, [me.followers, me.following]);
  return (
    <>
      {utils.cuurentUserIdForMsg === null ? (
        <div>
          {tabData.tab1 !== null
            ? tabData.tab1.map((data, i) => {
                return <ChatDisplay key={i} data={data} />;
              })
            : ""}
        </div>
      ) : (
        <>
          <ChatUI />
        </>
      )}
    </>
  );
};

export default Tab1;
