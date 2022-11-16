
import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";


export default function LandingPage() { 
  return (
    <div className="conteinerLandingPage">
      <h1>Bienvenido a mi pagina de videjuegos!</h1>
      <Link to="/home">
        <button>INGRESAR</button>
      </Link>
    </div>
  );
}
