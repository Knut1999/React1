import "../css/Work.css"
import bilde1 from "../images/kalkulator1.png";
import { Link } from "react-router-dom";

function Work() {
    return (
        <>
        <div className="streetView">
            <h2>Kalkulator</h2>
            
            <p>
            Glem hoderegning – denne kalkulatoren tar formelen for deg hver eneste gang!<br />
            </p>

            <div className="work-rad">
                <div id="slider">
                    <Link to="/work_pages/delT">
                        <img src={bilde1} alt="bilde 1" />
                        <p>Kalkulator for endring i tempratur</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}


export default Work