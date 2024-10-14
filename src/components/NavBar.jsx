function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container container-fluid">
        <a className="navbar-brand text-light" href="#">
          <b>AnimeBinge</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse gap-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About Us
              </a>
            </li>
          </ul>
          <form className="d-flex gap-4 justify-content-center" role="search">
            <button className="btn btn-outline-light" type="submit">
              Sign Up
            </button>
            <button className="log-in btn btn-outline-light" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
