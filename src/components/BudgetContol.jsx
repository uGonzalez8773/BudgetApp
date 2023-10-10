import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

  const BudgetContol = ({ 
    charges, 
    budget,
    setCharges,
    setBudget,
    setIsValidBudget,
  }) => {

    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
      const totalSpent = charges.reduce((total, charge) => charge.amount + total, 0)

      const totalAvailable = budget - totalSpent

      const newPercentage = (((budget - totalAvailable) / budget ) * 100).toFixed(2)
      
      setAvailable(totalAvailable)
      setSpent(totalSpent);
      setTimeout(() => {
        setPercentage(newPercentage)
      }, 1000);
    }, [charges, budget]);

  const moneyFormat = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () =>{
    const response = confirm('Are you sure you want to reset the entire app?')
    if(response){
      setCharges([])
      setBudget(0)
      setIsValidBudget(false)
    } 
  }

  return (
    <div className="mainContainer container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
          })}
          value={percentage}
          text={`${percentage}% Spend`}
        />
      </div>

      <div className="validBudget">
        <button 
          className="reset-app"
          type="button"
          onClick={handleResetApp}
        >
          Reset App
        </button>
        <p>
          <span>Budget: </span> {moneyFormat(budget)}
        </p>

        <p className={`${available < 0 ? 'negative' : ''}`}>
          <span>Available: </span> {moneyFormat(available)}
        </p>

        <p>
          <span>Spent: </span> {moneyFormat(spent)}
        </p>
      </div>
    </div>
  );
};

BudgetContol.propTypes = {
  budget: PropTypes.number,
  charges: PropTypes.array,
  setCharges: PropTypes.array,
  setBudget: PropTypes.number,
  setIsValidBudget: PropTypes.bool,
};

export default BudgetContol;
