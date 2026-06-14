import React from "react";
import Product from "./Product";

export default function ProductPage(props) {
  let { productList } = props;
  // let { displayprice } = props;

  // function handleAddButtonClick(product, action) {
  //   props.onButtonClick(product, action);
  //   // props.onButtonClick(displayprice)
  //   // console.log(displayprice);
  // }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }
  function handleAddToCart(product) {
    props.onAddToCart(product);
  }
  function handleIncrement(product) {
    props.onIncrement(product);
  }
  function handleDecrement(product) {
    props.onDecrement(product);
  }

  return (  
    <>
      
  <div className="container-fluid px-3 px-lg-5 py-4">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="fw-bold mb-0">All Shoes <span className="text-muted fs-6 fw-normal">({productList.length} products)</span></h4>
    </div>
    <div className="row g-3">
      {productList.map((e, index) => (
        <Product
          product={e}
          key={index}
          index={index}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  </div>

    </>
  );
}
