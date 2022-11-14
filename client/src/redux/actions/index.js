import axios from 'axios';
export const GET_GAMES = 'GET_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_GAMES_NAME = 'GET_GAMES_NAME';
//[ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
export const FILTER_GAMES_BY_GENRE = 'FILTER_GAMES_BY_GENRE';
export const FILTER_CREATED_OR_EXIST = 'FILTER_CREATED_OR_EXIST';
//[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const SORT_BY_RATING = 'SORT_BY_RATING';


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
     
        
export function getNameGame(name){ 
    //console.log(typeof name)
    return async function(dispatch) {

    try{
        const json = await axios.get("http://localhost:3001/videogames?name="+name);
        
        
        return dispatch({
            type: GET_GAMES_NAME,
            payload: json.data
        })

    }
    catch(err){
        console.log(err)}
        return dispatch({
            type: GET_GAMES_NAME,
            payload: [{msg: "Did not found any games"}]

    })}}

    export function filterGamesByGenre(payload) {
        console.log(payload)
        return {
            type: FILTER_GAMES_BY_GENRE,
            payload
        }
    }

    export function filterCreatedOrExist(payload) {

        return {
            type: FILTER_CREATED_OR_EXIST,
            payload
        }
    }

    export function sortAlphabetically(payload) {
            
            return {
                type: SORT_ALPHABETICALLY,
                payload
            }
        }

    export function sortByRating(payload) {
                
                return {
                    type: SORT_BY_RATING,
                    payload
                }
            }




    




  

  

