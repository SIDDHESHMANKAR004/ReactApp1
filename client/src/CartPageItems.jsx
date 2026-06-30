import React from "react";
import Reveal from "./Reveal";

export default function CartPageItems(props) {
  const { CartItems, totalprice, onIncrement, onDecrement, onBackButtonClick, onBuyButtonClick } = props;
  return (
    <div className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <Reveal className="cart-card p-4 p-lg-5 animate-fade-up" threshold={0.08}>
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
                <div>
                  <p className="section-subtitle mb-1">Your bag</p>
                  <h4 className="section-title mb-0">Shopping cart</h4>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-dark rounded-pill" onClick={onBackButtonClick}>Continue shopping</button>
                  <button className="btn btn-dark rounded-pill" onClick={onBuyButtonClick}>Checkout</button>
                </div>
              </div>

              {CartItems.map((product, index) => (
                <Reveal className="border rounded-4 p-3 mb-3 animate-slide-right" threshold={0.04} key={index}>
                  <div className="row g-3 align-items-center">
                    <div className="col-12 col-md-7">
                      <div className="fw-bold mb-1">{product.name}</div>
                      <div className="text-muted small">{product.unit || "Premium footwear"}</div>
                    </div>
                    <div className="col-12 col-md-5 text-md-end">
                      {product.discount == 0 && <div className="fw-bold">₹{(product.mrp * product.qty).toFixed(2)}</div>}
                      {product.discount != 0 && (
                        <div>
                          <span className="text-decoration-line-through text-muted me-2">₹{(product.mrp * product.qty).toFixed(2)}</span>
                          <span className="fw-bold">₹{(((product.mrp - product.discount * 0.01 * product.mrp) * product.qty)).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-outline-dark rounded-pill" id="-" onClick={() => onDecrement(product)}>-</button>
                        <div className="px-3 py-2 border rounded-pill fw-semibold">{product.qty}</div>
                        <button className="btn btn-outline-dark rounded-pill" id="+" onClick={() => onIncrement(product)}>+</button>
                      </div>
                      <button className="btn btn-link text-dark">Remove</button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </Reveal>
          </div>

          <div className="col-12 col-lg-4">
            <Reveal className="cart-card p-4 p-lg-5 animate-slide-left" threshold={0.08}>
              <p className="section-subtitle mb-1">Order summary</p>
              <h5 className="fw-bold mb-4">Ready to checkout</h5>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-semibold">₹{(totalprice || 0).toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Delivery</span>
                <span className="fw-semibold">Free</span>
              </div>
              <div className="border-top pt-3 mt-3 d-flex justify-content-between">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">₹{(totalprice || 0).toFixed(2)}</span>
              </div>
              <div className="mt-4">
                <input className="form-control rounded-pill mb-3" placeholder="Coupon code" />
                <button className="btn btn-dark w-100 rounded-pill animate-button">Apply coupon</button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
