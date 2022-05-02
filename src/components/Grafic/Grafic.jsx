import React from "react";
import Treemap from "sunburst-chart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoTotal, getInfoTotalLista } from "../Action";
import "./grafic.css";
import Sunburst from "../Sunburst/Sunburst";

const Grafic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoTotalLista());
  }, []);

  return <Sunburst />;
};

export default Grafic;
