import React from "react";
import Reveal from "./Reveal";
import { calculateDiscountedPrice } from "./utils/productUtils";

export default function Billpage(props) {
  const { bill } = props;
  const currentDate = new Date().toLocaleDateString();
  const formatCurrency = (amount) =>
    Number(amount || 0).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  return (
    <div className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <Reveal className="bill-card p-4 p-lg-5 animate-fade-up" threshold={0.08}>
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-4">
                <div>
                  <div className="brand-mark">SKIAN</div>
                  <div className="text-muted">Digital invoice • Premium delivery</div>
                </div>
                <div className="text-lg-end mt-3 mt-lg-0">
                  <div className="fw-bold">Date: {currentDate}</div>
                  <div className="text-muted">Customer: {bill.customer}</div>
                </div>
              </div>

              <div className="border rounded-4 p-3 mb-4">
                <div className="row fw-semibold text-muted small mb-2">
                  <div className="col-5">Product</div>
                  <div className="col-2">Rate</div>
                  <div className="col-2 text-center">Qty</div>
                  <div className="col-3 text-end">Total</div>
                </div>
                {bill.soldProducts.map((e, index) => {
                  const discountedPrice = calculateDiscountedPrice(e.mrp, e.discount);
                  const totalPrice = discountedPrice * e.qty;
                  return (
                    <div className="row py-2 border-top" key={index}>
                      <div className="col-5">{`${index + 1}) ${e.name}`}</div>
                      <div className="col-2">₹{formatCurrency(discountedPrice)}</div>
                      <div className="col-2 text-center">{e.qty}</div>
                      <div className="col-3 text-end">₹{formatCurrency(totalPrice)}</div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <span className="fw-bold">Grand total</span>
                <span className="fw-bold fs-5">₹{formatCurrency(bill.amount)}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
