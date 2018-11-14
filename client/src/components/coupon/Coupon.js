import React from "react";
import "./Coupon.min.css";

function Coupon(props) {
  const { coupon } = props;
  return (
    <label className="checkbox__container">
      <div className="coupon">
        <span>{coupon.title}</span>{" "}
        <span className="coupon__discount">- R$ {coupon.discount},00</span>
      </div>
      <input type="radio" name="radio" />
      <span className="checkbox__checkmark" />
    </label>
  );
}

export default Coupon;
