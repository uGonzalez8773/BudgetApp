import BudgetContol from "./BudgetContol";
import NewBudget from "./NewBudget";
import PropTypes from "prop-types";


const Header = ({ 
  charges, 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  setCharges,
}) => {
  return (
    <header>
      <h1>Budget</h1>
      {isValidBudget ? (
        <BudgetContol 
          charges={charges}
          setCharges={setCharges}
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  budget: PropTypes.number,
  setBudget: PropTypes.string,
  isValidBudget: PropTypes.bool,
  setIsValidBudget: PropTypes.bool,
  charges: PropTypes.array,
  setCharges: PropTypes.array,
};

export default Header;
