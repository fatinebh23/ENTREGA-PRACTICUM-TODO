import React, { useEffect } from 'react';

export function Wow() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    script.async = true;

    script.onload = () => {
      new window.WOW().init();
    };

    document.body.appendChild(script);

    return () => {
      // Limpiar al desmontar el componente si es necesario
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="wow fadeOutDown">
      {/* Contenido del componente */}
    </div>
  );
}

export default Wow;