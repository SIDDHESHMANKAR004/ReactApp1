import React from "react";

export default function CartPageItems(props) {
  let { view } = props;
  let { product } = props;
  let { CartItems } = props;
  let { totalprice } = props;
  let { productList } = props;
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
      <div className="my-5  p-5"></div>
      <h3 className="text-center text-white col-12 col-lg-12">
        You are now in cart page
      </h3>
      <div className="mb-1 p-2 h4  text-white text-center  ">
        Proceed to{" "}
        <a
          href="#"
          // onClick={proceed}
          onClick={handleBuyButtonClick}
        >
          Buy.
        </a>
      </div>
      <div className="mb-1 p-2  text-white  h4 text-center">
        <a href="#" onClick={handleBackButtonClick}>
          Back
        </a>{" "}
        to Shopping.
      </div>

      <div className="row p-2 mt-2 m-3 mycontainer  col-lg-12">
        {CartItems.map((product, index) => {
          return (
            // <div key={index} className="mx-auto border border-black m-2 ll">
            <div key={index}>
              <div className=" p-2 border border-black  border-2 m-2">
                <div className="row ">
                  <div className="col-5  col-lg-12  text-white h5 text-start ">{`${
                    index + 1
                  })  ${product.name}`}</div>
                  <div className="col-7 col-lg-12 text-white  text-end  pe-5">
                    {product.discount == 0 && (
                      <h4>Rs. {product.mrp * product.qty}</h4>
                    )}
                    {product.discount != 0 && (
                      <h4>
                        Rs.{" "}
                        <span className="text-decoration-line-through  text-info">
                          {product.mrp}{" "}
                        </span>{" "}
                        <span className=" text-white">
                          {(product.mrp -
                            product.mrp * (product.discount / 100).toFixed(1)) *
                            product.qty}
                        </span>
                      </h4>
                    )}
                  </div>
                </div>
                <div className="row ">
                  {product.qty != 0 && (
                    <div className="col-6 text-start ps-5  col-12 ">
                      <button
                        className=" me-4 btn buton"
                        id="-"
                        onClick={() => {
                          handleDecrement(product);
                        }}
                      >
                        -
                      </button>{" "}
                      <h7 className="text-white">{product.qty}</h7>{" "}
                      <button
                        className=" ms-4 btn buton"
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
      <div className="html"></div>
      {/* <div className="text-center" onClick={handleCartItems}></div> */}
    </>
  );
}
// {CartItems.length}
