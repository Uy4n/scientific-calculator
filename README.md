<h1 align="center"> Scientific Calculator </h1>

<p align="center">
  <img src="https://img.shields.io/github/stars/mihrilp/scientific-calculator"/>
  <img src="https://img.shields.io/github/forks/mihrilp/scientific-calculator"/>
  <img src="https://img.shields.io/github/license/mihrilp/scientific-calculator"/>
  <img src="https://img.shields.io/github/issues/mihrilp/scientific-calculator"/>
<p>

<br>

![React App - Google Chrome 7_4_2022 2_09_29 PM (2)](https://user-images.githubusercontent.com/58886855/177143239-c8489a04-b10a-4422-9ff5-ba4a2bf49163.png)
<br><br>

## What I Use?

  * [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  * [React Bootstrap](https://react-bootstrap.github.io/)
  * [Math.js](https://mathjs.org/)
  * [Svgr](https://react-svgr.com/)
<br>

## Available Scripts

In the project directory, you can run:

### `npm install`
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Includes new value of π = 4/√φ

Problems: mathjs can't evaluate different bases.
@cheprasov/Base-Converter can't convert fractional parts of non-integers.
disabled feature of React buttons seems to be overriden by exported buttons

Alternative: Parse expressions between their digits and symbols, allow their digits to change base, then only evaluate in base 10. To do this: parse digits and symbols, change digits to base 10, math.evaluate, change digits back to original base, then display.
Ultimate goal: to create a calculator that can evaluate expressions in arbitrary bases.

If you want to change the symbols used for bases, you'll have to edit baseroo files, EqualButton, Buttons

