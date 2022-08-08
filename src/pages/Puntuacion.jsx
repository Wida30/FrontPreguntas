import React, { useState, useEffect } from "react";
import "./Puntuacion.scss";

const Puntuacion = () => {
  const [estado, setEstado] = useState(0);

  useEffect(() => {
    console.log("Soy el useEffect");
  }, [estado]);

  return (
    <section className="puntuacion">
      <h2 className="tituloPuntuacion">Puntuacion</h2>

      <div className="resultado">
        
        <button onClick={() => setEstado(estado + 1)}>Correcta</button>
        <h3>{estado}</h3>
      </div>
    </section>
  );
};

export default Puntuacion;
