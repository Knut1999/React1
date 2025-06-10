import './css/App.css'
import About from "./pages/About"
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
