import React from "react";

const Viewer = () => {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
};

export default Viewer;
