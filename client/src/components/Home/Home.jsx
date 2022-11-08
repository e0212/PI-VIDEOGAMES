import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import AllCards from "../AllCards/AllCards";



export default function Home() {

  const dispatch = useDispatch();// esto reemplaza a mapDispatchToProps

  const games = useSelector(state => state.games);


    
 

 
   // ACA RENDERIZO LA DATA QUE VIENE DEL BACKEND
  return (
    <div>
      <h1>Home</h1>
      <AllCards/> 
      </div>
  );
}
      
     
    
  
  




    





    


        

