import React from "react";
import Coupon from "./Coupon";
import PropTypes from "prop-types";

import "./Checkbox.min.css";

function Coupons(props) {
  const { availableCoupons, getData } = props;
  return (
    <section className="checkout__coupons">
      <h3 className="checkout__title">cupons</h3>
      <ul className="checkout__coupons__list">
        <li>
          <label className="checkbox__container">
            não usar cupom
            <input
              type="radio"
              name="radio"
              value="none"
              defaultChecked="checked"
              onClick={getData}
            />
            <span className="checkbox__checkmark" />
          </label>
        </li>
        {availableCoupons.map(coupon => (
          <li key={coupon.id}>
            <Coupon coupon={coupon} getData={getData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Coupons.propTypes = {
  availableCoupons: PropTypes.array,
  getData: PropTypes.func.isRequired
};

export default Coupons;
