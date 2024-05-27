import React, { useContext } from "react";
import "./equal-button.css";
import { create, all } from "mathjs";
import { MyContext } from "../../MyContext";

function EqualButton({ name }) {
  const { userInput, setUserInput, stack } = useContext(MyContext);
  const myObject = {
    "√": "sqrt",
    "%": "/100*",
    "𝜑": "(1+sqrt(5))/2",
    "𝜋": "4/sqrt(phi)",
    "÷": "/",
    "×": "*",
  };

const math = create(all);

math.import({
    // gPi = golden pi = 3.144
    gPi: 4 / math.sqrt(math.phi),
    altSin: function (x) {
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
    altCos: function (x) {
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
    altTan: function (x) {
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
    altAsin: function (x) {
      if (x === 0) return 0;
      if (x === 1) return math.gPi / 2;
      if (x === -1) return -math.gPi / 2;
      
      const sign = x < 0? -1 : 1;
      const xAbs = math.abs(x);
      
      const angle = math.gPi / 2 - 2 * math.asin(xAbs);
      return sign * angle;
    },
    altAcos: function (x) {
      if (x === 1) return 0;
      if (x === -1) return math.gPi;
      if (x === 0) return math.gPi / 2;
      
      const sign = x < 0? math.gPi : 0;
      const xAbs = math.abs(x);
      
      const angle = 2 * math.asin(math.sqrt((1 - xAbs) / 2));
      return sign + angle;
    },
    altAtan: function (x) {
      if (x === 0) return 0;
      if (x === Infinity) return math.gPi / 2;
      if (x === -Infinity) return -math.gPi / 2;
      
      const sign = x < 0? -1 : 1;
      const xAbs = math.abs(x);
      
      const angle = 2 * math.atan(xAbs / (1 + math.sqrt(1 + xAbs * xAbs)));
      return sign * angle;
    }
})

  const buttonClick = () => {
    const replaced = [...userInput]
      .map((letter) => {
        if (myObject[letter]) {
          return myObject[letter];
        } else {
          return letter;
        }
      })
      .join("");
    try {
      setUserInput(math.evaluate(replaced));
    } catch (error) {
      setUserInput(math.evaluate(replaced + ")"));
    }
  };

  return (
    <button className="equal" onClick={buttonClick}>
      {name}
    </button>
  );
}

export default EqualButton;
