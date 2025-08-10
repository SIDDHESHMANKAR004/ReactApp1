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
      <div className="row radius d-flex     ms-lg-5
       p-2 m-lg-3  m-2 Contain border-3  border-bottom  border-black  productbg text-center ">
        {productList.map((e, index) => (
          <Product
            product={e}
            key={index}
            index={index}
            // onButtonClick={handleAddButtonClick}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onAddToCart={handleAddToCart}
            // onChangeClick={handleQtyClick}
          />
        ))}
      </div>
    </>
  );
}
