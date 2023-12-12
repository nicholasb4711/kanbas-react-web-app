import logo from './logo.svg';
import './App.css';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from "./Kanbas"
import Labs from "./Labs/index"
import { HashRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/HelloWorld" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
