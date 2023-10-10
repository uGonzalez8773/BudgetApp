import PropTypes from "prop-types";
import { useEffect, useState } from "react";

  const BudgetContol = ({ charges, budget }) => {

    const [available, setAvailable] = useState(1000)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
      const totalSpent = charges.reduce((total, charge) => charge.amount + total, 0);

      const totalAvailable = budget - totalSpent

      setAvailable(totalAvailable)
      setSpent(totalSpent);
    }, [charges, budget]);

  const moneyFormat = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

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
};

export default BudgetContol;
