
import React from "react";
import { Link } from "react-router-dom";


export default function Card({
  name,
  image,
  genres,
  id,
}) {
  return (
    <Link to={`/videogames/${id}`}>
      <div>
        <div className="imagen">
          <img
            className="gamePhoto"
            src={image}
            alt={name}
            width="400px"
            height=""
          />
        </div>

        <div >
          <h4 className="name"> {name}</h4>
            <div>
              <p>
                <b> Genero: </b>
                {genres}
              </p>


            </div>
        </div>
      </div>
    </Link>
  );
}