import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice, randInt } from "./random";

const defaultColors = [
  "Indigo", "Purple", "MediumVioletRed", "DeepPink", "DarkViolet", "DarkSlateBlue",
  "HotPink", "BlueViolet", "DarkOrchid", "Fuchsia", "MediumOrchid", "MediumPurple", "Orchid",
  "Plum", "Aquamarine", "Aqua", "DarkTurquoise", "CadetBlue", "PaleTurquoise", "LightCyan",
];

//EXAMPLE WITHOUT ARROW FUNCTIONS:

function BoxesContainer({ allColors = defaultColors, numBoxes = 16 }) {
  // note: passes function, so this can be only called once at start
  const [boxes, setBoxes] = useState(getInitialRandomColors());

  /** Return array of random colors. */
  function getInitialRandomColors() {
    function choice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    return Array.from(
      { length: numBoxes },
      function () {
        return choice(allColors);
      }
    );
  }

   /** On button click: pick random box, change to random color. */
   function handleClick(evt) {
    setBoxes(boxes => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
      <div>
        <section className="BoxesContainer">{boxComponents}</section>
        <button onClick={handleClick}>Change a Box</button>
      </div>
  );
}


export default BoxesContainer;










//EXAMPLE WITH ARROW FUNCTIONS:

/** Container for set of colored boxes.
 *
 * Props:
 * - numBoxes: # of boxes to manage
 * - allColors: array of random colors to choose
 *
 * State:
 * - boxes: array of box color strings
 */

// function BoxesContainer({ allColors = defaultColors, numBoxes = 16 }) {
//   // note: passes function, so this can be only called once at start
//   const [boxes, setBoxes] = useState(getInitialRandomColors);

//   /** Return array of random colors. */
//   function getInitialRandomColors() {
//     return Array.from(
//         { length: numBoxes },
//         () => choice(allColors));
//   }

//   /** On button click: pick random box, change to random color. */
//   function handleClick(evt) {
//     setBoxes(boxes => {
//       let idx = randInt(numBoxes);
//       let boxCopy = [...boxes];
//       boxCopy[idx] = choice(allColors);
//       return boxCopy;
//     });
//   }

//   const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

//   return (
//       <div>
//         <section className="BoxesContainer">{boxComponents}</section>
//         <button onClick={handleClick}>Change a Box</button>
//       </div>
//   );
// }


// export default BoxesContainer;
