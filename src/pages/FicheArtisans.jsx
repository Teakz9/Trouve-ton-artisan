import { useEffect } from "react";
import { useParams } from "react-router-dom";
import datas from "../datas.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../componants/Header";
import Footer from "../componants/Footer";
import "../styles/FicheArtisans.scss";

function FicheArtisans() {
  const { id } = useParams();
  const item = datas.find((item) => item.id === id);

  useEffect(() => {
    if (item) {
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        setTimeout(() => {
          alert(
            `Votre formulaire a bien été envoyé à ${item.email}, vous recevrez une réponse sous 48 heures !`
          );
          form.reset();
        }, 1000);
      });
    }
  }, [item]);

  if (!item) {
    return <div>Artisan non trouvé</div>;
  }

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
    <div className="ficheArtisans">
      <Header />
      <main>
        <h1>{item.name}</h1>
        <span className="smallBorder1"></span>

        <div className="details">
          <section className="headDetails">
            <img
              src="/src/images/avatar.png"
              alt="Petite illustration ovale d'un avatar"
              className="bigAvatarIcon"
            />
            <span className="nameAndRate">
              <h3 className="workerName">{item.name}</h3>
              <p>{renderStars(item.note)}</p>
            </span>
          </section>

          <section className="midDetails">
            <h4 className="workerSpecialty">{item.specialty}</h4>
            <span className="locationAndPing">
              <img
                src="/src/images/bluePing.png"
                alt="Petit pin bleu pour illustrer la location"
                className="smallBluePing"
              />
              <p>{item.location}</p>
            </span>
          </section>

          <section className="about">
            <h5 className="aboutTitle">À PROPOS</h5>
            <p className="aboutText">{item.about}</p>
          </section>

          <form action="#" id="contactForm">
            <h5 className="formTitle">FORMULAIRE DE CONTACT</h5>
            <span className="formContent">
              <label htmlFor="nom">Votre Nom :</label>
              <input type="text" id="nom" />
            </span>
            <span className="formContent">
              <label htmlFor="prenom">Votre prénom :</label>
              <input type="text" id="prenom" />
            </span>
            <span className="formContent">
              <label htmlFor="objet">Objet :</label>
              <input type="text" id="objet" />
            </span>
            <span className="formContent">
              <label htmlFor="nom">Votre message :</label>
              <textarea name="message" id="message"></textarea>
            </span>
            <button type="submit" className="submit">
              Envoyer
            </button>
          </form>
          <a href={item.website} className="webURL">
            {item.website}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FicheArtisans;
