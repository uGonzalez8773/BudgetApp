import PropTypes from "prop-types";

const Message = ({ children, tipo }) => {
  return (
    <div className={`alert ${tipo}`}>{ children }</div>
  )
}

Message.propTypes = {
    children: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
  };
  

export default Message