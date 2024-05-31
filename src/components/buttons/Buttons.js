import React, { useContext } from "react";
import "./button.css";
import { MyContext } from "../../MyContext";

export function Button({ name, type }) {
  const { userInput, setUserInput } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        switch (type) {
          case "func":
            setUserInput(userInput + name + "(");
            break;
          case "pi":
            setUserInput(userInput + "\u{1D70B}");
            break;
          case "phi":
            setUserInput(userInput + "\u{1D711}");
            break;
          case "sqrt":
            setUserInput(userInput + "√(");
            break;
          case "cbrt":
            setUserInput(userInput + "cbrt(");
            break;
          case "nthrt":
            setUserInput(userInput + "nthRoot(");
            break;
          case "tenpowerx":
            setUserInput(userInput + "10^");
            break;
          case "degreecube":
            setUserInput(userInput + "^3");
            break;
          case "degreesqr":
            setUserInput(userInput + "^2");
            break;
          case "xpowern":
            setUserInput(userInput + "^");
            break;
          default:
            setUserInput(userInput + name);
            break;
        }
      }}
    >
      {" "}
      {name}
    </button>
  );
}

export function DigitsDec({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  const { isDec } = useContext(MyContext);
  return (
    <button
      onClick={() => {setUserInput(userInput + name)}} disabled={!isDec}>
      {" "}
      {name}
    </button>
  );
}

export function DigitsDoz({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  const { isDoz } = useContext(MyContext);
  return (
    <button
      onClick={() => {setUserInput(userInput + name)}} disabled={!isDoz}>
      {" "}
      {name}
    </button>
  );
}

export function DigitsHex({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  const { isHex } = useContext(MyContext);
  return (
    <button
      onClick={() => {setUserInput(userInput + name)}} disabled={!isHex}>
      {" "}
      {name}
    </button>
  );
}

export function ClearButton({ name }) {
  const { setUserInput } = useContext(MyContext);
  return <button onClick={() => setUserInput("")}>{name}</button>;
}

export function DeleteButton({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  return (
    <button onClick={() => setUserInput(userInput.slice(0, -1))}>{name}</button>
  );
}

export function BackButton({ name }) {
  const { setUserInput, stack, removed } = useContext(MyContext);
  const undo = () => {
    var popped = Array.prototype.pop.call(stack);
    removed.push(popped);
    setUserInput(stack.join(""));
  };
  return <button onClick={undo}>{name}</button>;
}

export function ForwardButton({ name }) {
  const { userInput, setUserInput, removed } = useContext(MyContext);
  const redo = () => {
    if (removed.length === 0 || removed === undefined) {
      setUserInput(userInput);
    } else {
      console.log(removed);
      var reAdded = Array.prototype.pop.call(removed);
      setUserInput(userInput + reAdded);
    }
  };
  return <button onClick={redo}>{name}</button>;
}

export function RadButton({ name }) {
  const buttonClick = () => {
    document.getElementById("rad").style.backgroundColor = "#3c3c3e";
    document.getElementById("deg").style.backgroundColor = "#292929";
  };
  return (
    <button id="rad" onClick={buttonClick}>
      {name}
    </button>
  );
}

export function DegButton({ name }) {
  const buttonClick = () => {
    document.getElementById("deg").style.backgroundColor = "#3c3c3e";
    document.getElementById("rad").style.backgroundColor = "#292929";
  };
  return (
    <button id="deg" onClick={buttonClick}>
      {name}
    </button>
  );
}
