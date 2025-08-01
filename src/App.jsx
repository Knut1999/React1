import './css/App.css'
import About from "./pages/About"
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Games from './pages/Games';
import Streetview from './pages/streetview';
import Snake from './pages/Snake';
import Work from './pages/Work';
import DelT from './pages/work_pages/delT';
import Q from './pages/work_pages/q';
import Plugins from './pages/Plugins';

function App() {
  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        {/* Dette er en kommentar */}
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/streetview" element={<Streetview />}/>
        <Route path="/Games" element={<Games />}/>
        <Route path="/Snake" element={<Snake />}/>
        <Route path="/Work" element={<Work />}/>
        <Route path="/work_pages/delT" element={<DelT />}/>
        <Route path="/work_pages/q" element={<Q />}/>
        <Route path="/Plugins" element={<Plugins />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
