import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../redux/actions/index";
import { getGenres } from "../../redux/actions/index";
import { Link } from "react-router-dom";

// //validaciones

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+/.test(input.name)) {
    errors.name = "Name is invalid";
  }
  if (!input.description) {
    errors.description = "Description is required";
  } else if (!/^[A-Za-z]+/.test(input.description)) {
    errors.description = "Description is invalid";
  }
  if (!input.released) {
    errors.released = "Released is required";
  } else if (!/^[A-Za-z]+/.test(input.released)) {
    errors.released = "Released is invalid";
  }
  if (!input.rating) {
    errors.rating = "Rating is required";
  } else if (!/^[A-Za-z]+/.test(input.rating)) {
    errors.rating = "Rating is invalid";
  }
  if (!input.platforms) {
    errors.platforms = "Platforms is required";
  } else if (!/^[A-Za-z]+/.test(input.platforms)) {
    errors.platforms = "Platforms is invalid";
  }
  return errors;
}

// function validate(input) {// (falta averiguar donde esta esta funcion)
//     let errors = {};
//     let dif = Number(input.difficulty); // 1, 2, 3, 4, 5
//     let dur = Number(input.duration);// input duration is a string that we convert to a number to compare it with the difficulty number
//     if (!input.name) { // if the input name is empty
//         errors.name = "Name is required";
//     } else if (!/^[a-zA-Z]+$/.test(input.name)) { // /^[a-zA-Z]+$/.test(input.name) is a regular expression that checks if the name is only letters
//         errors.name = "Name must contain only letters";
//     }
//     if (!input.difficulty) {
//         errors.difficulty = "Difficulty is required";
//     } else if (dif < 1 || dif > 5) {
//         errors.difficulty = "Difficulty must be a number between 1 and 5";
//     }
//     if (!input.duration) {
//         errors.duration = "Duration is required";
//     } else if (dur <= 0 || dur > 24) {
//     }
//     if (!input.season || input.season === "none") { // if the input season is empty or none (none is the default value)
//         errors.season = "Season is required";
//     }
//     return errors;
// }

export default function Formulario() {
  console.log("hola");
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const platformsApi = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];

  const [state, setState] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  const expresiones = {
    name: /^[\s\S]{2,10}$/,
    rating: /^[0-9]+([,][0-9]+)?$/,
    image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    description: /^[\s\S]{10,100}$/,
  };

  const controller = (value) => {
    document.getElementById(value).selectedIndex = 0;
  };

  const input = (e) => {
    if (e.target.id === "rating") {
      setState({
        ...state,
        [e.target.id]: Number(e.target.value)
          ? Number(e.target.value)
          : e.target.value,
      });
    } else {
      setState({
        ...state,
        [e.target.id]: e.target.value,
      });
    }
  };
  const inputSelect = (e) => {
    if (e.target.id === "genres") {
      setState({
        ...state,
        genres: state.genres.concat(e.target.value),
      });
      controller("genres");
    } else {
      setState({
        ...state,
        platforms: state.platforms.concat(e.target.value),
      });
      controller("platform");
    }
  };

  const onChangeDelete = (e) => {
    const filter =
      e.target.id === "platforms"
        ? state.platforms.filter((value) => value !== e.target.value)
        : state.genres.filter((value) => value !== e.target.value);
    if (filter.length === 0) {
      setState({
        ...state,
        [e.target.id]: [],
      });
    } else {
      setState({
        ...state,
        [e.target.id]: filter,
      });
    }
  };
  const handlerOnSubmit = (event) => {
    event.preventDefault();
    dispatch(createGame(state));
  };

  // aca se pinta el formulario
  return (
    <div className="conteinterCreate">
      <Link to="/videogames" className="backCreate">
        <button>{"<="}</button>
      </Link>
      <form className="conteinerForm" onSubmit={handlerOnSubmit}>
        <div className="name">
          <label>Name:</label>
          <input
            placeholder="Name"
            id="name"
            value={state.name}
            onChange={input}
          />
        </div>
        <div className="name">
          <label>released: </label>
          <input
            placeholder="mm/dd/yyyy"
            type="date"
            id="released"
            value={state.released}
            onChange={input}
          />
        </div>
        <div className="genres">
          <label>Genres: </label>
          <select id="genres" onChange={inputSelect}>
            <option value={null}>Genres</option>
            {genres?.map((value) => {
              return <option value={value.name}>{value.name}</option>;
            })}
          </select>
          <div className="delete1">
            {state.genres.map((value) => (
              <button value={value} id="genres" onClick={onChangeDelete}>
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="genres">
          <label>Platform: </label>
          <select id="platform" onChange={inputSelect}>
            <option value="true">Platforms</option>
            {platformsApi.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <div className="delete2">
            {state.platforms.map((value) => (
              <button value={value} id="platforms" onClick={onChangeDelete}>
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="name">
          <label>Rating:</label>
          <input
            placeholder="Rating"
            id="rating"
            value={state.rating}
            onChange={input}
          />
        </div>
        <div className="description">
          <label>Description: </label>
          <textarea
            id="description"
            value={state.description}
            onChange={input}
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}
