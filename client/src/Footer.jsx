import React from "react";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container-fluid px-3 px-lg-5 py-5">
        <div className="row g-4">
          <div className="col-12 col-lg-3">
            <div className="brand-mark brand-mark--large">SKIAN</div>
            <p className="footer-copy">
              Premium footwear crafted for comfort, movement, and everyday luxury.
            </p>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="footer-title">Navigation</h6>
            <ul className="footer-list">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="footer-title">Categories</h6>
            <ul className="footer-list">
              <li>Sneakers</li>
              <li>Boots</li>
              <li>Formal</li>
              <li>Running</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <h6 className="footer-title">Stay in the loop</h6>
            <p className="footer-copy">Get first access to new arrivals and limited drops.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Email address" />
              <button type="button">Join</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
