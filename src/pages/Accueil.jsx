import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componants/Header";
import Footer from "../componants/Footer";
import datas from "../datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Accueil.scss";

function Accueil() {
  // Déclare l'état local "topProfiles" avec le mutateur "setTopProfiles"
  // Initialisé avec le tableau vide
  const [topProfiles, setTopProfiles] = useState([]);

  // Utilise l'effet afin d'exécuter du code après le montage du composant
  useEffect(() => {
    // Filtre les données "top:" des profils afin de garder ceux qui ont la valeur "true"
    const filteredProfiles = datas.filter((profile) => profile.top === true);
    //Met à jour l'état "topProfiles" avec les profils filtrés
    setTopProfiles(filteredProfiles);
  }, []); // Ici le tableau vide indique que cet effet ne s'exécute qu'une seule fois au montage

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
        stars.push(
          // Ajoute une étoile vide jusqu'à avoir 5 étoiles
          <FontAwesomeIcon key={i} icon={farStar} className="starsIcon" />
        );
      }
    }
    // Permet l'affichage des étoiles
    return stars;
  };

  // Constante pour changer la route de l'application
  const navigate = useNavigate();

  // Constante permettant de changer la route via l'id du profil, ce qui amènera à la page du profil détaillée
  const handleViewDetails = (id) => {
    navigate(`/ficheArtisans/${id}`);
  };

  return (
    <div className="Accueil">
      <Header />
      <main>
        <h1>
          Comment trouver <br />
          mon artisan ?
        </h1>
        <span className="smallBorder1"></span>

        <h3 className="stepNumber">Étape 1 :</h3>
        <section className="step">
          <h4 className="stepTitle">
            Choisir la catégorie d&apos;artisanat dans le menu :
          </h4>
          <img
            src="/src/images/step1Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone1"
          />
          <img
            src="/src/images/step1Tablet.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepTablet stepTablet1"
          />
          <img
            src="/src/images/step1Desktop.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepDesktop stepDesktop1"
          />
        </section>

        <h3 className="stepNumber">Étape 2 :</h3>
        <section className="step">
          <h4 className="stepTitle">Choisir un artisan :</h4>
          <img
            src="/src/images/step2Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone2"
          />
          <img
            src="/src/images/step2Tablet.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepTablet stepTablet2"
          />
          <img
            src="/src/images/step2Desktop.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepDesktop stepDesktop2"
          />
        </section>

        <h3 className="stepNumber">Étape 3 :</h3>
        <section className="step">
          <h4 className="stepTitle">
            Le contacter via le formulaire de contact :
          </h4>
          <img
            src="/src/images/step3Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone3"
          />
          <img
            src="/src/images/step3Tablet.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepTablet stepTablet3"
          />
          <img
            src="/src/images/step3Desktop.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepDesktop stepDesktop3"
          />
        </section>

        <h3 className="stepNumber">Étape 4 :</h3>
        <section className="step">
          <h4 className="stepTitle">Une réponse sera apportée sous 48h:</h4>
          <img
            src="/src/images/step4Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone4"
          />
          <img
            src="/src/images/step4Tablet.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepTablet stepTablet4"
          />
          <img
            src="/src/images/step4Desktop.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepDesktop stepDesktop4"
          />
        </section>

        <section className="monthWorker">
          <h2>
            Nos 3 artisans du <br /> mois :
          </h2>
          <span className="smallBorder2"></span>

          <section className="container">
            <div className="row cardPosition">
              {topProfiles.map((profile) => (
                <div
                  className="card col-sm-1 col-md-2 col-xl-3"
                  style={{ width: "18rem" }}
                  key={profile.id}
                >
                  <div className="card-body">
                    <img
                      src="/src/images/avatar.png"
                      alt="Petite illustration ovale d'un avatar"
                      className="card-img-top avatarIcon"
                    />
                    <h5 className="card-title">{profile.specialty}</h5>
                    <p className="card-text">{profile.name}</p>
                    <div className="card-text">{renderStars(profile.note)}</div>
                    <span className="locationBlock">
                      <img
                        src="/src/images/bluePing.png"
                        alt="Petit pin bleu pour illustrer la location"
                        className="card-img bluePing"
                      />
                      <p className="card-text location">{profile.location}</p>
                    </span>
                    <a
                      className="btn more"
                      onClick={() => handleViewDetails(profile.id)}
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
