import React, { Component, useState } from 'react';
import freeCodeCampLogo from '../images/fcc_primary_large.png';
import '../App.css';
import Button from './Button';
import buttons from '../buttons';
import Display from './Display';
import ClearButton from './ClearButton';
import DeleteButton from './DeleteButton';
import {evaluate} from 'mathjs';

let formula = [];
let display = [];

function App() {

function createButton(button) {
  return (
    <Button 
      key={button.key}
      tabKey={button.key}
      name={button.name}
      symbol={button.symbol}
      formula={button.formula}
      type={button.type}
      handleClick={handleClick}
    />
  )  
};

  const [input, setInput] = useState('');

  const handleClick = (symbolValue,formulaValue) => {

    // console.log(input,value);
    if (symbolValue === '=') {
      calculateResult();
    } else {
      formula.push(formulaValue);
      // console.log(formula)
      display.push(symbolValue)
      displayFormula();
    }
  };

  const displayFormula = () => {
    // if (display.length === 0) {
    //   alert('Please insert data')
    // } else{
      let displayR = display.join('');
      setInput(displayR);
    // }
  };
  
  const calculateResult = () => {
    // console.log(formula)
    if (formula.length === 0) {
      alert('Please insert data')
    } else {
      let result = formula.join('');
      try {
        let calculation = evaluate(result);
        calculation = Math.min(calculation, calculation.toFixed(9))
        // console.log(calculation.length)
        setInput(calculation)
        display = [calculation];
        formula = [calculation];
      } catch (error) {
        setInput('Math error')
        display = [];
        formula = [];
      }
    }
  };

  const clearAll = () => { 
    formula = [];
    display = [];
    setInput('');
  };

  const backspace = () => {
    formula.pop();
    display.pop();
    displayFormula();
  }

  return (
    <div className='App'>
       {/*
      <div className='freeCodeCamp-logo-container'>
        <img
        className='freeCodeCamp-logo'
        src={freeCodeCampLogo}
        alt="freeCodeCamp Logo" 
        />
      </div>
      */}
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          {
            buttons.map(button => {
              if (button.key <= 4) {
                return createButton(button)
              }
            })
          }
        </div>
        <div className="row">
          {
            buttons.map( (button) => {
              {/* console.log(button) */}
              return ((button.key >= 5) && (button.key <=8)) ?
              createButton(button):
              ''
            })
          }
        </div>
        <div className="row">
          {
            buttons.map( button => {
              if ((button.key >= 9) && (button.key <=12)) {
                return createButton(button);
              } else {
                return null;
              }
            })
          }
        </div>
        <div className="row">
          {
            buttons.map( (button) => (
              ((button.key >= 13) && (button.key <=16)) ?
              createButton(button) :
              ''
            ))
          }
        </div>
        <div className="row">
          {/*// <ClearButton onClick={() => setTimeout('')}>Clear</ClearButton>*/}
          <DeleteButton onClick={backspace}>Delete</DeleteButton>
        </div>
        <div className="row">
          {/*// <ClearButton onClick={() => setTimeout('')}>Clear</ClearButton>*/}
          <ClearButton onClick={clearAll}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
