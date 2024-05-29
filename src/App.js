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
import EqualButton from "./components/equal-button/EqualButton";
import * as Icons from "./components/icons";

function App() {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [removed, setRemoved] = useState([]);
  const [prevBase, setPrevBase] = useState("");
  const [base, setBase] = useState("Dec");

  return (
    <MyContext.Provider
      value={{ userInput, setUserInput, stack, setStack, removed, setRemoved, prevBase, setPrevBase, base, setBase
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
                    <EqualButton name={<Icons.Equal />} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.BaseButton name="Bin" />
                  </Col>
                  <Col>
                    <Buttons.BaseButton name="Dec" />
                  </Col>
                  <Col>
                    <Buttons.BaseButton name="Doz" />
                  </Col>
                  <Col>
                    <Buttons.BaseButton name="Hex" />
                  </Col>
                  <Col>
                    <Buttons.Button name = "D" className = "number"/>
                  </Col>
                  <Col>
                    <Buttons.Button name = "E" className = "number"/>
                  </Col>
                  <Col>
                    <Buttons.Button name = "F" className = "number"/>
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
                    <Buttons.Button name="A" className="number"/>
                  </Col>
                  <Col>
                    <Buttons.Button name="B" className="number"/>
                  </Col>
                  <Col>
                    <Buttons.Button name="C" className="number"/>
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
                    <Buttons.Button name="7" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="8" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="9" className="number" />
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
                    <Buttons.Button name="4" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="5" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="6" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Multiplication />} type="mul" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name="altSin" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altCos" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altTan" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name={<Icons.TenPowerX />} type="tenpowerx" />
                  </Col>
                  <Col>
                    <Buttons.Button name="1" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="2" className="number" />
                  </Col>
                  <Col>
                    <Buttons.Button name="3" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Minus />} type="minus" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Buttons.Button name="altAsin" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altAcos" type="func" />
                  </Col>
                  <Col>
                    <Buttons.Button name="altAtan" type="func" />
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
