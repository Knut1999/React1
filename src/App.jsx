import './css/App.css'
import About from "./pages/About"
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Games from './pages/Games';
import Streetview from './pages/streetview';

function App() {
  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/streetview" element={<Streetview />}/>
        <Route path="/Games" element={<Games />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
