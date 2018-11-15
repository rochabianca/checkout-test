import React from "react";
import "./Coupon.min.css";

function Coupon(props) {
  const { coupon, getData } = props;
  return (
    <label className="checkbox__container">
      <div className="coupon">
        <span>{coupon.title}</span>{" "}
        <span className="coupon__discount">
          - R$ {parseFloat(coupon.discount).toFixed(2)}
        </span>
      </div>
      <input type="radio" name="radio" value={coupon.id} onClick={getData} />
      <span className="checkbox__checkmark" />
    </label>
  );
}

export default Coupon;
