import BudgetContol from "./BudgetContol";
import NewBudget from "./NewBudget";
import PropTypes from "prop-types";


const Header = ({ charges, budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Budget</h1>
      {isValidBudget ? (
        <BudgetContol 
          charges={charges}
          budget={budget}
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
};

export default Header;
