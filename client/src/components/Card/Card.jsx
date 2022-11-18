import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, name, image, genres}) {
  return (
    <div className="conteinerCard">
        <img className="gamePhoto" src={image} alt={name} />
      {
        <div className="capaInfo">
          <Link to={`/detail/${id}`}>
            <h4 className="name"> {name}</h4>
          </Link>
            <b> Genero: </b>
            {genres.length !== 0 ? genres.map((genre) => {
              return <p>{genre}</p>;
            }): <p>no tiene genero</p>}
        </div>
      }
    </div>
  );
}
// useSelector es un hook que nos permite acceder al estado de redux
