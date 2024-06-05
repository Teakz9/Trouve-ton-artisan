import Header from "../componants/Header";

import "../styles/Accueil.scss";

function Accueil() {
  return (
    <div className="Accueil">
      <Header />
      <main>
        <h1>
          Comment trouver <br />
          mon artisan ?
        </h1>
        <span className="smallBorder"></span>

        <h2 className="stepNumber">Étape 1 :</h2>
        <section className="step">
          <h3 className="stepTitle">
            Choisir la catégorie d&apos;artisanat dans le menu :
          </h3>
          <img
            src="/src/images/step1Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone1"
          />
        </section>

        <h2 className="stepNumber">Étape 2 :</h2>
        <section className="step">
          <h3 className="stepTitle">Choisir un artisan :</h3>
          <img
            src="/src/images/step2Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone2"
          />
        </section>

        <h2 className="stepNumber">Étape 3 :</h2>
        <section className="step">
          <h3 className="stepTitle">
            Le contacter via le formulaire de contact :
          </h3>
          <img
            src="/src/images/step3Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone3"
          />
        </section>

        <h2 className="stepNumber">Étape 4 :</h2>
        <section className="step">
          <h3 className="stepTitle">Une réponse sera apportée sous 48h:</h3>
          <img
            src="/src/images/step4Phone.png"
            alt="Capture d'écran d'une image illustrant l'étape d'un fonctionnement de site internet"
            className="stepPhone stepPhone4"
          />
        </section>
      </main>
    </div>
  );
}

export default Accueil;
