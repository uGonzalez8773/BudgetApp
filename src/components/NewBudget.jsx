import PropTypes from "prop-types";
import { useState } from "react";
import Message from "./Message";


const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()

        if(!budget || budget < 0 ){
            setMessage('Not a valid budget')
            return
        } 

        setMessage('')
        setIsValidBudget(true)
    }

  return (
    <div className="mainContainer container shadow">
      <form onSubmit={handleBudget} className="budget">
        <div className="mainBudget">
          <label htmlFor="">Initial Budget</label>

          <input
            className="newBudget"
            type="number"
            placeholder="Add your budget"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="añadir" />

        {message && <Message tipo="error">{message}</Message>}
      </form>
    </div>
  );
};

NewBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
  setIsValidBudget: PropTypes.bool,
};

export default NewBudget;
