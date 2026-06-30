import React from "react";
import Reveal from "./Reveal";

export default function HeroSection() {
  const featurePill = ["Free express shipping", "2-year warranty", "Premium materials"];

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
                <a href="/products" className="btn btn-dark animate-button">Shop now</a>
                <a href="/collections" className="btn btn-outline-dark animate-button">Browse categories</a>
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal className="hero-card rounded-4 p-4 animate-scale" threshold={0.08}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-semibold">Featured drop</span>
                <span className="badge rounded-pill bg-warning text-dark">New</span>
              </div>
              <img src="/shoes10.jpg" alt="Featured product" className="w-100 rounded-4 mb-3 animate-image" style={{ height: "260px", objectFit: "cover" }} />
              <h4 className="fw-bold mb-2">Lunar Runner</h4>
              <p className="text-muted mb-3">Lightweight comfort with sculpted cushioning and signature detailing.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">₹4,999</div>
                  <div className="small text-muted">Free shipping</div>
                </div>
                <a href="/products" className="btn btn-dark btn-sm animate-button">Add to bag</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}