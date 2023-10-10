import PropTypes from "prop-types";
import Charge from "./Charge";

const ChargesList = ({
  charges,
  setEditCharges,
  deleteCharge,
  filter,
  filterCharges,
}) => {
  return (
    <div className="charges-list container">
      {filter ? (
        <>
          <h2>
            {filterCharges.length
              ? "Latest charges"
              : "No charges yet in this category"}
          </h2>
          {filterCharges.map((charge) => (
            <Charge
              key={charge.id}
              charge={charge}
              setEditCharges={setEditCharges}
              deleteCharge={deleteCharge}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {charges.length 
              ? "Latest charges" 
              : "No charges yet"}
          </h2>
          {charges.map((charge) => (
            <Charge
              key={charge.id}
              charge={charge}
              setEditCharges={setEditCharges}
              deleteCharge={deleteCharge}
            />
          ))}
        </>
      )}
    </div>
  );
};

ChargesList.propTypes = {
  charges: PropTypes.array,
  setEditCharges: PropTypes.object,
  deleteCharge: PropTypes.func,
  filter: PropTypes.string,
  filterCharges: PropTypes.string,
};

export default ChargesList;
