import React, { useState } from "react";
import { data } from "react-router-dom";
// import { addBackendDataToBill } from "./FirebaseBillNumberServices";

export default function Billpage(props) {
  let { bill } = props;
  const currentDate = new Date().toLocaleDateString();

  // if (flagLoader) {
  //   return (
  //     <div className="  text-center my-5 d-flex justify-content-center">
  //       <RingLoader size={50} color={"green"} className="" />
  //     </div>
  //   );
  // }
  console.log("In the billpage");

  console.log(bill);

  //  console.table(bill);
  //  console.log("bill:", bill);
  return (
    <>
      <div className=" my-4 p-4"></div>
      <div className="row ">
        <div className="  col-12 d-flex justify-content-center   ">
          <div className="mybb  col-lg-6   opacity-75   ">
            <div className=" mx-auto p-2 pb-1  pt-2 my-auto text-center  h5 ">
              || Shree ||
            </div>
            <div className="h3 text-center  "> SKians Shoes </div>
            <div className="h5 text-center  ">
              220 , Matalwadi Phata ,Bhugaon- 412115
            </div>
            <div className="text-end pe-3  h5">Date: {currentDate} </div>
            <div className="h5 ps-5 ">Customer Name : {bill.customer}</div>
            <div className="row ">
              <div className="col-4 h5  ">Product</div>
              <div className="col-3 h5  text-start ps-0 ">Rate</div>
              <div className="col-3  h5 text-center   ">Quantity</div>
              <div className="col-2  h5 ">Total</div>
            </div>

            {bill.soldProducts.map((e, index) => {
              return (
                <div className="row " key={index}>
                  <div className="col-4 text-start h6 ps-3">{`${index + 1}) ${
                    e.name
                  }`}</div>
                  <div className="col-4 text-start ps-0">
                    <div className="">
                      Rs.{" "}
                      <span className="text-decoration-line-through h5 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h5">
                        {e.mrp - e.mrp * (e.discount / 100).toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 h5  ps-0  ">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 h5">
                    {e.mrp - e.mrp * (e.discount / 100)}
                  </div>
                </div>
              );
            })}
            <div className="row  my-1">
              <div className="col-9  text-end  col-lg-9 h5">Grand Total : </div>
              <div className="col-3 col-lg- text-start  ps-0 h5">
                Rs. {bill.amount.toFixed(0)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
