import { useParams } from "react-router-dom";
import datas from "../datas.json";

import Header from "../componants/Header";

function FicheArtisans() {
  const { id } = useParams();
  const artisan = datas.find((item) => item.id === id);

  if (!artisan) {
    return <div>Artisan non trouvé</div>;
  }

  return (
    <div className="ficheArtisans">
      <Header />
      <h1>{artisan.name}</h1>
      <p>{artisan.note}</p>
    </div>
  );
}

export default FicheArtisans;
