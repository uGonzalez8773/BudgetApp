import PropTypes from "prop-types";

const FilterCharges = ({ filter, setFilter }) => {
  return (
    <div className="filter shadow container">
      <form action="">
        <div className="mainBudget">
          <label>Filter charges</label>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">-- All categories --</option>
            <option value="savings"> Savings </option>
            <option value="food"> Food </option>
            <option value="house"> House</option>
            <option value="others"> Others </option>
            <option value="fun"> Fun </option>
            <option value="health"> Health </option>
            <option value="suscription"> Suscriptions </option>
          </select>
        </div>
      </form>
    </div>
  );
};

FilterCharges.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.string,
  };
  

export default FilterCharges;
