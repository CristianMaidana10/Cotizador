import React from 'react';
import { Link } from 'react-router-dom';
import Formulario from './Form';

function Inicio(): JSX.Element {
  return (
    <div>
      <h2>Seguros para tu hogar</h2>
      <Formulario />
      <div className="centered-link">
        <Link to="/historial">Historial</Link>
      </div>
    </div>
  );
}

export default Inicio;
