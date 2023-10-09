import PropTypes from "prop-types";
import Charge from "./Charge";


const ChargesList = ({ charges }) => {
  return (
    <div className="charges-list container">
        <h2>{ charges.length ? 'Latest charges': 'No charges yet' }</h2>

        {charges.map( charge => (
            <Charge 
            key={charge.id}
            charge={charge}
            />
        ))}

    </div>
  )
}

ChargesList.propTypes = {
    charges: PropTypes.array,
  };

export default ChargesList