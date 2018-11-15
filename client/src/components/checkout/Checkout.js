import React, { Component } from "react";
import axios from "axios";
import "./Checkout.min.css";
import "./Product.min.css";
import Coupons from "../coupon/Coupons";
import Resume from "../resume/Resume";
export default class Checkout extends Component {
  state = {
    coupons: {},
    currentCoupon: "",
    totalPrice: "",
    product: {},
    checkout: {}
  };

  getData = e => {
    const { id } = this.props.match.params;
    const saveThis = this;
    let couponId;
    e ? (couponId = e.target.value) : (couponId = null);

    axios
      .get(`http://localhost:3000/api/checkouts/${id}?couponId=${couponId}`)
      .then(function(res) {
        var currentCoupon = res.data.checkout.availableCoupons.find(coupon =>
          coupon.id == couponId ? coupon : null
        );
        console.log(currentCoupon);
        saveThis.setState({
          currentCoupon,
          totalPrice: res.data.checkout.totalPrice,
          product: res.data.product,
          checkout: res.data.checkout
        });
      });
    return;
  };

  componentDidMount() {
    this.getData();
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
              getData={this.getData}
            />
          ) : null}

          <Resume
            productPrice={product.price}
            currentCoupon={currentCoupon}
            shippingPrice={checkout.shippingPrice}
            totalPrice={totalPrice}
          />
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
