import "./index.css";
import { calculateDiscountedPrice } from "./utils/productUtils";
import Reveal from "./Reveal";

export default function Product(props) {
  const { product, onAddToCart, onIncrement, onDecrement } = props;
  const finalprice = parseFloat(calculateDiscountedPrice(product.mrp, product.discount).toFixed(2));
  const displayprice = parseFloat((product.qty * finalprice).toFixed(2));

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      <Reveal className="product-card h-100 animate-card" threshold={0.06}>
        <div className="position-relative">
          {product.discount > 0 && (
            <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2">
              -{product.discount}%
            </span>
          )}
          <button className="btn btn-light btn-sm rounded-pill position-absolute top-0 end-0 m-3" type="button">
            <i className="bi bi-heart"></i>
          </button>
          <img className=" img-fluid" src={product.image} alt={product.name} />
        </div>

        <div className="card-body p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted small">Premium</span>
            <span className="text-muted small">★ 4.8</span>
          </div>
          <h6 className="fw-bold mb-2">{product.name}</h6>
          <div className="mb-3">
            {product.discount === 0 ? (
              <span className="fw-bold">₹{product.mrp}</span>
            ) : (
              <span>
                <span className="text-decoration-line-through text-muted me-2 small">₹{product.mrp}</span>
                <span className="fw-bold text-dark">₹{finalprice}</span>
              </span>
            )}
          </div>

          <div className="mt-auto">
            {product.qty === 0 && (
              <button
                className={`btn w-100 fw-semibold ${product.inStock ? "btn-dark" : "btn-danger"}`}
                disabled={!product.inStock}
                onClick={() => onAddToCart(product)}
              >
                {product.inStock ? "Add to cart" : "Out of stock"}
              </button>
            )}

            {product.qty !== 0 && (
              <div className="d-flex align-items-center justify-content-between gap-2">
                <button className="btn btn-outline-dark rounded-pill" onClick={() => onDecrement(product)}>−</button>
                <div className="flex-grow-1 text-center border rounded-pill py-2 px-2">
                  <div className="fw-semibold">Qty {product.qty}</div>
                  <div className="small text-muted">₹{displayprice}</div>
                </div>
                <button className="btn btn-outline-dark rounded-pill" onClick={() => onIncrement(product)}>+</button>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
