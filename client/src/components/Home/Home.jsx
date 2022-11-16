import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AllCards from "../AllCards/AllCards";
import FiltersBar from "../FiltersBar/FiltersBar";
import SearchBar from "../SearchBar/SearchBar";
import { getGames } from "../../redux/actions/index";
import { Pagination } from "../Pagination/Pagination";
import "./Home.css";

export default function Home() {

  const games = useSelector((state) => state.videogames);
  const dispatch = useDispatch(); // esto reemplaza a mapDispatchToProps - son hooks
  useEffect(() => {
    // lanza la accion de traer los juegos
    dispatch(getGames());
  }, [dispatch]);
  const totalGames = games?.length; // total de juegos 
  const gamesPerPage = 15;
  const [page, setPage] = useState(1); // pagina actual
  // ACA RENDERIZO LA DATA QUE VIENE DEL BACKEND
  return (
    <div className="conteinerHome">
      <div className="header">
        <h1>HOME</h1>
        {/*<Link to="./components/Form/Form"></Link>*/}
        <SearchBar setPage={setPage}/>
        <FiltersBar setPage={setPage}/>
      </div>
      <AllCards games={games} gamesPerPage={gamesPerPage} totalGames={totalGames} page={page} setPage={page}/>
      <Pagination
        totalGames={totalGames}
        gamesPerPage={gamesPerPage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
