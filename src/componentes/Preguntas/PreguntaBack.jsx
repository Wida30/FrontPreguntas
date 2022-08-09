import React, { useContext } from "react";

import { SWContext } from "../../context/context";
import Popup from "reactjs-popup";
import "./PreguntaBack.scss";


const PreguntaBack = () => {
  const { preguntas } = useContext(SWContext);
 ;

  return (
    <>
      <section className="back">
        <h2>Selecciona tu pregunta</h2>

        {preguntas &&
          preguntas.map((pregunta) => (
            <Popup trigger={<div className="backCard"></div>} position="center">
              {(close) => (
                <div className="cartaDetalle">
                  {pregunta ? (
                    <>
                      <h3 className="tituloPregunta">{pregunta.pregunta}</h3>

                      {/* {!visible ? null : (
                        <p className="tituloRespuesta">{pregunta.respuesta}</p>
                      )} */}

                      <Popup trigger={<button>Ver respuesta</button>} position="center" className="dosPop" >
                      <p className="tituloRespuesta">{pregunta.respuesta}</p>
                      </Popup>

                      
                    </>
                  ) : null}

                  {/* <a className="close" onClick={close} href="close">
                    &times;
                  </a> */}
                </div>
              )}
            </Popup>
          ))}
      </section>
    </>
  );
};

export default PreguntaBack;
