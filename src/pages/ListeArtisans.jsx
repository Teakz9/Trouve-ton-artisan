import {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import datas from '../datas.json';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function ListeArtisans() {
    const query = useQuery();
    const category = query.get('category');
    const [filteredDatas, setFilteredDatas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (category) {
            const filtered = datas.filter(item => item.category === category);
            setFilteredDatas(filtered);
        } else {
            setFilteredDatas(datas);
        }
    }, [category]);

    const handleViewDetails = (id) => {
        navigate(`/ficheArtisans/${id}`)
    }

    return(
        <div className="listeArtisans">
            <h1>Liste des artisans - {category ? `Catégorie : ${category}` : 'Toutes catégories'}</h1>
            <ul>
                {filteredDatas.map(item => (
                   <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.specialty}</p>
                        <p>{item.note}</p>
                        <button onClick={() => handleViewDetails(item.id)}>Voir le profil</button>
                   </div>
                ))}
            </ul>
        </div>
    );
}

export default ListeArtisans;