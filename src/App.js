import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Register from './components/Register';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/contact" element={<Contact />} />;
          <Route path="/register" element={<Register />} />;
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
