function Header() {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand text-black-50 fw-bolder" href="/">
          EXPENSE TRACKER
        </a>

        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-x-4">
            <il className="nav-item">
              <a className="nav-link" href="/">
                <i className="fa-solid fa-home fa-5" />
              </a>
            </il>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fa-solid fa-plus" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
