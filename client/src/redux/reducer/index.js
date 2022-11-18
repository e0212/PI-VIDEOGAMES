const initialState = {
  videogames: [],
  genres: [],
  platforms: [],
  detail: [],
  filter: [],
  allTheGames: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state, // spread operator hace una copia del estado anterior
        filter: action.payload,
        videogames: action.payload,
        allTheGames: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "GET_PLATFORMS":
      return {
        ...state,
        platforms: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_GAMES_NAME":
      return {
        ...state,
        videogames: action.payload,
      };
    case "FILTER_GAMES_BY_GENRE":
      const allGames = state.filter;
      console.log(allGames);
      const gamesAPI = allGames.filter((el) =>
        el.genres.includes(action.payload)
      );
      const gamesDB = allGames.filter((el) => {
        for (let i = 0; i < el.genres.length; i++) {
          if (el.genres[i].name === action.payload) {
            return el;
          }
        }
      });
      const allOfIt = gamesAPI.concat(gamesDB);

      console.log(action.payload);

      return {
        ...state,
        videogames: allOfIt,
      };

    case "FILTER_CREATED_OR_EXIST":
      let allGamesFilter = "null";

      if (action.payload === "Created") {
        allGamesFilter = state.allTheGames.filter((el) => {
          const expresion = /^[0-9]+$/;
          return !expresion.test(el.id); // si no es un numero es creado por nosotros en la base de datos
        });
      } else if (action.payload === "Exist") {
        allGamesFilter = state.allTheGames.filter((el) => {
          const expresion = /^[0-9]+$/;
          return expresion.test(el.id);
        });
      } else {
        allGamesFilter = state.allTheGames;
      }
      return {
        ...state,
        videogames: allGamesFilter,
      };

    case "SORT_ALPHABETICALLY":
      if (action.payload === "A - Z") {
        state.videogames.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });

        state.videogames.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
      }

      if (action.payload === "Z - A") {
        state.videogames.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });

        state.videogames.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
      }

      return {
        ...state,
        videogames: [...state.videogames],
      };

    case "SORT_BY_RATING":
      
      if (action.payload === "Rating Mayor") {
        state.videogames.sort((a, b) => {
          if (a.rating > b.rating) return -1;
          if (b.rating > a.rating) return 1;
          return 0;
        });
      }

      if (action.payload === "Rating Menor") {
        state.videogames.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (b.rating > a.rating) return -1;
          return 0;
        });
      }

      return {
        ...state,
        videogames: [...state.videogames],
      };
  }
  return state;
}
