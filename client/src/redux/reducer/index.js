import {  
GET_GAMES, 
GET_GENRES,
GET_PLATFORMS, 
GET_DETAIL,
} from "../actions";

 


const initialState = {
    videogames : [],
    genres: [],
    platforms: [],

}
export default function rootReducer(state = initialState, action){
  switch(action.type){
    case 'GET_GAMES':
        
      return{
          ...state, // spread operator hace una copia del estado anterior
          videogames: action.payload,
        } 
        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload
            }
            case 'GET_PLATFORMS':
                return{
                    ...state,
                    platforms: action.payload
                }
                case 'GET_DETAIL':
                    return{
                        ...state,
                        detail: action.payload
                    }


        

      default: return {...state}
}}

