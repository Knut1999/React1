import "../css/Work.css"
import bilde1 from "../images/kalkulator1.png";
import bilde2 from "../images/kalkulator_for_q.png";
import { Link } from "react-router-dom";

function Work() {
    return (
        <>
        <div className="streetView">
            <h2>Kalkulator</h2>

            <div className="work-rad">
                <div id="slider">
                    <Link to="/work_pages/delT">
                        <img src={bilde1} alt="bilde 1" />
                        <p>Kalkulator for endring i tempratur</p>
                    </Link>
                </div>
                <div id="slider">
                    <Link to="/work_pages/q">
                        <img src={bilde2} alt="bilde 1" />
                        <p>Kalkulator for finne riktig energibehov Q</p>
                    </Link>
                </div>
            </div>
            
        </div>
        </>
    );
}


export default Work