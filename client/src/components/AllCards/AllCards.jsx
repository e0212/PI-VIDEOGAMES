import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card';
import './AllCards.css'
import { getGames } from "../../redux/actions/index";

export default function AllCards( { gamesPerPage, page}) {

  const games = useSelector((state) => state.videogames);
  const dispatch = useDispatch(); // esto reemplaza a mapDispatchToProps - son hooks
  useEffect(() => {
    // lanza la accion de traer los juegos
    dispatch(getGames());
  }, [dispatch]);

  console.log(games)
  return (
    <div>
        <div className="conteinerAllCards">
          {games?.slice( // si pagina es 1, empieza en 0 y termina en 15, si es 2 empieza en 15 y termina en 30. (la var page es la que cambia en pagination)
                (page - 1) * gamesPerPage,
                (page - 1) * gamesPerPage + gamesPerPage
              ).map((game) => (
            <Card
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              genres={game.genres}
            />
          ))}
        </div>

    </div>
  );
}

