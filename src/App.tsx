import { FC } from 'react';
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CotizacionProvider } from './QuoteContext';
import Inicio from './Home';
import Historial from './History';
import './style.css';

const App: FC = () => {
  return (
    <CotizacionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </CotizacionProvider>
  );
};

export default App;
