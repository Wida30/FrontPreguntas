import React, { useState, useEffect } from "react";
import "./Puntuacion.scss";

const Puntuacion = () => {
  const [estado, setEstado] = useState(0);

  useEffect(() => {
   
  }, [estado]);

  return (
    <section className="puntuacion">
      <h2 className="tituloPuntuacion"> Tu puntuacion:</h2>

      <div className="resultado">
        
        <button onClick={() => setEstado(estado + 1)}>Correcta</button>
        <h3>{estado}</h3>
        <button onClick={() => setEstado(estado - 1)}>Fallo</button>
        
      </div>
    </section>
  );
};

export default Puntuacion;
