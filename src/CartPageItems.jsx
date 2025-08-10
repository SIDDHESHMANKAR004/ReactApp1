import React from "react";

export default function CartPageItems(props) {
  let { CartItems } = props;
  // let {cItems}=props

  // let finalprice =
  // e.mrp - e.mrp * (e.discount / 100).toFixed(1);
  // let { key } = props;
  // function handleCartItems(){
  //     props.onClick();
  //      console.log("....");
  //      console.log(CartItems.length);
  // }
  // function handleChangeButtonClick(op, e) {
  //   props.onChangeButtonClick(op, e);
  // }
  function handleIncrement(product) {
    props.onIncrement(product);
  }
  function handleDecrement(product) {
    props.onDecrement(product);
  }

  function handleBackButtonClick() {
    props.onBackButtonClick();
  }

  function handleBuyButtonClick() {
    props.onBuyButtonClick();
  }
  return (
    <>
      <div className="  p-5"></div>
      {/* <h3 className="text-center text-white col-12 col-lg-12">
        You are now in cart page
      </h3> */}
      <div className="mb-1 p-2 h4    text-black text-center  ">
        Proceed to{" "}
        <button
          className="button1"
          // onClick={proceed}
          onClick={handleBuyButtonClick}
        >
          <i class="bi bi-box-arrow-right fs-5    text-secondary-emphasis"></i>
        </button>
      </div>
      <div className=" mb-1 p-2  text-black   h4 text-center">
        <button className="button1" onClick={handleBackButtonClick}>
          Back
        </button>{" "}
        to Shopping.
      </div>

      <div className="row ">
        <div className=" mt-3   col-lg-12 col-12  d-flex justify-content-center ">
          <div className="col-10 col-lg-6">
            {CartItems.map((product, index) => {
              return (
                <div key={index}>
                  <div className=" p-2 border border-black  border-2 m-2">
                    <div className="row ">
                      <div className="col-5  col-lg-12  text-black h5 text-start ">{`${
                        index + 1
                      })  ${product.name}`}</div>
                      <div className="col-6 col-lg-12 text-black  text-end   pe-5">
                        {product.discount == 0 && (
                          <h4>Rs. {(product.mrp * product.qty).toFixed(2)}</h4>
                        )}
                        {product.discount != 0 && (
                          <h4>
                            Rs.{" "}
                            <span className="text-decoration-line-through   text-primary">
                              {(product.mrp*product.qty).toFixed(2)}{" "}
                            </span>{" "}
                            <span className=" text-black">
                              {(
                                (product.mrp -
                                  product.discount * 0.01 * product.mrp) *
                                product.qty
                              ).toFixed(2)}
                            </span>
                          </h4>
                        )}
                      </div>
                    </div>
                    <div className="row ">
                      {product.qty != 0 && (
                        <div className="col-6 text-start ps-5  col-12 ">
                          <button
                            className=" me-4 button1"
                            id="-"
                            onClick={() => {
                              handleDecrement(product);
                            }}
                          >
                            -
                          </button>{" "}
                          <h7 className="text-black">{product.qty}</h7>{" "}
                          <button
                            className=" ms-4 button1"
                            id="+"
                            onClick={() => {
                              handleIncrement(product);
                            }}
                          >
                            +
                          </button>
                        </div>
                      )}
                      {/* <div className="col-6 text-end pe-5 ">
                        Rs. {e.qty*totalprice}
                      </div> */}
                    </div>
                  </div>
                </div>
              );
              // }
            })}
          </div>
        </div>
      </div>

      {/* <div className="text-center" onClick={handleCartItems}></div> */}
    </>
  );
}
// {CartItems.length}
