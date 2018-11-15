import React, { Component } from "react";
import axios from "axios";
import "./Checkout.min.css";
import "./Product.min.css";
import Coupons from "../coupon/Coupons";
export default class Checkout extends Component {
  state = {
    coupons: {},
    currentCoupon: "",
    totalPrice: "",
    product: {},
    checkout: {}
  };

  selectCoupon = e => {
    const { id } = this.props.match.params;
    const saveThis = this;
    const couponId = e.target.value;

    axios
      .get(`http://localhost:3000/api/checkouts/${id}?couponId=${couponId}`)
      .then(function(res) {
        var currentCoupon = res.data.checkout.availableCoupons.find(coupon =>
          coupon.id == couponId ? coupon : null
        );
        console.log(currentCoupon);
        saveThis.setState({
          currentCoupon,
          totalPrice: res.data.checkout.totalPrice
        });
      });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const saveThis = this;
    axios({
      method: "get",
      url: `http://localhost:3000/api/checkouts/${id}`
    }).then(function(res) {
      saveThis.setState({
        coupons: res.data.checkout.availableCoupons,
        totalPrice: res.data.checkout.totalPrice,
        product: res.data.product,
        checkout: res.data.checkout
      });
      return;
    });
  }
  render() {
    const { product, checkout, totalPrice, currentCoupon } = this.state;
    console.log(currentCoupon);
    if (product && checkout) {
      return (
        <div>
          <div className="product__image">
            <img src={product.image} alt={product.title} />
          </div>

          {checkout.availableCoupons ? (
            <Coupons
              availableCoupons={checkout.availableCoupons}
              selectCoupon={this.selectCoupon}
            />
          ) : null}

          <section className="resume">
            <h3 className="checkout__title">resumo</h3>

            <table>
              <tbody>
                <tr>
                  <td>valor original</td>
                  <td>{product.price}</td>
                </tr>
                {currentCoupon ? (
                  <tr>
                    <td>cupom</td>
                    <td>- {currentCoupon.discount}</td>
                  </tr>
                ) : null}

                <tr>
                  <td>frete</td>
                  <td>R$ {checkout.shippingPrice}</td>
                </tr>
                <tr>
                  <td>total</td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
  }
}
