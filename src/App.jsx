// App.jsx

import "./App.css";
import { useState } from "react";
import Counter from "./components/01-use-state/Counter";
import Timer from "./components//01-use-state/Timer"; 
import TimerTwo from "./components/01-use-state/TimerTwo"; 
import TimerThree from "./components/01-use-state/TimerThree";
import TimerFour from "./components/01-use-state/TimerFour"; // <== IMPORT
import IronbnbList from './components/IronbnbList';       






function App() {
  const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}
      
      {show && <Timer />}   
      
      {show && <TimerTwo />}  
      
      { show && <TimerThree /> }  
      { show && <TimerFour /> }  
      {show && <IronbnbList />}                 {/* <== ADD  */}
    </div>
  );
}
 
export default App;