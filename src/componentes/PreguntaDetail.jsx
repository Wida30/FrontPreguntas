import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SWContext } from "../context/context";

const PreguntaDetail = () => {
  const { preguntas } = useContext(SWContext);

  const { _id } = useParams();

  
  console.log(preguntas)

  return (
    <div>
        {preguntas.map((pregunta) => (
            <p key={pregunta._id}>{pregunta.pregunta}</p>
        ))}
    
    </div>
  );
};

export default PreguntaDetail;
