import "../css/Games.css"
import bilde1 from "../images/games.png";
import { Link } from "react-router-dom";

function Games() {
    return <div className="Games">
            <h2>Kos deg ♥️</h2>
            <p>
            Flere spill på vei<br />
            </p>
            <div className="games-rad">
                <div id="slider">
                    <Link to="/Snake">
                        <img src={bilde1} alt="bilde 1" />
                        <p>Snake</p>
                    </Link>
                </div>
            </div>
    </div>
}

export default Games