import React from "react";
import Reveal from "./Reveal";

export default function SignUpPage(props) {
  const { signupstatus, onSignUpFormSubmit, onLoginClick } = props;

  function handleSignUpFormSubmit(event) {
    event.preventDefault();
    onSignUpFormSubmit(event);
  }
  function handleLoginClick() {
    onLoginClick("Login");
  }

  return (
    <div className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5 py-4">
        {signupstatus == "success" && (
          <div className="text-center py-5">
            <h3 className="fw-bold text-danger">Signup successful</h3>
            <a href="#" onClick={handleLoginClick} className="text-dark fw-semibold">
              Login now.
            </a>
          </div>
        )}
        {signupstatus == "failed" && (
          <div className="text-center text-danger pb-3 h5">
            Sorry.. This Email-id is already Registered.
          </div>
        )}

        {(signupstatus == "no" || signupstatus == "failed") && (
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Reveal className="auth-card row g-0 overflow-hidden animate-fade-up" threshold={0.08}>
                <div className="col-12 col-lg-6 p-4 p-lg-5 bg-light d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="brand-mark mb-3">SKIAN</div>
                    <h3 className="fw-bold mb-3">Create your account</h3>
                    <p className="text-muted">Join to save favorites, track orders, and enjoy early access to launches.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 p-4 p-lg-5">
                  <form action="" onSubmit={handleSignUpFormSubmit}>
                    <div className="mb-3">
                      <label className="form-label">User name</label>
                      <input type="name" name="name" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" name="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" required />
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <input type="submit" value="Create account" className="btn btn-dark" />
                      <input type="reset" value="Clear" className="btn btn-outline-dark" />
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
