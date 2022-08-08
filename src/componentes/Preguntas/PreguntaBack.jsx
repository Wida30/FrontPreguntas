import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SWContext } from "../../context/context";

import "./PreguntaBack.scss";


const PreguntaBack = () => {
  const { preguntas } = useContext(SWContext);

  return (
    <>
      <section className="back">
        <h2>Selecciona tu pregunta</h2>

        {preguntas &&
          preguntas.map((pregunta) => (
           
              <Link key={pregunta._id} to={`${pregunta._id}`}>
              <div className="backCard"></div>
              </Link>
           
          ))}
      </section>
    
    </>
  );
};

export default PreguntaBack;
