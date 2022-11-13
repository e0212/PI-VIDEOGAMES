// Crear function Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros

// import React from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getGenre } from "../../redux/actions";
//
// export default function FiltersBar() {

//   const dispatch = useDispatch()
//   const [genre, setGenre] = useState('')
//   const [order, setOrder] = useState('')
//   const [created, setCreated] = useState('')
//
//   function handleInputChange (event){
//     event.preventDefault();
//     setGenre(event.target.value);
//   }
//
//   function handleSubmit (event){
//     event.preventDefault();
//     dispatch(getGenre(genre));
//     console.log(genre)
//   }
//
//   function handleInputChangeOrder (event){
//     event.preventDefault();
//     setOrder(event.target.value);
//   }
//
//   function handleSubmitOrder (event){
//     event.preventDefault();
//     dispatch(getGenre(order));
//     console.log(order)
//   }
//
//   function handleInputChangeCreated (event){
//     event.preventDefault();
//     setCreated(event.target.value);
//   }
//
//   function handleSubmitCreated (event){
//     event.preventDefault();
//     dispatch(getGenre(created));
//     console.log(created)
//   }
//
//   return (
//     <div>
//       <input type="text" placeholder='Search...'
//       onChange={(targetValue) => handleInputChange(targetValue)}
//       />
//       <button type="button" onClick={targetValue => handleSubmit(targetValue)}>Search</button>
//       <input type="text" placeholder='Order...'
//       onChange={(targetValue) => handleInputChangeOrder(targetValue)}
//       />
//       <button type="button" onClick={targetValue => handleSubmitOrder(targetValue)}>Order</button>
//       <input type="text" placeholder='Created...'
//       onChange={(targetValue) => handleInputChangeCreated(targetValue)}
//       />
//       <button type="button" onClick={targetValue => handleSubmitCreated(targetValue)}>Created</button>
//     </div>
//   )
//
// }



