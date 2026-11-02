import React from "react";
import Reveal from "../../components/common/Reveal";


export default function HeroSection({
  featuredProduct,
  onShopNow,
  onBrowseCategories,
  onAddToCart,
}) {
  const featurePill = ["Free express shipping", "2-year warranty", "Premium materials"];
  const featuredPrice = featuredProduct
    ? Number(featuredProduct.mrp) * (1 - Number(featuredProduct.discount || 0) / 100)
    : null;

  return (
    <section className="hero-section py-5">
      <div className="container-fluid px-3 px-lg-5 py-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-7">
            <Reveal className="hero-panel p-4 p-lg-5 rounded-4 bg-white animate-fade-up" threshold={0.08}>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {featurePill.map((item) => (
                  <span className="badge rounded-pill bg-light text-dark px-3 py-2" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <h1 className="display-4 fw-bold mb-3">Explore premium shoes for every stride.</h1>
              <p className="lead text-muted mb-4">
                Discover modern comfort, refined craftsmanship, and limited-edition silhouettes built for everyday luxury.
              </p>
              <div className="hero-actions d-flex flex-wrap gap-3">
                <button type="button" className="btn btn-dark animate-button" onClick={onShopNow}>Shop now</button>
                <button type="button" className="btn btn-outline-dark animate-button" onClick={onBrowseCategories}>Browse categories</button>
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal className="hero-card rounded-4 p-4 animate-scale" threshold={0.08}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-semibold">Featured drop</span>
                <span className="badge rounded-pill bg-warning text-dark">New</span>
              </div>
              <img src={featuredProduct?.image || "/shoes4.jpg"} alt={featuredProduct?.name || "Featured product"} className="w-100 rounded-4 mb-3 animate-image img-fluid" style={{ height: "260px", objectFit: "cover" }} />
              <h4 className="fw-bold mb-2">{featuredProduct?.name || "Lunar Runner"}</h4>
              <p className="text-muted mb-3">Lightweight comfort with sculpted cushioning and signature detailing.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{featuredPrice === null ? "₹800" : `₹${featuredPrice.toFixed(2)}`}</div>
                  <div className="small text-muted">Free shipping</div>
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-sm animate-button"
                  disabled={!featuredProduct || featuredProduct.inStock === false}
                  onClick={() => onAddToCart(featuredProduct)}
                >
                  {featuredProduct?.inStock === false ? "Out of stock" : "Add to bag"}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}