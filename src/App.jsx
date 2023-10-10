import Header from "./components/Header";
import { useState, useEffect } from "react";
import iconNewCharge from "./assets/new-charge.svg";
import Modal from "./components/Modal";
import { generateID } from "./helpers";
import ChargesList from "./components/ChargesList";
import FilterCharges from "./components/FilterCharges";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [charges, setCharges] = useState(
    localStorage.getItem('charges') ? JSON.stringify(localStorage.getItem('charges')) : []
  )
  const [filter, setFilter] = useState('')
  const [filterCharges, setFilterCharges] = useState([])
  const [editCharges, setEditCharges] = useState({})

  useEffect(() => {
    if( Object.keys(editCharges).length > 0 ) {
      setModal(true)
  
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editCharges])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  },[budget])

  useEffect(() => {
    localStorage.setItem('charges', JSON.stringify(charges) ?? [])
  }, [charges])
  
  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if( budgetLS > 0 ){
      setIsValidBudget(true)
    }
  },[])

  useEffect(() => {
    if(filter){
      const filteredCharges = charges.filter( charge => charge.category === filter)
      setFilterCharges(filteredCharges)
    }
  }, [filter, charges])

  const handleNewCharge = () => {
    setModal(true)
    setEditCharges({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  };

  const saveCharge = (charge) => {
    if(charge.id){
      const updatedCharges = charges.map( chargeState => chargeState.id ===
      charge.id ? charge : chargeState)
      setCharges(updatedCharges)
      setEditCharges({})
    } else {
      charge.id = generateID()
      charge.dateOf = Date.now()
      setCharges([...charges, charge])
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const deleteCharge = id =>{
    const updatedCharges = charges.filter( charge => charge.id !== id)

    setCharges(updatedCharges)
  }

  return (
    <div className={modal ? 'lock' : ''}>
      <Header
        charges={charges}
        setCharges={setCharges}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
        <main>
          <FilterCharges
            filter={filter}
            setFilter={setFilter}  
          />
          <ChargesList 
          charges={charges}
          setEditCharges={setEditCharges}
          deleteCharge={deleteCharge}
          filter={filter}
          filterCharges={filterCharges}
          />
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
          editCharges={editCharges}
          setEditCharges={setEditCharges}
        />
      )}
    </div>
  );
}

export default App;
