
import "../css/ProjectCard.css"

function ProsjektCard({prosjekt}) {

    function onAbouteClick() {
        alert("Clicked")
    }
    return <div className="project-card">
        <div className="project-poster">
            <img src={prosjekt.img} alt={prosjekt.title} />
            <div className="project-overlay">               
                <button className="aboute-btn" onClick={onAbouteClick}>
                    ❤︎
                </button>
            </div>
        </div>
        <div className="project-info">
            <h3>{prosjekt.title}</h3>
            <p>{prosjekt.release_date}</p>
        </div>
    </div>
}

export default ProsjektCard