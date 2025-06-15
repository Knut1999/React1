import "../css/streetview.css"

function Streetview() {
    return (
        <>
        <div className="streetView">
            <h2>360 View</h2>
            
            <p>
            Naviger deg rundt i bygg enkelt<br />
            </p>

            <div className="bilde-rad">
                <a href="https://25028.vercel.app/">
                    <img src = "/src/images/360.png" alt="bilde 1" />
                    <p>UiO - BL18</p>
                </a>
                <a href="https://marzipano-psi.vercel.app/">
                    <img src = "/src/images/Tannlegehøyskolen_Garderober.png" alt="bilde 1" />
                    <p>Tannlegehøyskolen Garderober</p>
                </a>
                <a href="https://25012-tilfluktsrom.vercel.app/">
                    <img src = "/src/images/Tilfluktsrom.png" alt="bilde 1" />
                    <p>Tannlegehøyskolen Tilfluktsrom</p>
                </a>
                <a href="https://ansatte-toaletter.vercel.app/">
                    <img src = "/src/images/Toaletter.png" alt="bilde 1" />
                    <p>Tannlegehøyskolen Ansatte-toaletter</p>
                </a>
            </div>
        </div>
        </>
    );
}

export default Streetview