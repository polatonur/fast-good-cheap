import "./App.css";
import { useState } from "react";

function App() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [lastButton, setLastButton] = useState(0);

  const checkButton1 = () => {
    if (button1) {
      return setButton1(false);
    } else if (button2 && button3) {
      if (lastButton === 2) {
        setButton2(false);
      } else {
        setButton3(false);
      }
      setLastButton(1);
      return setButton1(true);
    } else {
      setLastButton(1);
      return setButton1(true);
    }
  };
  const checkButton2 = () => {
    if (button2) {
      return setButton2(false);
    } else if (button1 && button3) {
      if (lastButton === 1) {
        setButton1(false);
      } else {
        setButton3(false);
      }
      setLastButton(2);
      return setButton2(true);
    } else {
      setLastButton(2);
      return setButton2(true);
    }
  };
  const checkButton3 = () => {
    if (button3) {
      return setButton3(false);
    } else if (button2 && button1) {
      if (lastButton === 2) {
        setButton2(false);
      } else {
        setButton1(false);
      }
      setLastButton(3);
      return setButton3(true);
    } else {
      setLastButton(3);
      return setButton3(true);
    }
  };
  return (
    <main>
      <ul>
        <li>
          <div
            style={{
              backgroundColor: button1 ? "green" : "red",
            }}
            onClick={checkButton1}
            className="circle "
          >
            <div className="inner-cercle"></div>
          </div>{" "}
          <span>FAST</span>
        </li>
        <li>
          <div
            style={{
              backgroundColor: button2 ? "green" : "red",
            }}
            onClick={checkButton2}
            className="circle "
          >
            <div className="inner-cercle"></div>
          </div>{" "}
          <span>GOOD</span>
        </li>
        <li>
          <div
            style={{
              backgroundColor: button3 ? "green" : "red",
            }}
            onClick={checkButton3}
            className="circle"
          >
            <div className="inner-cercle"></div>
          </div>{" "}
          <span>CHEAP</span>
        </li>
      </ul>
    </main>
  );
}

export default App;
