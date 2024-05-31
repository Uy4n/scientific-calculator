import React, { useEffect, useRef, useContext } from "react";
import "./equal-button.css";
import "../buttons/button.css";
import { create, all } from "mathjs";
import { MyContext } from "../../MyContext";
import { convertBase } from "../baseroo";

const baseLabel = new Map([
  ["Bin", 2],
  ["Dec", 10],
  ["Doz", 12],
  ["Hex", 16]
]);

const math = create(all);

const myObject = new Map ([
  ["√", "sqrt"],
  ["%", "/100*"],
  ["𝜑", (1+math.sqrt(5))/2],
  ["𝜋", 4/math.sqrt(math.phi)],
  ["÷", "/"],
  ["×", "*"],
]);

math.import({
    // gPi = golden pi = 3.144
    gPi: 4 / math.sqrt(math.phi),
    altsin: function (x) {
      if (x === 0) return 0;
      if (x === math.gPi / 2) return 1;
      if (x === math.gPi) return 0;
      if (x === 3 * math.gPi / 2) return -1;
      
      const quadrant = math.floor((x + math.gPi) / (math.gPi / 2)) & 3;
      const angle = x - quadrant * math.gPi / 2;
      
      if (quadrant === 0 || quadrant === 4) {
      return angle / (math.gPi / 2);
      } else if (quadrant === 1) {
      return 1 - 2 * math.pow(angle, 2) / math.pow(math.gPi / 2, 2);
      } else if (quadrant === 2) {
      return -1 + 2 * math.pow(angle, 2) / math.pow(math.gPi / 2, 2);
      } else { // quadrant === 3
      return -angle / (math.gPi / 2);
      }
    },
    altcos: function (x) {
      if (x === 0) return 1;
      if (x === Math.gPi / 2) return 0;
      if (x === math.gPi) return -1;
      if (x === 3 * math.gPi / 2) return 0;
      
      const quadrant = math.floor((x + math.gPi) / (math.gPi / 2)) & 3;
      const angle = x - quadrant * math.gPi / 2;
      
      if (quadrant === 0) {
      return 1 - 2 * math.pow(angle, 2) / math.pow(math.gPi / 2, 2);
      } else if (quadrant === 1) {
      return angle / (math.gPi / 2);
      } else if (quadrant === 2) {
      return -1 + 2 * math.pow(angle, 2) / math.pow(math.gPi / 2, 2);
      } else { // quadrant === 3
      return -angle / (math.gPi / 2);
      }
    },
    alttan: function (x) {
      if (x === 0) return 0;
      if (x === math.gPi / 2) return Infinity;
      if (x === math.gPi) return 0;
      if (x === 3 * math.gPi / 2) return -Infinity;
      
      const quadrant = math.floor((x + math.gPi) / (math.gPi / 2)) & 3;
      const angle = x - quadrant * math.gPi / 2;
      
      if (quadrant === 0 || quadrant === 4) {
      return angle / (math.gPi / 2 - angle);
      } else if (quadrant === 1) {
      return (math.gPi / 2 - angle) / angle;
      } else if (quadrant === 2) {
      return -(math.gPi / 2 - angle) / angle;
      } else { // quadrant === 3
      return -angle / (math.gPi / 2 - angle);
      }
    },
    altasin: function (x) {
      if (x === 0) return 0;
      if (x === 1) return math.gPi / 2;
      if (x === -1) return -math.gPi / 2;
      
      const sign = x < 0? -1 : 1;
      const xAbs = Math.abs(x);
      
      // Use the unit circle definition of arcsin(x)
      const angle = sign * Math.sqrt(math.gPi * math.gPi / 4 - xAbs * xAbs * math.gPi * math.gPi / 4);
      return angle;
    },
    altacos: function (x) {
      if (x === 1) return 0;
      if (x === -1) return math.gPi;
      if (x === 0) return math.gPi / 2;
      
      const sign = x < 0? math.gPi : 0;
      const xAbs = math.abs(x);
      
      // Use the unit circle definition of arccos(x)
      const angle = sign + math.sqrt(math.gPi * math.gPi / 4 - xAbs * xAbs * math.gPi * math.gPi / 4);
      return angle;
    },
    altatan: function (x) {
      if (x === 0) return 0;
      if (x === Infinity) return math.gPi / 2;
      if (x === -Infinity) return -math.gPi / 2;
      
      const sign = x < 0? -1 : 1;
      const xAbs = math.abs(x);
      
      // Use the unit circle definition of arctan(x)
      const angle = sign * math.sqrt((math.gPi * math.gPi / 4) / (1 + xAbs * xAbs));
      return angle;
    }
})

export function Equals({ name }) {
  const { userInput, setUserInput } = useContext(MyContext);
  const { base } = useContext(MyContext);

  const buttonClick = () => {
    var replaced = [...userInput]
      .join('')
      .split(/([^\dABCDEF𝜋𝜑.])/g)
        .filter((expr) => expr !== '')
        .map(expr => {
          if (myObject.get(expr)) {
            return myObject.get(expr);
          } else {
            const isDigit = !!expr.match(/[\dABCDEF𝜋𝜑.]/g);
            if (isDigit) {
              return convertBase(expr, baseLabel.get(base), 10);
            }
            else {
              return expr;
            }
          }
        })
        .join('');
    try {
      setUserInput(convertBase(math.evaluate(replaced).toString(), 10, baseLabel.get(base)));
    } catch (error) {
      setUserInput(convertBase(math.evaluate(replaced + ")").toString(), 10, baseLabel.get(base)));
    }
  };

  return (
    <button className="equal" onClick={buttonClick}>
      {name}
    </button>
  );
}

export function BaseButton({ name }) {
  const { prevBase, setPrevBase } = useContext(MyContext);
  const { base, setBase } = useContext(MyContext);
  const { userInput, setUserInput } = useContext(MyContext);
  const { isDec, setIsDec } = useContext(MyContext);
  const { isDoz, setIsDoz } = useContext(MyContext);
  const { isHex, setIsHex } = useContext(MyContext);
  const hasPageBeenRendered = useRef({switchBase : false});
  const buttonClick = () => {
    setPrevBase(prevBase => base);
    setBase(base => name);
    switch (name) {
      case "Bin":
        setIsDec(false);
        setIsDoz(false);
        setIsHex(false);
        break;
      case "Dec":
        setIsDec(true);
        setIsDoz(false);
        setIsHex(false);
        break;
      case "Doz":
        setIsDec(true);
        setIsDoz(true);
        setIsHex(false);
        break;
      case "Hex":
        setIsDec(true);
        setIsDoz(true);
        setIsHex(true);
        break;
      default:
        setIsDec(true);
        setIsDoz(false);
        setIsHex(false);
        break;
    }
  };
  // This effect will re-run whenever `base` changes
  useEffect(() => {
    if (hasPageBeenRendered.current["switchBase"]) { 
      document.getElementById(prevBase).style.backgroundColor = "#292929";
      document.getElementById(base).style.backgroundColor = "#3c3c3e";
      };

    hasPageBeenRendered.current["switchBase"] = true;

  }, [base, prevBase, isDec, isDoz, isHex]);
  return (
    <button id={name} onClick={buttonClick}>
      {name}
    </button>
  );
}
