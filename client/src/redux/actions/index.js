import axios from 'axios';
export const GET_GAMES = 'GET_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const GET_DETAIL = 'GET_DETAIL';

// ACA DEJAR LA MENOR CANTIDAD DE LOGICA POSIBLE, SOLO LLAMAR A LAS FUNCIONES QUE HACEN LA LOGICA
// ACA SUCEDE LA MAGIA, TODA LA CONEXION DEL BACKEND CON EL FRONTEND. linea 7,9 y 10
        export function getGames(payload) {
        return async function(dispatch) {
        try{
            const json = await axios.get("http://localhost:3001/videogames");
            return dispatch({
                type: GET_GAMES,
                payload: json.data
            }) 

        }catch(err){
            console.log(err)}}}

       

export function getGenres(payload) {
    return async function(dispatch) {
    try{
        const json = await axios.get("http://localhost:3001/genres");
        return dispatch({
            type: GET_GENRES,
            payload: json.data
        }) 

    }catch(err){
        console.log(err)}}}



export function getPlatforms(payload) {
    return async function(dispatch) {
    try{
        const json = await axios.get("http://localhost:3001/platforms");
        return dispatch({
            type: GET_PLATFORMS,
            payload: json.data
        }) 

    }catch(err){
        console.log(err)}}}


export function getDetail(payload) { // EL PAYLOAD ES EL ID
    console.log(typeof payload)
    return async function(dispatch) {
       
    try{
        const json = await axios.get("http://localhost:3001/videogames/"+payload);
        
        return dispatch({
            type: GET_DETAIL,
            payload: json.data
        }) 

    }catch(err){
        console.log(err)}}}       

    




  

  

