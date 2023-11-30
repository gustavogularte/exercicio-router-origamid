import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import './App.css';
import Header from './Componentes/Header';
import Contato from './Componentes/Contato';
import Produto from './Componentes/Produto';
import Footer from './Componentes/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
