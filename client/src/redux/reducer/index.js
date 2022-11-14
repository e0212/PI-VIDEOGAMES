import {  
GET_GAMES, 
GET_GENRES,
GET_PLATFORMS, 
GET_DETAIL,
GET_GAMES_NAME,

FILTER_GAMES_BY_GENRE,
FILTER_CREATED_OR_EXIST,
SORT_ALPHABETICALLY,
SORT_BY_RATING,
} from "../actions";

 


const initialState = {
    videogames : [],
    genres: [],
    platforms: [],
    detail: [],

}
export default function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_GAMES:
        
      return{
          ...state, // spread operator hace una copia del estado anterior
          videogames: action.payload,
        } 
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload
            }
            case GET_PLATFORMS:
                return{
                    ...state,
                    platforms: action.payload
                }
                case GET_DETAIL:
                    return{
                        ...state,
                        detail: action.payload
                    }
                    case GET_GAMES_NAME:
                        return{
                            ...state,
                            videogames: action.payload
                        }
                    case FILTER_GAMES_BY_GENRE :
            
            const allGames = state.videogames;
            console.log(allGames)
            const gamesAPI = allGames.filter(el => el.genres.includes(action.payload))
            const gamesDB = allGames.filter((el) => {
                for(let i = 0; i < el.genres.length; i++){
                    if(el.genres[i].name === action.payload){
                        return el
                    }
                }
            })
            const allOfIt = gamesAPI.concat(gamesDB)

            console.log(action.payload)

            return {
                ...state,
                videogames: allOfIt
            }
            case FILTER_CREATED_OR_EXIST :
            // const createdOrExistFilter = action.payload === 'DB' ? state.allTheGames.filter(el => el.createdAtDb) : state.allTheGames.filter(el => !el.createdAtDb)
            var auxiliar;
            if(action.payload === 'DB') {
                auxiliar = state.allTheGames.filter(el => el.createdAtDb)
                if(!auxiliar.length) auxiliar = [{dbError: 'No video games found'}]
            }else{
                auxiliar = state.allTheGames.filter(el => !el.createdAtDb)
            }

            return {
                ...state,
                videogames: auxiliar
            }
        case SORT_ALPHABETICALLY :

            const allGames2 = state.allTheGames
            const gamesAPI2 = allGames2.filter(el => el.genres.includes(action.payload))
            const gamesDB2 = allGames2.filter((el) => {
                for(let i = 0; i < el.genres.length; i++){
                    if(el.genres[i].name === action.payload){
                        return el
                    }
                }
            })
            const allOfIt2 = gamesAPI2.concat(gamesDB2)

            return {
                ...state,
                videogames: allOfIt2
            }
            case SORT_BY_RATING :
            let sorted2 = action.payload === 'Lowest to Highest Rating' ?
            state.videogames.sort(( el1, el2 ) => {
                if(el1.rating > el2.rating) {
                    return 1;
                }
                if(el1.rating < el2.rating) {
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort(( el1, el2 ) => {
                if(el1.rating > el2.rating) {
                    return -1;
                }
                if(el1.rating < el2.rating) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                videogames: sorted2
            }
        default:
            return state
    }
}




        


