import { Link } from "react-router-dom";

function Nav() {
    return(
        <ul>
            <li>
                <Link to="/listeArtisans?category=Bâtiment">Bâtiment</Link>
                <Link to="/listeArtisans?category=Services">Services</Link>
                <Link to="/listeArtisans?category=Fabrication">Fabrication</Link>
                <Link to="/listeArtisans?category=Alimentation">Alimentation</Link>
            </li>
        </ul>
    )
}

export default Nav;