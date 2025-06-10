import ProsjektCard from "../components/ProsjektCard";
import { useState } from "react";
import "../css/Home.css"
import img1 from '../images/360.png'
import img2 from '../images/work.png'
import img3 from '../images/games.png'
import img4 from '../images/plugin.png'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const prosjekter = [
        {id: 1, title: "360 View", img: img1},
        {id: 2, title: "Work", img: img2},
        {id: 3, title: "Games", img: img3},
        {id: 4, title: "Plugins", img: img4}
    ];

    

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Søk ..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="prosjekter-grid">
                {prosjekter.map(
                    (prosjekt) => 
                    (
                    <ProsjektCard prosjekt={prosjekt} key={prosjekt.id} />
                    )
                )}
            </div>
        </div>
    );
}

export default Home