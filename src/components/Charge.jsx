import PropTypes from "prop-types";
import { formatdate } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
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

const Charge = ({ charge, setEditCharges, deleteCharge }) => {
  const { name, amount, category, id, dateOf } = charge;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditCharges(charge)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => deleteCharge(id)}
        destructive={true}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

Charge.propTypes = {
  charge: PropTypes.array,
  setEditCharges: PropTypes.object,
  deleteCharge: PropTypes.func,
};

export default Charge;
