
import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';


// ACA SUCEDE LA MAGIA, TODA LA CONEXION DEL BACKEND CON EL FRONTEND. linea 7,9 y 10
export function getGames() {

    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/videogames');
      

        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        }) 
    }
}
  

