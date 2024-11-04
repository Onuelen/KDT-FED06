import { atom, selector } from "recoil";
// import React from "react";
// import { createGlobalStyle } from "styled-components";
// // import { useRecoilValue, useRecoilState } from "recoil";
// // import { hourSelector, minutesState } from "./atoms";

// const GlobalStyled = createGlobalStyle`
//   * {
//     margin:0;
//   padding:0;
//   box-sizing:border-box;
//   font-family: "Source Sans 3", serif;
//   }

//   ul,li {
//     list-style:none;
//   }

//   a{
//     text-decoration:none;
//     color:inherit;
//   }
// `;

// const App = () => {
//   const [hours, setHours] = useRecoilState(hourSelector);
//   const [minutes, setMinutes] = useRecoilState(minutesState);
//   const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setMinutes(+event.currentTarget.value);
//   };
//   const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setHours(+event.currentTarget.value);
//   };
//   return (
//     <>
//       <GlobalStyled />
//       <div>
//         <input
//           value={minutes}
//           onChange={onMinutesChange}
//           type="number"
//           placeholder="Minutes"
//         />
//         <input
//           value={hours}
//           onChange={onHoursChange}
//           type="number"
//           placeholder="Hours"
//         />
//       </div>
//     </>
//   );
// };

// export default App;
