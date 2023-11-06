import React from 'react';
import { useCotizacion } from './QuoteContext';

interface CotizadorButtonProps {
  tipoPropiedad: string;
  tipoUbicacion: string;
  inputValue: string;
  propiedades: { tipo: string, factor: string }[];
  ubicaciones: { tipo: string, factor: string }[];
  onCalcular: (cotizacion: string) => void;
}

const CotizadorButton: React.FC<CotizadorButtonProps> = ({ tipoPropiedad, tipoUbicacion, inputValue, propiedades, ubicaciones, onCalcular }) => {
  const { addCotizacion } = useCotizacion();
  const costoM2 = 35.86;

  const handleCotizar = () => {
    if (!tipoPropiedad || !tipoUbicacion || !inputValue) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const factorPropiedad = parseFloat(
      propiedades.find((propiedad) => propiedad.tipo === tipoPropiedad)?.factor ?? '0'
    );

    const factorUbicacion = parseFloat(
      ubicaciones.find((ubicacion) => ubicacion.tipo === tipoUbicacion)?.factor ?? '0'
    );

    const inputValueSafe = inputValue ?? '';

    const valorInput = inputValueSafe ? parseFloat(inputValueSafe) : 0;

    const cotizacion = (factorPropiedad * factorUbicacion * parseFloat(inputValueSafe) * costoM2).toFixed(2);

    onCalcular && onCalcular(cotizacion);

    const nuevaCotizacion = {
      fechaHora: new Date().toLocaleString(),
      tipoPropiedad,
      tipoUbicacion,
      importePoliza: cotizacion,
    };

    addCotizacion(nuevaCotizacion);

    const historialString = localStorage.getItem('historial');
    const historial = historialString ? JSON.parse(historialString) : [];

    historial.push(nuevaCotizacion);

    localStorage.setItem('historial', JSON.stringify(historial));
  };

  return (
    <div>
      <button onClick={handleCotizar}>Cotizar</button>
    </div>
  );
};

export default CotizadorButton;
