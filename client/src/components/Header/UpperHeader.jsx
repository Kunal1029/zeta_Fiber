function UpperHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
            <div className="d-flex">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default UpperHeader;
