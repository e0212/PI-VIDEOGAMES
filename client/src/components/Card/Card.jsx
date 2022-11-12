
import React from "react";
import { Link } from "react-router-dom";

export default function Card({
  name,
  image,
  genres,
  id,
}) {
  return (
    
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
        <Link to={`/detail/${id}`}><h4 className="name">  {name}</h4> </Link>
            <div>
              <p>
                <b> Genero: </b>
                {genres}
              </p>


            </div>
        </div>
      </div>
 
  );
}