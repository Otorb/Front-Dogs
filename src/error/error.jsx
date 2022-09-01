import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import notFoundImg from "../images/error.png";


export default function NotFound() {

  return (
    
      <div className="padre centrar-texto">
        <h2>Ruta no encontrada</h2>
        <img className="errores" src={notFoundImg} alt="" />
      </div>
    
  )
}