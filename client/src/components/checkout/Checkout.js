import React, { Component } from "react";
import axios from "axios";

import "./Checkout.min.css";
import "./Btn.min.css";

import Coupons from "../coupon/Coupons";
import Resume from "../resume/Resume";
import Modal from "../modal/Modal";

export default class Checkout extends Component {
  state = {
    coupons: {},
    currentCoupon: "",
    totalPrice: "",
    product: {},
    checkout: {},
    modal: ""
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
        saveThis.setState({
          currentCoupon,
          totalPrice: res.data.checkout.totalPrice,
          product: res.data.product,
          checkout: res.data.checkout
        });
      });
    return;
  };

  confirmPurchase = () => {
    const { id } = this.props.match.params;
    const { currentCoupon } = this.state;
    const saveThis = this;
    let couponId;
    currentCoupon ? (couponId = currentCoupon.id) : (couponId = null);
    axios
      .post(`http://localhost:3000/api/checkouts/${id}?couponId=${couponId}`)
      .then(function() {
        saveThis.setState({
          modal: {
            type: "confirmation",
            title: "compra confirmada",
            message: "enviaremos atualizações sobre o pedido para o seu email"
          }
        });
      });
  };

  cancelPurchase = () => {
    this.setState({
      modal: {
        type: "cancelation",
        title: "compra cancelada",
        message: "o pedido não foi enviado e você não será cobrado"
      }
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { product, checkout, totalPrice, currentCoupon, modal } = this.state;
    if (product && checkout) {
      return (
        <div>
          <div className="checkout__product__image">
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

          <div className="checkout__buttons">
            <button onClick={this.cancelPurchase} className="btn btn__cancel">
              cancelar
            </button>
            <button onClick={this.confirmPurchase} className="btn btn__confirm">
              confirmar
            </button>
          </div>
          {modal ? <Modal modal={modal} /> : null}
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
