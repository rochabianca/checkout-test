import React from "react";
import "./Coupon.min.css";

function Coupon(props) {
  const { coupon } = props;
  return (
    <div className="coupon">
      <input type="checkbox" />
      <div className="coupon__info">
        <label>{coupon.title}</label>
        <span>- R$ {coupon.discount}</span>
      </div>
    </div>
  );
}

export default Coupon;
