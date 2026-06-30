import React from "react";
import Product from "./Product";
import Reveal from "./Reveal";

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
    <div className="page-shell">
      <div className="container-fluid px-3 px-lg-5 py-5">
        <Reveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4 animate-fade-up" threshold={0.08}>
          <div>
            <h4 className="section-title mb-0">All Shoes <span className="text-muted fs-6 fw-normal">({productList.length} products)</span></h4>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-dark btn-sm rounded-pill animate-button" type="button">Filter</button>
            <button className="btn btn-outline-dark btn-sm rounded-pill animate-button" type="button">Sort</button>
          </div>
        </Reveal>
        <div className="row g-4">
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
    </div>
  );
}
