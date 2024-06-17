import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "./Nav";
import searchIcon from "../images/searchIcon.png";
import "../styles/Header.scss";

function Header() {
  const [searchTerm, setSearchTerm] = useState(""); // Stocke le terme de recherche
  const navigate = useNavigate(); // Constante pour changer la route de l'application
  const [showSearchBar, setShowSearchBar] = useState(false); // Affiche ou masque la barre de recherche
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Stocke la largeur de la fenêtre

  // Constante pour le changement de la barre de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Met à jour le terme de recherche selon la valeur saisie
  };

  // Constante pour la soumission du formulaire de recherche
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (searchTerm) {
      navigate(`/listeArtisans?search=${encodeURIComponent(searchTerm)}`); // Permet d'accéder au bon domaine d'activité
    }
  };

  // Constante pour l'affichage de la barre de recherche
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar); // Chznge l'état de la barre de recherche
  };

  // Effet pour gérer la redimension de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Met à jour la largeur de la fenêtre
      if (window.innerWidth >= 992) {
        // Si la largeur de la fenêtre est supérieur à 992 pixels
        setShowSearchBar(false); // Masque la barre de recherche
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/">
        <img
          src="/src/images/Logo.png"
          alt="Logo du site Trouve ton artisan coloré de différentes teintes de bleu."
          className="logo"
        />
      </Link>
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
                className="searchCase"
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
