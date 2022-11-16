import React from 'react';
import Card from '../Card/Card';
import './AllCards.css'

export default function AllCards( {games, gamesPerPage, totalGames, page}) {

  console.log(games.genres)
  return (
    <div>
        <div className="conteinerAllCards">
          {games?.slice(
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

