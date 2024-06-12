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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ListeArtisans() {
  const query = useQuery();
  const category = query.get("category");
  const searchTerm = query.get("search");
  const [filteredDatas, setFilteredDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = datas;

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.specialty.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.location.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    setFilteredDatas(filtered);
  }, [category, searchTerm]);

  const handleViewDetails = (id) => {
    navigate(`/ficheArtisans/${id}`);
  };

  const renderStars = (note) => {
    const stars = [];
    const fullStars = Math.floor(note);
    const hasHalfStar = note % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="starsIcon" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStarHalfAlt} className="starsIcon" />
        );
      } else {
        stars.push(
          <FontAwesomeIcon key={i} icon={farStar} className="starsIcon" />
        );
      }
    }
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
