import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand text-black-50 fw-bolder" to="/home">
          EXPENSE TRACKER
        </Link>

        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-x-4">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <i className="fa-solid fa-home fa-5" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">
                <i className="fa-solid fa-plus" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
