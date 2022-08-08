import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contac = () => {

  const INITIAL_STATE = {
    nombre: "",
    email: "",
    mensaje: "",
  };

  const [state, setState] = useState(INITIAL_STATE);

  const sendEmail = (event) => {
    event.preventDefault();

    //emailjs tiene por defecto el funcionalidad sendForm que recibe cuatro parámetros: serviceID, template del email(en settings del template), formulario(con el evento), y el public key (opcional)

    emailjs
      .sendForm(
        "service_jiotrv2",
        "template_n57dca8",
        event.target,
        "JcZaAv_MqGs2yEZQE"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

      setState(INITIAL_STATE)
  };

  return (
    <div className="formulario">
      <h2>Contacta</h2>

      <form className="formulario" onSubmit={sendEmail}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="mensaje">Tu mensaje:</label>
        <textarea
          type="text"
          id="mensaje"
          cols="30"
          rows="10"
          name="mensaje"
        ></textarea>

        <button> Enviar</button>
      </form>
    </div>
  );
};

export default Contac;
