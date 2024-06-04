import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import searchIcon from "../images/searchIcon.png";
import "../styles/Header.scss";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/listeArtisans?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 992) {
        setShowSearchBar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <img
        src="/src/images/Logo.png"
        alt="Logo du site Trouve ton artisan coloré de différentes teintes de bleu."
        className="logo"
      />
      <div className="searchAndMenu">
        <div className="searchBar">
          {windowWidth < 992 && (
            <img
              src={searchIcon}
              alt="Petite loupe pour la barre de recherche"
              onClick={toggleSearchBar}
              className="searchIcon"
            />
          )}
          {(showSearchBar || windowWidth >= 992) && (
            <form className="searchForm" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Rechercher..."
              />
            </form>
          )}
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
