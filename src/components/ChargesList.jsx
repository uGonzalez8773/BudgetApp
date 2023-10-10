import PropTypes from "prop-types";
import Charge from "./Charge";


const ChargesList = ({ charges, setEditCharges, deleteCharge }) => {
  return (
    <div className="charges-list container">
        <h2>{ charges.length ? 'Latest charges': 'No charges yet' }</h2>

        {charges.map( charge => (
            <Charge 
            key={charge.id}
            charge={charge}
            setEditCharges={setEditCharges}
            deleteCharge={deleteCharge}
            />
        ))}

    </div>
  )
}

ChargesList.propTypes = {
    charges: PropTypes.array,
    setEditCharges: PropTypes.object,
    deleteCharge: PropTypes.func,
  };

export default ChargesList