import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCards from "../AllCards/AllCards";
import FiltersBar from "../FiltersBar/FiltersBar";
import SearchBar from "../SearchBar/SearchBar";
import { Pagination } from "../Pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch(); // esto reemplaza a mapDispatchToProps - son hooks
  const games = useSelector((state) => state.games);
  const [page, setPage] = useState(1);

  // ACA RENDERIZO LA DATA QUE VIENE DEL BACKEND
  return (
    <div>
      <h1>HOME</h1>
      <SearchBar />
      <FiltersBar />
      <AllCards />
      <Pagination />
    </div>
  );
}
