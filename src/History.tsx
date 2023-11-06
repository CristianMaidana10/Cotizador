import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Cotizacion {
  fechaHora: string;
  tipoPropiedad: string;
  tipoUbicacion: string;
  importePoliza: string | number;
}

function Historial() {
  const [historial, setHistorial] = useState<Cotizacion[]>([]);

  useEffect(() => {
    const historialString = localStorage.getItem('historial');
    const historial = historialString ? JSON.parse(historialString) : [];

    setHistorial(historial);
  }, []);

  return (
    <div>
      <h2>Historial de Cotizaciones</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Tipo de Propiedad</th>
            <th>Tipo de Ubicación</th>
            <th>Importe Mensual</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.fechaHora}</td>
              <td>{cotizacion.tipoPropiedad}</td>
              <td>{cotizacion.tipoUbicacion}</td>
              <td>
                {typeof cotizacion.importePoliza === 'string'
                  ? cotizacion.importePoliza.startsWith('$')
                    ? cotizacion.importePoliza
                    : `$${parseFloat(cotizacion.importePoliza).toFixed(2)}`
                  : `$${cotizacion.importePoliza?.toFixed(2) || '0'}`
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="centered-link">
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

export default Historial;
