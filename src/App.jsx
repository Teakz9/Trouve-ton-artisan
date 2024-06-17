import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Accueil from "./pages/Accueil";
import FicheArtisans from "./pages/FicheArtisans";
import ListeArtisans from "./pages/ListeArtisans";
import Erreur404 from "./pages/Erreur404";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/ficheArtisans/:id" element={<FicheArtisans />}></Route>
        <Route path="/listeArtisans" element={<ListeArtisans />}></Route>
        <Route path="*" element={<Erreur404 />}></Route>
      </Routes>
    </div>
  );
}
