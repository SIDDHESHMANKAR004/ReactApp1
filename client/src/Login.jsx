import Reveal from "./Reveal";

export default function Login(props) {
  const { loginStatus, name, onLoginFormSubmit } = props;

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    onLoginFormSubmit(event);
  }

  return (
    <div className="page-shell py-5">
      <div className="container-fluid px-3 px-lg-5 py-4">
        {loginStatus == "success" && (
          <div className="text-center py-5">
            <h3 className="fw-bold">Login Successful</h3>
            <p className="text-muted">Welcome {name}, start shopping with your premium collection.</p>
          </div>
        )}

        {loginStatus == "failed" && (
          <div className="text-center text-danger py-3">
            Sorry... Wrong Credentials
          </div>
        )}

        {(loginStatus == "failed" || loginStatus == "no") && (
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Reveal className="auth-card row g-0 overflow-hidden animate-fade-up" threshold={0.08}>
                <div className="col-12 col-lg-6 p-4 p-lg-5 bg-light d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="brand-mark mb-3">SKIAN</div>
                    <h3 className="fw-bold mb-3">Welcome back</h3>
                    <p className="text-muted">Sign in to access your wishlist, order history, and exclusive drops.</p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 p-4 p-lg-5">
                  <form action="" onSubmit={handleLoginFormSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="name" name="name" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" />
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <input type="submit" value="Sign in" className="btn btn-dark" />
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
