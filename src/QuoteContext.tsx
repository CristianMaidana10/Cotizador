import React, { createContext, useState, useContext } from 'react';

interface CotizacionContextProps {
  cotizaciones: any[];
  addCotizacion: (cotizacion: any) => void;
}

const CotizacionContext = createContext<CotizacionContextProps>({ cotizaciones: [], addCotizacion: () => {} });

export function CotizacionProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [cotizaciones, setCotizaciones] = useState<any[]>([]);

  const addCotizacion = (cotizacion: any) => {
    setCotizaciones([...cotizaciones, cotizacion]);
  };

  return (
    <CotizacionContext.Provider value={{ cotizaciones, addCotizacion }}>
      {children}
    </CotizacionContext.Provider>
  );
}

export function useCotizacion(): CotizacionContextProps {
  return useContext(CotizacionContext);
}
