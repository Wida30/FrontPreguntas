import React, { useState, useEffect } from "react";
import { useParams,  Link } from "react-router-dom";
import axios from "axios";



import "./PreguntaDetail.scss";

const PreguntaDetail = () => {
  const { id } = useParams();
  const [pregunta, setPregunta] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getPreguntaByID = async () => {
      const res = await axios.get(`https://dbp-regunas.vercel.app/${id}`);
      setPregunta(res.data.preguntas);
    };
    getPreguntaByID();

    setTimeout(() => {
      setVisible(true);
    }, 8000);




  });


  return (
    <div className="cartaDetalle">
      {pregunta ? (
        <>
          
          <h3 className="tituloPregunta">{pregunta.pregunta}</h3>

          {!visible ? null :  <p  className="tituloRespuesta">{pregunta.respuesta}</p> }
         
        </>
      ) : null}

      <button>
      <Link to="/jugar">Volver</Link>
      
      </button>
    </div>
  );
};

export default PreguntaDetail;
