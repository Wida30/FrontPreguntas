import React, { useState, useEffect, createContext } from "react";

export const SWContext = createContext();

export const SWContextProvider = ({ children }) => {
  const [preguntas, setPreguntas] = useState([]);

  const getPreguntas = async () => {
    const preguntasAPI = await fetch("https://dbp-regunas.vercel.app/");
    const preguntasJSON = await preguntasAPI.json();
    console.log(preguntasJSON.preguntas);
    setPreguntas(preguntasJSON.preguntas);
  };

  useEffect(() => {
    getPreguntas();
  }, []);

  return (
    <SWContext.Provider value={{ preguntas, getPreguntas }}>
      {children}
    </SWContext.Provider>
  );
};
