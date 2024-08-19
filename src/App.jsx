import "./App.css";
import { useState } from "react";

function App() {

  const [message, setMessage] = useState("Greeting Message");
  const [textInput, setTextInputChange] = useState("");

  const handleTextInputChange = (event) => {
    setTextInputChange(event.target.value);
  }
  const handleClick = () => {
    setMessage(textInput);
  }
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" 
        onChange={handleTextInputChange}/>
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
