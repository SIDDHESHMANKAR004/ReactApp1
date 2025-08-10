import "./index.css";

export default function AdminProduct(props) {
  let { product } = props;
  let { index } = props;

  // let finalprice =
  //  ;
  // let displayprice = product.qty * finalprice;
  // console.log(product.name);
  function handleAddCartAdmin() {
    props.onAddToCartAdmin(product);
  }
  function handleDeleteCartAdmin() {
    let ans = window.confirm(
      "Do you really want to delete  -  " + product.name
    );
    if (ans) {
      props.onDeleteCartAdmin(product, true);
    } else {
      props.onDeleteCartAdmin(product, false);
    }
  }
  // function handleIncrement() {
  //   props.onIncrement(product);
  // }
  // function handleDecrement() {
  //   props.onDecrement(product);
  // }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }

  
  return (
    <div className="    col-lg-2 col-sm-12 col-md-6 col-5  mx-2    bg    card  text-lg-center   m-lg-3     my-3 mx-1   p-lg-4 p-2  radius   ">
      <div className=" position-absolute   col-lg-3  col-6 h6   circle   ">
        {product.discount > 0 ? ` ${product.discount}% off` : ``}
      </div>
      <img className="  img-fluid   " src={product.image} alt="" />

      <div className="h5 clr">
        {product.name}{" "}
        {/* {product.discount > 0 ? ` -(${product.discount}%)` : " "} */}
      </div>
      {product.discount === 0 && <h5> Rs {product.mrp}</h5>}
      {product.discount != 0 && (
        <h6>
          Rs{" "}
          <span className=" text-decoration-line-through clr">
            {product.mrp}
          </span>{" "}
          {product.mrp - product.mrp * (product.discount / 100).toFixed(2)}
        </h6>
      )}
      <div className="row  ">
        <div className="  col-6 col-sm-12 col-lg-6 ps-lg-4   text-start     ">
          <button className="  button1    " onClick={handleAddCartAdmin}>
            <i class="bi bi-bag-plus-fill"></i>
          </button>
        </div>
        <div className="col-6 col-sm-12   col-lg-6  pe-lg-4  text-end  ">
          <button className="  button1    " onClick={handleDeleteCartAdmin}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
