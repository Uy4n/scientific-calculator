import React, { useEffect, useRef, useContext } from "react";
import "./button.css";
import { MyContext } from "../../MyContext";
import BaseConverter from "../@cheprasov/base-converter/src/BaseConverter";
import baseBinary from "../@cheprasov/base-converter/src/Base/baseBinary";
import baseDecimal from "../@cheprasov/base-converter/src/Base/baseDecimal";
import baseDozenal from "../@cheprasov/base-converter/src/Base/baseDozenal";
import baseHexadecimal from "../@cheprasov/base-converter/src/Base/baseHexadecimal";
import * as math from "mathjs";

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

export function BaseButton({ name }) {
  const { prevBase, setPrevBase } = useContext(MyContext);
  const { base, setBase } = useContext(MyContext);
  const { userInput, setUserInput } = useContext(MyContext);
  const hasPageBeenRendered = useRef({switchBase : false})
  const buttonClick = () => {
    setPrevBase(prevBase => base);
    setBase(base => name);
    // setUserInput(BaseConverter.convert(userInput, baseDecimal, baseBinary));
    // setUserInput(BaseConverter.convert(userInput, prevBase, base));
  };
    // This effect will re-run whenever `base` changes
  useEffect(() => {
    if (hasPageBeenRendered.current["switchBase"]) {
      const baseLabel = new Map([
        ["Bin", baseBinary],
        ["Dec", baseDecimal],
        ["Doz", baseDozenal],
        ["Hex", baseHexadecimal]
      ]);
  
      document.getElementById(prevBase).style.backgroundColor = "#292929";
      document.getElementById(base).style.backgroundColor = "#3c3c3e";
      const replaced = [...userInput];
      var replacedEval = "";
      try {
        replacedEval = math.evaluate(replaced);
      } catch (error) {
        replacedEval = math.evaluate(replaced + ")");
      }
      setUserInput(BaseConverter.convert(replacedEval.join(''), baseLabel.get(prevBase), baseLabel.get(base)));
    }

    hasPageBeenRendered.current["switchBase"] = true;

  }, [base]);
  return (
    <button id={name} onClick={buttonClick}>
      {name}
    </button>
  );
}
