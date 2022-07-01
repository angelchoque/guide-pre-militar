import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomersPage from './CustomersPage';
import Home from './Home';
import OurEntrants from './OurEntrants'
import Teachings from './Teachings';
import Us from './Us'
import VirtualClass from './VirtualClass';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/por-que-nosotros" element={<Us />} />
        <Route path="/a-quienes-nos-dirigimos" element={<CustomersPage />} />
        <Route path="/descubre" element={<Teachings />} />
        <Route path="/aula-virtual" element={<VirtualClass />} />
        <Route path="/nuestros-ingresantes" element={<OurEntrants />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App