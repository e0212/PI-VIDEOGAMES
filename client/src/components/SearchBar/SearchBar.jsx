// Hacer function de Input de búsqueda para encontrar videojuegos por nombre

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGame } from "../../redux/actions";
import './SearchBar.css';

export default function SearchBar({setPage}){
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  
  function handleInputChange (event){
    event.preventDefault();
    setName(event.target.value);
    
  }

  function handleSubmit (event){
    setPage(1)
    event.preventDefault();
    dispatch(getNameGame(name));
  }
  
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search..."
        onChange={(targetValue) => handleInputChange(targetValue)}
      />
      <button
        type="button"
        onClick={(targetValue) => handleSubmit(targetValue)}
      >
        SEARCH
      </button>
    </div>
  );

}
     
     