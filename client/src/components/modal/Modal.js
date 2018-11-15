import React from "react";
import PropTypes from "prop-types";
import cart from "./cart.png";
import cartRed from "./cart-red.png";

import "./Modal.min.css";

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <div className="modal__box">
          <img src={cart} alt="cart" className="modal__icon" />
          <h4 className="modal__title">compra confirmada</h4>
          <p className="modal__text">
            enviaremos atualizações sobre o pedido para o seu email
          </p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {};

export default Modal;
