// Hacer function de Input de búsqueda para encontrar videojuegos por nombre

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameGame } from "../../redux/actions";

export default function SearchBar(){
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  
  function handleInputChange (event){
    event.preventDefault();
    setName(event.target.value);
    
  }

  function handleSubmit (event){
    event.preventDefault();
    dispatch(getNameGame(name));
    console.log(name)
    
  }
  
  return (
    <div>
      <input type="text" placeholder='Search...' 
      onChange={(targetValue) => handleInputChange(targetValue)}
      
      />
      <button type="button" onClick={targetValue => handleSubmit(targetValue)}>Search</button>
    </div>
  )

}
     
     