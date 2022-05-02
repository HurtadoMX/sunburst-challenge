import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Grafic from "../Grafic/Grafic";
import {
  getChevrolet,
  getVolkswagen,
  getNissan,
  getInfoTotalLista,
  limpiar,
} from "../Action";
import "./detail.css";
// import Grafic from '../Grafic/Grafic'

const Detail = () => {
  const dispatch = useDispatch();
  const [marca, setMarca] = useState("Todos");
  const [creador, setCreador] = useState("");
  const [origen, setOrigen] = useState("");

  const handleVolkswagen = () => {
    dispatch(limpiar());
    dispatch(getVolkswagen());
    setMarca("Volkswagen");
  };

  const handleNissan = () => {
    dispatch(limpiar());
    dispatch(getNissan());
    setMarca("Nissan");
  };

  const handleChevrolet = () => {
    dispatch(limpiar());
    dispatch(getChevrolet());
    setMarca("Chevrolet");
  };

  const handleTodos = () => {
    dispatch(limpiar());
    dispatch(getInfoTotalLista());
    setMarca("Todos");
  };

  return (
    <div className="banner">
      <div className="content">
        <h2>Grafica Sunburts de Automoviles</h2>

        {marca !== "Volkswagen" ? null : (
          <p>
            Los carros Volkswagen son automoviles de origen Aleman mas
            especifico en Wolfsburgo y que su creador es: Frente aleman del
            trabajo
          </p>
        )}

        {marca !== "Nissan" ? null : (
          <p>
            Los carros Nissan son automoviles de origen Japones y que su creador
            es: Yoshisuke Aikawa
          </p>
        )}

        {marca !== "Chevrolet" ? null : (
          <p>
            Chevrolet, también denominada Chevy, es una marca de automóviles y
            camiones con sede en Detroit, Estados Unidos perteneciente al grupo
            General Motors. Nació de la alianza de Louis Chevrolet y William
            Crapo Durant el 3 de noviembre de 1911, en los Estados Unidos,
            fabricando automóviles robustos.
          </p>
        )}
        {marca !== "Todos" ? null : (
          <p>
            Un automóvil o coche, es un vehículo mecánico de propulsión propia
            destinado al transporte de personas, generalmente con cuatro ruedas
            y capacidad entre una y nueve plazas. Las ruedas "delanteras" pueden
            moverse hacia los lados para permitir giros y tomar las curvas.
          </p>
        )}

        <br />
        <p className="content">Selecciona una opcion</p>
        <button onClick={(e) => handleVolkswagen()}>Volkswagen</button>
        <button onClick={(e) => handleNissan()}>Nissan</button>
        <button onClick={(e) => handleChevrolet()}>Chevrolet</button>
        <button onClick={(e) => handleTodos()}>Todos</button>
      </div>
      <div className="grafic">
        <Grafic />
      </div>
    </div>
  );
};

export default Detail;
