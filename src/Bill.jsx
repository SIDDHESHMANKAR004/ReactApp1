import React, { useState } from "react";
import {
  addBillToBackend,
  getLastBillNumberFromBackend,
  updateBackendLastBillNumber,
} from "./FirebaseBillNumberServices";
import { BeatLoader, PacmanLoader, RingLoader } from "react-spinners";
// import { updateBackendProduct } from "./FirebaseProductServices";
import { logEvent } from "firebase/analytics";
// import {getProductsFromBackend} from './FirebaseProductServices';

export default function Bill(props) {
  let { CartItems } = props;
  let { totalprice } = props;
  let { name } = props;
  let { user } = props;
  let { message } = props;
  // const [location, setLocation] = useState(window.location)
  // let [price,setPrice]=useState("")
  // const phonenumber = `8999181372`;

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };
  const calculateDiscountedPrice = (mrp, discount) => {
    return mrp * (1 - discount / 100);
  };
  let [flagLoader, setFlagLoader] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  async function handleBillCreateClick() {
    setFlagLoader(true);
    let b = await getLastBillNumberFromBackend();
    let currentBillNumber = b.lastbillnumber + 1;
    console.log(currentBillNumber);

    let BillObj = {};
    BillObj.billNumber = currentBillNumber;
    BillObj.customer = user.name;
    BillObj.date = new Date();
    BillObj.amount = totalprice;
    BillObj.soldProducts = CartItems;
    BillObj = await addBillToBackend(BillObj);
    // console.log(BillObj);

    b.lastbillnumber = currentBillNumber;
    await updateBackendLastBillNumber(b);
    let billId = BillObj.id;
    console.log(billId);
    // let newlocation;



    // // window.localStorage.setItem("cartItems", JSON.stringify([]));
    
    // const index =window.location.href.indexOf("#");
    // if (index!=-1) {
    //   newlocation = window.location.href.slice(index,1);
    //   console.log(window.location.href);
    //   console.log("hii");
      
      
      
    // }
    // else
    // {
    //   newlocation=window.location.href;
    //   console.log("hello");
      
      
    // }
    // setLocation(newlocation)
    let message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.Its link is ${window.location}?id=${billId} `;
    // let billUrl = `https://siddreactapp1.netlify.app/?id=${billId}`;
    // let message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.Its link is ${billUrl}`;
    // let encodedMessage = encodeURIComponent(message);
    setFlagLoader(false);
    console.log(message);
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
    <>
      <div className="my-4 p-5"></div>

      <div className=" col-12    col-lg-12   text-center">
        <button className="btn log" onClick={handleBillCreateClick}>
          Share Bill on WhatsApp
        </button>
      </div>

      <div className="row p-4">
        <div className="  col-12 d-flex justify-content-center   ">
          <div className="mybb  col-lg-6   opacity-75   ">
            <div className=" mx-auto p-2 pb-1  pt-2 my-auto text-center  h5 ">
              || Shree ||
            </div>
            <div className="h3 text-center   "> SKians Shoes </div>
            <div className="h5 text-center  ">
              220 , Matalwadi Phata ,Bhugaon- 412115
            </div>
            <div className="text-end pe-3  h5">Date: {currentDate} </div>
            <div className="h5 ps-5 ">Customer Name : {user.name}</div>
            <div className="row   side ">
              <div className="col-3   col-lg-3 text-start ps-0 h6  ">Product</div>
              <div className="col-2  col-lg-3 h6  text-start ps-0 ">Rate</div>
              <div className="col-3 col-lg-3 text-start   h6 text-center  ps-0    ">Quantity</div>
              <div className="col-3 col-lg-3 text-start  ps-lg-5  h6 ">Total</div>
            </div>
            {CartItems.map((e, index) => {
               const discountedPrice = calculateDiscountedPrice(e.mrp, e.discount);
               const totalPrice = discountedPrice * e.qty;
              return (
                <div className="row  " key={e.id}>
                  <div className="col-2  col-lg-3  text-start h6 ">{`${index + 1}) ${
                    e.name
                  }`}</div>
                  <div className="col-4  ps-lg-0 col-lg-3 text-start ">
                    <div className="h6 ">
                      Rs.{" "}
                      <span className="text-decoration-line-through   h6 ">
                        {/* {e.mrp}{" "} */}
                        {formatCurrency(e.mrp)}
                      </span>{" "}
                      <span className="h6">
                        {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(0)} */}
                        {formatCurrency(discountedPrice)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2  col-lg-3 ps-lg-5 mx-lg-4  text-start h6  ps-0  ">
                    {e.qty} 
                  </div>
                  <div className="col-4  col-lg-2 ps-lg-0 text-start h6">
                    {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(0)} */}
                    Rs{formatCurrency(totalPrice)}
                  </div>
                </div>
              );
            })}
            <div className="row  my-1">
              <div className="col-9  text-end  col-lg-9 h5">Grand Total : </div>
              <div className="col-3 col-lg- text-start  ps-0 align-items-center  my-1 h6">
                {/* Rs. {totalprice.toFixed(0)}{" "} */}
              Rs{formatCurrency(totalprice)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
