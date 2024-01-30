import React, { useState } from "react";

import "./EightBall.css";
import answers from "./answers.json"
import {genRandom} from "./genRandom"

//EXAMPLE WITH RESTART BUTTON:
// example with 2 buttons (one to ask question, one to reset):

const EightBall = () => {
    const initialAnswer = {
      msg: "Think of a Question.",
      color: "black",
    };
  
    const [answer, setAnswer] = useState(initialAnswer);
  
    // Function to handle the click event
    const handleClick = () => {
      setAnswer(genRandom(answers));
    };
  
    // Resets eightball
    const restart = () => {
      setAnswer(initialAnswer);
    };
  
    return (
      <div className="EightBall" style={{ backgroundColor: answer.color }}>
        <h1>{answer.msg}</h1>
        <button onClick={handleClick}>Ask!</button>
        <button onClick={restart}>Reset!</button>
      </div>
    );
  };
  
  export default EightBall;





//EXAMPLE WITH NO RESTART BUTTON
// const EightBall= () =>{

//     const [answer, setAnswer] = useState({
//         msg: "Think of a Question.",
//         color: "black",
//       }); 



//     // Function to handle the click event
//     const handleClick = () => {
//         const randomAnswer = genRandom();
//         setAnswer(genRandom(answers));
//   };

//   //resets eightball:

// const restart = () =>{
//     setAnswer({
//         msg: "Think of a Question.",
//         color: "black",
//       });
// }




    
//     return(
//         <div 
//             className="EightBall"
//             onClick={handleClick}  
//             style={{backgroundColor: answer.color}}           
//         >
//             <h1>{answer.msg}</h1>                      
//         </div>
//     )

// }   

// export default EightBall;

