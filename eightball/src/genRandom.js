import answers from "./answers.json" 
   
   // gets random index and returns the element(message) at that index
   const genRandom = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
};

export {genRandom}