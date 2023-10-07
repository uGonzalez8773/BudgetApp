import Header from "./components/Header"
import { useState } from "react"

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  
  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
    </div>
  )
}

export default App
