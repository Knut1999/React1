import "../css/streetview.css"
import bilde1 from "../images/360.png";
import bilde2 from "../images/Tannlegehøyskolen_Garderober.png";
import bilde3 from "../images/Tilfluktsrom.png";
import bilde4 from "../images/Toaletter.png";

function Streetview() {
    return (
        <>
        <div className="streetView">
            <h2>360 View</h2>
            
            <p>
            Naviger deg rundt i bygg enkelt<br />
            </p>

            <div className="bilde-rad">
                <div id="slider">
                    <a href="https://25028.vercel.app/">
                        <img src={bilde1} alt="bilde 1" />
                        <p>UiO - BL18</p>
                    </a>
                    <a href="https://marzipano-psi.vercel.app/">
                        <img src={bilde2} alt="bilde 2" />
                        <p>Tannlegehøyskolen Garderober</p>
                    </a>
                    <a href="https://25012-tilfluktsrom.vercel.app/">
                        <img src={bilde3} alt="bilde 3" />
                        <p>Tannlegehøyskolen Tilfluktsrom</p>
                    </a>
                    <a href="https://ansatte-toaletter.vercel.app/">
                        <img src={bilde4} alt="bilde 4" />
                        <p>Tannlegehøyskolen Ansatte-toaletter</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Streetview