import React, { useState, useEffect, ChangeEvent } from 'react';
import CotizadorButton from './QuoteButton';

interface Propiedad {
  tipo: string;
  factor: string;
}

interface Ubicacion {
  tipo: string;
  factor: string;
}

function Formulario() {
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([]);
  const [tipoPropiedad, setTipoPropiedad] = useState<string>('');
  const [tipoUbicacion, setTipoUbicacion] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://653831aaa543859d1bb14d53.mockapi.io/propiedades')
      .then((response) => response.json())
      .then((data: Propiedad[]) => setPropiedades(data));

    fetch('https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones')
      .then((response) => response.json())
      .then((data: Ubicacion[]) => setUbicaciones(data));
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!tipoPropiedad || !tipoUbicacion || !inputValue) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  }

  return (
    <div>
      Tipo de Propiedad:
      <select
        id="tipoPropiedad"
        value={tipoPropiedad}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTipoPropiedad(e.target.value)}
      >
        <option value="">Selecciona un tipo de propiedad</option>
        {propiedades.map((propiedad) => (
          <option key={propiedad.tipo} value={propiedad.tipo}>
            {propiedad.tipo}
          </option>
        ),
        )}
      </select>

      Tipo de Ubicación:
      <select
        id="tipoUbicacion"
        value={tipoUbicacion}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTipoUbicacion(e.target.value)}
      >
        <option value="">Selecciona un tipo de ubicación</option>
        {ubicaciones.map((ubicacion) => (
          <option key={ubicacion.tipo} value={ubicacion.tipo}>
            {ubicacion.tipo}
          </option>
        ),
        )}
      </select>

      <h3>Ingrese los Metros²: </h3>
      <input
        type="number"
        id="inputField"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        min="10"
      />

      <CotizadorButton
        tipoPropiedad={tipoPropiedad}
        tipoUbicacion={tipoUbicacion}
        inputValue={inputValue}
        propiedades={propiedades}
        ubicaciones={ubicaciones}
        onCalcular={(cotizacion) => setResultado(cotizacion)}
      />

      {resultado !== null && (
        <div className="resultado">
          Valor: $ {resultado}
        </div>
      )}
    </div>
  )
}

export default Formulario;
