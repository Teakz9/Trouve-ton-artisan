import Header from "../componants/Header";
import Footer from "../componants/Footer";

import "../styles/Erreur404.scss";

function Erreur404() {
  return (
    <div className="erreur404">
      <Header />
      <main className="errorContent">
        <span className="errorText">
          <h1 className="errorTitle">Erreur</h1>
          <p>Page non trouvée...</p>
        </span>
        <img
          src="/src/images/erreur404.png"
          alt="Petite illustration 404 afin d'avertir qu'une page n'existe pas"
          className="errorImg"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Erreur404;
