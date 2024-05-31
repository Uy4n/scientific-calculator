import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
// import usePrevious from "./hooks/usePrevious";
// import useIsMount from "./hooks/useIsMount";
import { MyContext } from "./MyContext";
import Input from "./components/input/Input";
import * as Buttons from "./components/buttons/Buttons";
import AnsButton from "./components/AnsButton";
import Operator from "./components/operator/Operator";
import * as EqualButton from "./components/equal-button/EqualButton";
import * as Icons from "./components/icons";

function App() {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [prevBase, setPrevBase] = useState("");
  const [base, setBase] = useState("Dec");
  const [isDec, setIsDec] = useState(true);
  const [isDoz, setIsDoz] = useState(false);
  const [isHex, setIsHex] = useState(false);

  return (
    <MyContext.Provider
      value={{ userInput, setUserInput, stack, setStack, removed, setRemoved, prevBase, setPrevBase, base, setBase, isDec, setIsDec, isDoz, setIsDoz, isHex, setIsHex
      }}
    >
      <Container className="App">
        <Row className="App-header">
          <p>
            <Icons.Calculator className="logo" />
            Scientific Calculator
          </p>
        </Row>
        <Row className="calculator">
          <Col>
            <Row>
              <Input />
            </Row>
            <Row>
              <Col>
                <Row className="firstRow">
                  <Col>
                    <Buttons.RadButton name="Rad" />
                  </Col>
                  <Col>
                    <Buttons.DegButton name="Deg" />
                  </Col>
                  <Col>
                    <Buttons.BackButton name={<Icons.Back />} />
                  </Col>
                  <Col>
                    <Buttons.ForwardButton name={<Icons.Next />} />
                  </Col>
                  <Col>
                    <AnsButton name="Ans" />
                  </Col>
                  <Col>
                    <Buttons.ClearButton name="AC" />
                  </Col>
                  <Col className="delete">
                    <Buttons.DeleteButton name={<Icons.Backspace />} />
                  </Col>
                  <Col>
                    <EqualButton.Equals name={<Icons.Equal />} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <EqualButton.BaseButton name="Bin" />
                  </Col>
                  <Col>
                    <EqualButton.BaseButton name="Dec" />
                  </Col>
                  <Col>
                    <EqualButton.BaseButton name="Doz" />
                  </Col>
                  <Col>
                    <EqualButton.BaseButton name="Hex" />
                  </Col>
                  <Col>
                    <Buttons.DigitsHex name = "D" className = "number"/>
                  </Col>
                  <Col>
                    <Buttons.DigitsHex name = "E" className = "number"/>
                  </Col>
                  <Col>
                    <Buttons.DigitsHex name = "F" className = "number"/>
                  </Col>
                  <Col sm = {1}>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name="(" />
                  </Col>
                  <Col>
                    <Buttons.Button name=")" />
                  </Col>
                  <Col>
                    <Buttons.Button name="," />
                  </Col>
                  <Col>
                    <Buttons.Button name="e" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDoz name="A" className="number"/>
                  </Col>
                  <Col>
                    <Buttons.DigitsDoz name="B" className="number"/>
                  </Col>
                  <Col>
                    <Buttons.DigitsHex name="C" className="number"/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name={<Icons.Pi />} type="pi" />
                  </Col>
                  <Col>
                    <Buttons.Button name="log" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.XDegreeSquare />} type="degreesqr" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.SquareRoot />} type="sqrt" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="7" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="8" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="9" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Divide />} type="divide" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name={<Icons.Phi />} type="phi" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.CubeRoot />} type="cbrt" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.XPowerN />} type="xpowern" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.NthRoot />} type="nthrt" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="4" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="5" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="6" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Multiplication />} type="mul" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name="altsin" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altcos" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="alttan" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.TenPowerX />} type="tenpowerx" />
                  </Col>
                  <Col>
                    <Buttons.Button name="1" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="2" className="number" />
                  </Col>
                  <Col>
                    <Buttons.DigitsDec name="3" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Minus />} type="minus" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name="altasin" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altacos" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altatan" type="func" />
                  </Col>
                  <Col sm = {1}>
                  </Col>
                  <Col>
                    <Buttons.Button name="%" />
                  </Col>
                  <Col>
                    <Buttons.Button name="0" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="." />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Plus />} type="plus" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </MyContext.Provider>
  );
}

export default App;
