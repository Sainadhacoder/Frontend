function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      ></link>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://wowjohn.com/wp-content/uploads/2022/05/ecommerce-icon-png-8-Transparent-Images-Free.png"
            alt="..."
            width="30"
            height="24"
          />
        </a>
        <a className="navbar-brand" href="#">
          Cosmos-Gadgets
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/prd">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ab">
                AboutUs
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <a href="/loginUser">
              <i className="bi bi-person-circle m-2 p-2 fa-lg"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
