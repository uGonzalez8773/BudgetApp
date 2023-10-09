import PropTypes from "prop-types";
import { formatdate } from "../helpers";
import savingIcon from "../assets/savings.svg";
import foodIcon from "../assets/food.svg";
import funIcon from "../assets/fun.svg";
import healthIcon from "../assets/health.svg";
import houseIcon from "../assets/house.svg";
import othersIcon from "../assets/others.svg";
import suscriptionIcon from "../assets/suscriptions.svg";

const iconDictionary = {
  savings: savingIcon,
  food: foodIcon,
  house: houseIcon,
  others: othersIcon,
  fun: funIcon,
  health: healthIcon,
  suscription: suscriptionIcon,
};

const Charge = ({ charge }) => {
  const { name, amount, category, id, dateOf } = charge;

  return (
    <div className="charge shadow">
      <div className="content-charge">
        <img src={iconDictionary[category]} alt="category Icon" />
        <div className="description-charge">
          <p className="name-charge">{name}</p>
          <p className="category">{category}</p>
          <p className="dateOf-charge">
            {" "}
            Agregado el: {""} <span>{formatdate(dateOf)}</span>
          </p>
        </div>
      </div>
      <p className="amount-charge">${amount}</p>
    </div>
  );
};

Charge.propTypes = {
  charge: PropTypes.array,
};

export default Charge;
