import React from "react";
import PropTypes from "prop-types";
import cart from "./cart.png";
import cartRed from "./cart-red.png";

import "./Modal.min.css";

function Modal(props) {
  const { modal } = props;
  let icon;
  modal.type === "confirmation" ? (icon = cart) : (icon = cartRed);
  return (
    <div>
      <div className="modal">
        <div className="modal__box">
          <img src={icon} alt="cart" className="modal__icon" />
          <h4 className="modal__title">{modal.title}</h4>
          <p className="modal__text">{modal.message}</p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  modal: PropTypes.object.isRequired
};

export default Modal;
