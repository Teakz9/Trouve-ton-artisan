import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import datas from "../datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../componants/Header";
import Footer from "../componants/Footer";
import "../styles/ListeArtisans.scss";

// Fonction personnalisée afin de gérer les paramètres de la query
function useQuery() {
  // Retourne l'objet "URLSearchParams"
  return new URLSearchParams(useLocation().search);
}

export default function ListeArtisans() {
  //Constante qui récupère les données de la query
  const query = useQuery();
  const category = query.get("category"); // Récupère la valeur du paramètre "category"
  const searchTerm = query.get("search"); // Récupère la valeur du paramètre "search"

  //Constante qui stocke les données filtrés
  const [filteredDatas, setFilteredDatas] = useState([]);
  // Constante pour changer la route de l'application
  const navigate = useNavigate();

  // Effet pour filtrer les données en fonction des paramètres de la query
  useEffect(() => {
    let filtered = datas;

    // Filtre par catégorie si le terme "category" est présent
    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Filtre par terme de recherche si le paramètre "search" est présent
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseSearchTerm) || // Filtre par nom
          item.specialty.toLowerCase().includes(lowerCaseSearchTerm) || // Filtre par métier
          item.location.toLowerCase().includes(lowerCaseSearchTerm) // Filtre par localisation
      );
    }

    // Met à jour l'état avec les données filtrées
    setFilteredDatas(filtered);
  }, [category, searchTerm]);

  // Constante permettant de changer la route via l'id du profil, ce qui amènera à la page du profil détaillée
  const handleViewDetails = (id) => {
    navigate(`/ficheArtisans/${id}`);
  };

  // Constante pour générer des étoiles en fonction des notes des profils
  const renderStars = (note) => {
    const stars = [];
    const fullStars = Math.floor(note);
    const hasHalfStar = note % 1 !== 0;

    // Une boucle afin de générer 5 étoiles
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        // Ajoute une étoile pleine si l'indice "i" est inférieur ou égal au nombre d'étoiles pleines
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="starsIcon" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        //Ajoute une demi étoile si l'indice "i" est juste après le nombre d'étoiles pleines et qu'il y a une demi étoile
        stars.push(
          <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="starsIcon" />
        );
      } else {
        // Ajoute une étoile vide jusqu'à avoir 5 étoiles
        stars.push(
          <FontAwesomeIcon key={i} icon={farStar} className="starsIcon" />
        );
      }
    }
    // Permet l'affichage des étoiles
    return stars;
  };

  return (
    <div className="listeArtisans">
      <Header />
      <main>
        <h1>{category ? `${category}` : ""}</h1>
        <span className="smallBorder1"></span>
        <section className="container">
          <div className="row cardPosition">
            {filteredDatas.map((item) => (
              <div className="card" style={{ width: "18rem" }} key={item.id}>
                <ul className="card-body">
                  <img
                    src="/src/images/avatar.png"
                    alt="Petite illustration ovale d'un avatar"
                    className="card-img-top avatarIcon"
                  />
                  <h3 className="card-title">{item.specialty}</h3>
                  <p className="card-text">{item.name}</p>
                  <p className="card-text">{renderStars(item.note)}</p>
                  <span className="locationBlock">
                    <img
                      src="/src/images/bluePing.png"
                      alt="Petit pin bleu pour illustrer la location"
                      className="card-img bluePing"
                    />
                    <p className="card-text location">{item.location}</p>
                  </span>
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="btn more"
                  >
                    Voir le profil
                  </button>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
