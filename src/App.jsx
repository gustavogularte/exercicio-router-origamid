import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import './App.css';
import Header from './Componentes/Header';
import Contato from './Componentes/Contato';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
