import React from "react";
import "./Resume.min.css";

function Resume(props) {
  const { productPrice, currentCoupon, shippingPrice, totalPrice } = props;
  return (
    <section className="resume">
      <h3 className="checkout__title">resumo</h3>

      <table className="resume__table">
        <tbody>
          <tr>
            <td>valor original</td>
            <td className="resume__table--min">
              R$ {parseFloat(productPrice).toFixed(2)}
            </td>
          </tr>
          {currentCoupon ? (
            <tr>
              <td>cupom</td>
              <td className="resume__table--min resume__coupon">
                - R$ {parseFloat(currentCoupon.discount).toFixed(2)}
              </td>
            </tr>
          ) : null}

          <tr>
            <td>frete</td>
            <td className="resume__table--min">
              R$ {parseFloat(shippingPrice).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td className="resume__table--min">
              <b>R$ {parseFloat(totalPrice).toFixed(2)}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Resume;
