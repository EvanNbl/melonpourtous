import './Styles/App.css';
import Home from './Pages/HomePage';
import ActuAll from './Pages/ActuAll';
import Galerie from './Pages/Galerie';
import Article from './Pages/Article';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/actuparticipative" element={<ActuAll />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
