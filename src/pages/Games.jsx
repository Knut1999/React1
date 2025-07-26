import "../css/Games.css"
import bilde1 from "../images/games.png";
import bilde2 from "../images/super_tre_raad.png";
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
                        <img src={bilde1} alt="bilde 1" className="game-preview"/>
                        <p>Snake</p>
                    </Link>
                    <a href="https://super-tre-p-rad.vercel.app/">
                        <img src={bilde2} alt="bilde 1" className="game-preview"/>
                        <p>Super 3 på rad</p>
                    </a>
                </div>
            </div>
    </div>
}

export default Games