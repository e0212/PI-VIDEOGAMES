import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getGames} from '../../redux/actions/index'


export const Pagination = () => { // gamesPerPage = 15, totalGames = 100, paginate = function
    const dispatch = useDispatch();// esto reemplaza a mapDispatchToProps - son hooks

    const games= useSelector((state)=>state.videogames) // se trae el estado de redux
     useEffect(()=>{ // lanza la accion de traer los juegos
      dispatch(getGames())
     },[dispatch])
   const totalGames = games.length;
    const gamesPerPage = 15; 
     

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }
console.log(totalGames)
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}