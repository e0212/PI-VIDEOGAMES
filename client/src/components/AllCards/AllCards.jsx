import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getGames } from '../../redux/actions/index'
import Card from '../Card/Card'

export default function AllCards() {

    const dispatch = useDispatch()
    const games= useSelector((state)=>state.videogames) // se trae el estado de redux
   useEffect(()=>{ // lanza la accion de traer los juegos
    dispatch(getGames())
   },[dispatch])

  return (

    <div>
        <div>
            <div>
            {games?.map(game=> (
                            <Card
              key= {game.id} 
              id= {game.id} 
              name= {game.name} 
              image= {game.image} 
              genres= {game.genres}/>
                    ))
        }

            </div>
        </div>
    </div>

  )
}

