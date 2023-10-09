import Header from "./components/Header";
import { useState } from "react";
import iconNewCharge from "./assets/new-charge.svg";
import Modal from "./components/Modal";
import { generateID } from "./helpers";
import ChargesList from "./components/ChargesList";

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [charges, setCharges] = useState([])

  const handleNewCharge = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  };

  const saveCharge = (charge) => {
    charge.id = generateID()
    charge.dateOf = Date.now()
    setCharges([...charges, charge])

    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div className={modal ? 'lock' : ''}>
      <Header
        charges={charges}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
        <main>
          <ChargesList charges={charges}/>
        </main>
          <div className="new-charge">
            <img
              src={iconNewCharge}
              alt="new charge"
              onClick={handleNewCharge}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveCharge={saveCharge}
        />
      )}
    </div>
  );
}

export default App;
