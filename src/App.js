import './App.css';
import UserInput from './components/UserInput';
import Result from './components/Result';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    InitialInvestment: 15000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10
  })

  const checkValid = userInput.Duration >= 1

  function handleUserInput(identifire, value) {
    setUserInput((prv) => {
      return {
        ...prv, [identifire]: +value
      }
    })
  }

  return (
    <div id='main'>
      <UserInput inputValue={userInput} onInputUpdate={handleUserInput} />
      <hr></hr>
      {checkValid ? <Result inputNumber={userInput}/> : "Please Enter Duration More Than Zero"}
    </div>
  );
}

export default App;
