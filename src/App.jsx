import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from 'react'

const initialInputValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}



function App() {
  const [userInput, setUserInput] = useState(initialInputValues);

  function handleChange(inputIndentifier, newValue){
    setUserInput(prevValue => {
      return {
        ...prevValue,
        [inputIndentifier] : +newValue,  
      }
    })
  }

  const isInputValid = userInput.duration > 0;

  return (
    <>
      <Header />
      <UserInput userInput = { userInput } handleChange = { handleChange } />
      { !isInputValid && <p className="center"> Please enter a duration greter than 0 </p> }
      { isInputValid && <Results userInput = { userInput }/> }
    </>
  )
}

export default App
