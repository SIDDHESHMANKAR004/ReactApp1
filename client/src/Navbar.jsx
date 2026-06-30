import React from "react";

export default function NavBar(props) {
  const { cnt, totalprice, view, user, loginStatus, onFormButtonClick, onCartItems, onLoginButtonClickUsingGoogle, onButtonLogout } = props;
  function handleFormButtonClick(nextView) {
    onFormButtonClick(nextView);
  }
  
  function handleCartItems() {
    onCartItems(view);
  }

  return (
    <nav className="nav-shell">
      <div className="container-fluid px-3 px-lg-5 py-3">
        <div className="row align-items-center g-3">
          <div className="col-7 col-lg-2" id="logo" onClick={() => handleFormButtonClick("productPage")}>
            <div className="d-flex align-items-center gap-2 cursor-pointer">
              <div className="brand-mark">SKIAN</div>
            </div>
          </div>

          <div className="col-12 col-lg-7 order-3 order-lg-2">
            <div className="d-flex flex-wrap justify-content-center gap-3 gap-lg-4 align-items-center">
              <a href="#" className="nav-link-custom" onClick={() => handleFormButtonClick("productPage")}>Shop</a>
              {/* <a href="#" className="nav-link-custom" onClick={() => handleFormButtonClick("categoriesPage")}>Categories</a> */}
              <a href="#" className="nav-link-custom" onClick={() => handleFormButtonClick("aboutPage")}>About</a>
              <a href="#" className="nav-link-custom" onClick={() => handleFormButtonClick("contactPage")}>Contact</a>
            </div>
          </div>

          <div className="col-5 col-lg-3 order-2 order-lg-3 d-flex justify-content-end align-items-center gap-2">
            {/* <button className="nav-icon-btn" type="button" onClick={() => handleFormButtonClick("productPage")}>
              <i className="bi bi-search"></i>
            </button> */}
            <button className="nav-icon-btn" type="button" onClick={handleCartItems}>
              <i className="bi bi-bag"></i>
            </button>
            <button className="nav-icon-btn" type="button" onClick={onLoginButtonClickUsingGoogle}>
              <i className="bi bi-person"></i>
            </button>
            <button className="cart-pill" type="button" onClick={handleCartItems}>
              <span>{cnt}</span>
              <span>₹{totalprice}</span>
            </button>
          </div>
        </div>

        {loginStatus === "success" && user && (
  <div className="d-flex justify-content-end align-items-center gap-3 mt-3">

    <span className="text-muted">
      Welcome, {user.name}
    </span>

    <button
      className="btn btn-outline-dark rounded-pill px-4"
      onClick={onButtonLogout}
    >
      Logout
    </button>

  </div>
)}
      </div>
    </nav>
  );
}
