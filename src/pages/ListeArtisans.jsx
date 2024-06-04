import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import datas from "../datas.json";

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

  return (
    <div className="listeArtisans">
      <h1>
        Liste des artisans -{" "}
        {category ? `Catégorie : ${category}` : "Aucun filtre"}
      </h1>
      <ul>
        {filteredDatas.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.specialty}</p>
            <p>{item.note}</p>
            <button onClick={() => handleViewDetails(item.id)}>
              Voir le profil
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
