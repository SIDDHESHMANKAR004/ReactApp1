import React, { useState } from "react";
import { RingLoader } from "react-spinners";
import {
  addBillToBackend,
  getLastBillNumberFromBackend,
  updateBackendLastBillNumber,
} from "./mongoAPIClient";
import { calculateDiscountedPrice } from "./utils/productUtils";

export default function Bill(props) {
  const { CartItems, totalprice, user } = props;
  const [flagLoader, setFlagLoader] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  const formatCurrency = (amount) =>
    Number(amount || 0).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  async function handleBillCreateClick() {
    setFlagLoader(true);
    const b = await getLastBillNumberFromBackend();
    const currentBillNumber = b.lastbillnumber + 1;

    let billObj = {
      billNumber: currentBillNumber,
      customer: user.name,
      date: new Date(),
      amount: totalprice,
      soldProducts: CartItems,
    };
    console.log("Bill Object:", billObj);
    billObj = await addBillToBackend(billObj);

    b.lastbillnumber = currentBillNumber;
    await updateBackendLastBillNumber(b);

    const message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.Its link is ${window.location}?id=${billObj.id} `;
    setFlagLoader(false);
    setTimeout(() => {
      window.location = `https://api.whatsapp.com/send?phone=918999181372&text=${message}`;
    }, 4000);
  }
  if (flagLoader) {
    return (
      <div className=" justify-content-center d-flex my-3">
        <RingLoader size={50} color={"green"} className="text-center" />
      </div>
    );
  }
  //  async function calculateTotal(){
  //   setFlagLoader(true)
  //   let list=await getProductsFromBackend()
  //   setFlagLoader(false)
  //   let total = 0;

  //     list.forEach((e, index) => {
  //       total += e.totalprice * e.qty;
  //     });
  //     setPrice(total)
  //   //   setTotalPrice(total);
  //   return price
  // }

  return (
    <div className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5">
        <div className="text-center mb-4">
          <button className="btn btn-dark rounded-pill px-4" onClick={handleBillCreateClick}>
            Share bill on WhatsApp
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="bill-card p-4 p-lg-5">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mb-4">
                <div>
                  <div className="brand-mark">SKIAN</div>
                  <div className="text-muted">Premium footwear • Invoice</div>
                </div>
                <div className="text-lg-end mt-3 mt-lg-0">
                  <div className="fw-bold">Date: {currentDate}</div>
                  <div className="text-muted">Customer: {user.name}</div>
                </div>
              </div>

              <div className="border rounded-4 p-3 mb-4">
                <div className="row fw-semibold text-muted small mb-2">
                  <div className="col-5">Product</div>
                  <div className="col-2">Rate</div>
                  <div className="col-2 text-center">Qty</div>
                  <div className="col-3 text-end">Total</div>
                </div>
                {CartItems.map((e, index) => {
                  const discountedPrice = calculateDiscountedPrice(e.mrp, e.discount);
                  const totalPrice = discountedPrice * e.qty;
                  return (
                    <div className="row py-2 border-top" key={e.id || index}>
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
                <span className="fw-bold fs-5">₹{formatCurrency(totalprice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
