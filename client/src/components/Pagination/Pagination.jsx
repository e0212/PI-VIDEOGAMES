import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions/index";
import "./Pagination.css";

export const Pagination = ({ totalGames, gamesPerPage, page, setPage }) => {
  // gamesPerPage = 15, totalGames = 100, paginate = function
  const dispatch = useDispatch(); // esto reemplaza a mapDispatchToProps - son hooks

  const games = useSelector((state) => state.videogames); // se trae el estado de redux
  useEffect(() => {
    // lanza la accion de traer los juegos
    dispatch(getGames());
  }, [dispatch]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    // math ceil redondea para arriba
    pageNumbers.push(i);
  }
  const Previus = () => {
    setPage(page - 1);
  };
  const Next = () => {
    setPage(page + 1);
  };
  const onChange = (e) => {
    setPage(Number(e.target.value));
  };
  return (
    <div className="pagination">
      <button className="butttonGet" onClick={Previus}>
        Prev.
      </button>
      {pageNumbers.map((number) => (
        <button className="paginationButton" onClick={onChange} value={number}>
          {number}
        </button>
      ))}
      <button className="butttonGet" onClick={Next}>
        Next
      </button>
    </div>
  );
};
