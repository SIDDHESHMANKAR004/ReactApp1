import "./index.css";

export default function Product(props) {
  let { product } = props;
  let { index } = props;
  let finalprice =
     product.mrp - product.mrp * (product.discount / 100);
     finalprice = parseFloat(finalprice.toFixed(2)); 
    // finalprice - product.mrp * (1 - product.discount / 100);
  let displayprice =parseFloat( (product.qty * finalprice).toFixed(2));
  // console.log(product.name);
  function handleAddToCart() {
    props.onAddToCart(product);
  }
  function handleIncrement() {
    props.onIncrement(product);
  }
  function handleDecrement() {
    props.onDecrement(product);
  }
  // function handleQtyClick(displayprice) {
  //   props.onChangeClick(displayprice);
  // }

  return (
   <div className="col-6 col-md-4 col-lg-3">
  <div className="card border-0 shadow-sm h-100 rounded-3 overflow-hidden">
    
    {/* Image area */}
    <div className="position-relative bg-light">
      {product.discount > 0 && (
        <span className="badge bg-dark position-absolute top-0 start-0 m-2 rounded-pill px-2 py-1 small">
          -{product.discount}%
        </span>
      )}
      <img
        className="card-img-top object-fit-contain p-3"
        src={product.image}
        alt={product.name}
        style={{ height: "180px" }}
      />
    </div>

    {/* Body */}
    <div className="card-body d-flex flex-column px-3 py-3">
      <h6 className="card-title fw-semibold mb-1 text-truncate">{product.name}</h6>

      {/* Price */}
      <div className="mb-3">
        {product.discount === 0 ? (
          <span className="fw-bold">₹{product.mrp}</span>
        ) : (
          <span>
            <span className="text-decoration-line-through text-muted me-1 small">₹{product.mrp}</span>
            <span className="fw-bold text-dark">₹{finalprice}</span>
          </span>
        )}
      </div>

      {/* Add to Cart / Out of Stock */}
      <div className="mt-auto">
        {product.qty === 0 && (
          <button
            className={`btn w-100 rounded-pill fw-semibold ${product.inStock ? "btn-dark" : "btn-danger"}`}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}

        {/* Qty controls */}
        {product.qty !== 0 && (
          <div className="input-group">
            <button className="btn btn-outline-dark" onClick={() => handleDecrement(product)}>−</button>
            <div className="input-group-text flex-column flex-grow-1 text-center border-start-0 border-end-0 bg-white small">
              <div className="fw-semibold">Qty: {product.qty}</div>
              <div className="text-muted">₹{displayprice}</div>
            </div>
            <button className="btn btn-outline-dark" onClick={() => handleIncrement(product)}>+</button>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
  );
}
