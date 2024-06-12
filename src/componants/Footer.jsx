import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <img
        src="/src/images/Logo.png"
        alt="Logo du site Trouve ton artisan coloré de différentes teintes de bleu."
        className="footerImg"
      />

      <section className="address">
        <p className="Lyon">
          <strong>Lyon</strong>
        </p>
        <span className="footerLocation">
          <img
            src="/src/images/whitePing.png"
            alt="petit pin blanc"
            className="whitePing"
          />
          <p>
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
            <br />
            +33 (0)4 36 73 40 00
          </p>
        </span>
      </section>
      <span className="footerBorder"></span>
      <section className="legal">
        <div className="container">
          <ul className="legalList row">
            <li className="legalItem col-6 col-lg-3">
              <a href="#" className="legalLink">
                Mentions légales
              </a>
            </li>
            <li className="legalItem col-6 col-lg-3">
              <a href="#" className="legalLink">
                Données personnelles
              </a>
            </li>

            <li className="legalItem col-6 col-lg-3">
              <a href="#" className="legalLink">
                Accessibilité
              </a>
            </li>
            <li className="legalItem col-6 col-lg-3">
              <a href="#" className="legalLink">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
