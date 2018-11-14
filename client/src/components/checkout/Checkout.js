import React, { Component } from "react";
import axios from "axios";
import "./Checkout.min.css";
import "./Product.min.css";
import Coupons from "../coupon/Coupons";
export default class Checkout extends Component {
  state = {
    product: {},
    checkout: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const saveThis = this;
    axios({
      method: "get",
      url: `http://localhost:3000/api/checkouts/${id}`,
      crossDomain: true
    }).then(function(res) {
      console.log(res.data);
      saveThis.setState({
        product: res.data.product,
        checkout: res.data.checkout
      });
      return;
    });
  }
  render() {
    const { product, checkout } = this.state;

    if (product && checkout) {
      return (
        <div>
          <div className="product__image">
            <img src={product.image} alt={product.title} />
          </div>

          {checkout.availableCoupons ? (
            <Coupons availableCoupons={checkout.availableCoupons} />
          ) : null}
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
