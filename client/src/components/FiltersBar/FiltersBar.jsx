// Crear function Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterGamesByGenre, getGenres } from "../../redux/actions";
import { sortAlphabetically } from "../../redux/actions";
import { sortByRating } from "../../redux/actions";
import { filterCreatedOrExist } from "../../redux/actions";
import * as actions from "../../redux/actions";
import './FiltersBar.css'
import { Link } from "react-router-dom";

export default function FiltersBar({setPage}) {
  //dispatch a handleFilterByGenre
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]); //desde aca
  const genres = useSelector((state) => state.genres);
  const games = useSelector((state) => state.games);

  function handleFilterByGenre(e) {
    setPage(1);
    dispatch(filterGamesByGenre(e.target.value));
  }

  //dispatch a handleFilterByCreatedOrExist
  function handleFilterByCreatedOrExist(e) {
    setPage(1);
    dispatch(filterCreatedOrExist(e.target.value)); // invoco a la action
  }

  //dispatch a handleSortAlphabetically
  function handleSortAlphabetically(e) {
    setPage(1);
    e.preventDefault();
    dispatch(sortAlphabetically(e.target.value));
    // setCurrentPage(1);
    // setOrden(e.target.value);
  }

  function handleSortByRating(e) {
    setPage(1);
    e.preventDefault();
    dispatch(sortByRating(e.target.value));
  }

  return (
    <div className="filtersBar">
      <div className="filter">
        <label htmlFor="genre">Filter by genre:</label>
        <select name="genre" onChange={handleFilterByGenre}>
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="createdOrExist">Filter by created or exist:</label>
        <select name="createdOrExist" onChange={handleFilterByCreatedOrExist}>
          <option value="All">All</option>
          <option value="Created">Created</option>
          <option value="Exist">Exist</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="sortAlphabetically">Sort alphabetically:</label>
        <select
          name="sortAlphabetically"
          onChange={(e) => handleSortAlphabetically(e)}
        >
          <option value="All">All</option>
          <option value="A - Z">A-Z</option>
          <option value="Z - A">Z-A</option>
        </select>
      </div>

      <div className="filter">
        <label htmlFor="sortRating">Sort rating:</label>
        <select name="sortRating" onChange={handleSortByRating}>
          <option value="All">All</option>
          <option value="Rating Mayor">Rating Mayor</option>
        </select>
      </div>
      <div className="Link">
        <Link to="/Form">
          <button>Create</button>
        </Link>
      </div>
    </div>
  );
}
