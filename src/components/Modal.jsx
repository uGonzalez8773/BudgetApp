import { useState } from "react";
import closeBtn from "../assets/close.svg";
import PropTypes from "prop-types";
import Message from "./Message";

const Modal = ({ setModal, animateModal, setAnimateModal, saveCharge }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, amount, category].includes("")) {
      setMessage("All fields are mandatory");

      setTimeout(() => {
        setMessage("");
      }, 500);
    }

    saveCharge({ name, amount, category });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeBtn} alt="close modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`budget ${animateModal ? "animate" : "close"}`}
      >
        <legend>New Charge:</legend>
        {message && <Message tipo="error">{message}</Message>}

        <div className="mainBudget">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="what is it?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mainBudget">
          <label htmlFor="amount">Amount $:</label>
          <input
            type="number"
            id="amount"
            placeholder="How much did it cost?"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="mainBudget">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Chose one --</option>
            <option value="savings"> Savings </option>
            <option value="food"> Food </option>
            <option value="house"> House</option>
            <option value="others"> Others </option>
            <option value="fun"> Fun </option>
            <option value="health"> Health </option>
            <option value="suscription"> Suscriptions </option>
          </select>
        </div>

        <input type="submit" value="Add charge" />
      </form>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.bool,
  animateModal: PropTypes.bool,
  setAnimateModal: PropTypes.bool,
  saveCharge: PropTypes.func,
};

export default Modal;
