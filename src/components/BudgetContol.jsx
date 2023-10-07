import PropTypes from "prop-types";


const BudgetContol = ({ budget }) => {

    const moneyFormat = ( amount ) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="mainContainer container shadow two-columns">
      <div>
        <p>Grafica principal</p>
      </div>

      <div className="validBudget">
        <p>
          <span>Budget: </span> {moneyFormat(budget)}
        </p>

        <p>
          <span>Available: </span> {moneyFormat(budget)}
        </p>
        
        <p>
          <span>Left: </span> {moneyFormat(budget)}
        </p>
      </div>
    </div>
  );
};

BudgetContol.propTypes ={
    budget: PropTypes.number,
}

export default BudgetContol;
