import React from "react";
import "./Body.css";

// const Body = ({ name, location, favorit }) => {
//   // console.log(props);

//   const num = 19;

//   return (
//     <div>
//       <h1>Body</h1>
//       <h2>
//         {name}은 {location}에 거주중입니다.
//         <br />
//         {favorit.length}개의 음식을 좋아합니다!
//       </h2>
//       {/* <h2>
//         {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다!
//       </h2> */}
//     </div>
//   );
// };
const Body = ({ children }) => {
  console.log(children);

  return <div>{children}</div>;
};

Body.deafaultProps = {
  favorit: [],
};

export default Body;
