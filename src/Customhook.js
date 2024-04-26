import React from "react";
import CustomHook from "./Customhook"; // Assuming CustomHook is in a separate file

const App = () => {
  const [val, handleChange, handleClick] = CustomHook(); // Destructuring the return values from the custom hook

  return (
    <div>
      <input type="text" value={val} onChange={(e) => handleChange(e.target.value)} />
      <button onClick={handleClick}>Save to LocalStorage</button>
    </div>
  );
};

export default App;
