import React from "react";
import Circle from "../svg/Circle";
const Background = () => {
  return (
    <div>
      <Circle
        position={["-80px", "0px", "0px", "-70px"]}
        height={"60vw"}
        width={"60vw"}
        maxHeight={"500px"}
        maxWidth={"500px"}
        minHeight={"400px"}
        minWidth={"400px"}
      />
      <Circle
        position={["50%", "-50px"]}
        height={"70vw"}
        width={"70vw"}
        maxHeight={"700px"}
        maxWidth={"700px"}
        minHeight={"500px"}
        minWidth={"500px"}
      />
    </div>
  );
};

export default Background;
