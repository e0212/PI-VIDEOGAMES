import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, image, genres, id }) {

  return (
    <div className="conteinerCard">
        <img className="gamePhoto" src={image} alt={name} />
      {
        <div className="capaInfo">
          <Link to={`/detail/${id}`}>
            <h4 className="name"> {name}</h4>{" "}
          </Link>
            <b> Genero: </b>
            {genres.map((genre) => {
              return <p>{genre}</p>;
            })}
        </div>
      }
    </div>
  );
}
// useSelector es un hook que nos permite acceder al estado de redux
