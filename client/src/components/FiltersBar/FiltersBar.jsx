// Crear function Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { FILTER_GAMES_BY_GENRE } from '../../redux/actions';
import { filterGamesByGenre, getGenres } from '../../redux/actions';
import {  sortAlphabetically  } from '../../redux/actions';
import { sortByRating} from '../../redux/actions';
import {filterCreatedOrExist} from '../../redux/actions';


export default function FiltersBar() {

    //dispatch a handleFilterByGenre
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getGenres())}, [dispatch]);//desde aca
    const genres = useSelector((state) => state.genres);
    //console.log(genres);
    const games = useSelector((state) => state.games);
    
    function handleFilterByGenre(e) {
        dispatch(filterGamesByGenre(e.target.value));
    }

    
    
    // dispatch a filterCreatedOrExist
    // useEffect(() => {dispatch(filterCreatedOrExist())}, [dispatch]);//hasta aca
    // const filterCreatedOrExist = useSelector((state) => state.filterCreatedOrExist);
    // //console.log(filterCreatedOrExist);
    // //const games1 = useSelector((state) => state.games);
    
    function handleFilterByCreatedOrExist(e) {
        dispatch(filterCreatedOrExist(e.target.value)); // invoco a la action
        
    }
    
    
    
    function handleSortAlphabetically(e) {
        e.preventDefault();
        dispatch(sortAlphabetically(e.target.value))
    }
    
    function handleSortByRating(e) {
        e.preventDefault();
        dispatch(sortByRating(e.target.value))
  
    }
    
    return (
        <div className='filtersBar'>
        <div className='filter'>
            <label htmlFor='genre'>Filter by genre:</label>
            <select name='genre' onChange={handleFilterByGenre}>
            <option value='All'>All</option>
            {genres.map((genre) => (
                <option key={genre.id} value={genre.name}>
                {genre.name}
                </option>
            ))}
            </select>
        </div>
        <div className='filter'>
            <label htmlFor='createdOrExist'>Filter by created or exist:</label>
            <select name='createdOrExist' onChange={handleFilterByCreatedOrExist}>
            <option value='All'>All</option>
            <option value='Created'>Created</option>
            <option value='Exist'>Exist</option>
            </select>
        </div>
        <div className='filter'>
            <label htmlFor='sortAlphabetically'>Sort alphabetically:</label>
            <select name='sortAlphabetically' onChange={(e)=>handleSortAlphabetically(e)}>
            <option value='All'>All</option>
            <option value='A - Z'>A-Z</option>
            <option value='Z - A'>Z-A</option>
            </select>
        </div>


        <div className='filter'>
            <label htmlFor='sortRating'>Sort rating:</label>
            <select name='sortRating' onChange={handleSortByRating}>
            <option value='All'>All</option>
            <option value='Rating'>Rating</option>
            </select>
        </div>
        </div>
    );
}
    


   



    

   







