import React from 'react';
import Card from '../Card/Card';
import './AllCards.css'
//import{useDispatch, useSelector} from 'react-redux'

export default function AllCards( {games, gamesPerPage, totalGames, page}) {

const indexOfLastGame = page * gamesPerPage;
const indexOfFirstGame = indexOfLastGame - gamesPerPage;
const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);



  console.log(games.genres)
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

