import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Nav.scss";

function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="Nav">
      <nav
        className={`navbar navbar-expand-lg below992 ${
          isNavCollapsed ? "nav-closed" : "nav-open"
        }`}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="menu"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/listeArtisans?category=Bâtiment"
                className="nav-link-responsive"
              >
                Bâtiment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/listeArtisans?category=Services"
                className="nav-link-responsive"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/listeArtisans?category=Fabrication"
                className="nav-link-responsive"
              >
                Fabrication
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/listeArtisans?category=Alimentation"
                className="nav-link-responsive"
              >
                Alimentation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="above992">
        <ul className="xlNav">
          <li className="nav-item">
            <Link to="/listeArtisans?category=Bâtiment" className="nav-link">
              Bâtiment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/listeArtisans?category=Services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/listeArtisans?category=Fabrication" className="nav-link">
              Fabrication
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/listeArtisans?category=Alimentation"
              className="nav-link"
            >
              Alimentation
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
