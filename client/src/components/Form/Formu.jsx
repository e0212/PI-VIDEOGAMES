// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// //import { Form } from "../../actions/index.js";
// import { getGenres } from "../../actions/index.js";
// import * as actions from "../actions/index.js";

// export default function Formu() {
//   const genres = useSelector((state) => state.genres);
//   const PlatformsApi = [
//     "PC",
//     "PlayStation 5",
//     "PlayStation 4",
//     "PlayStation 3",
//     "Xbox One",
//     "Xbox Series S/X",
//     "Xbox 360",
//     "Xbox",
//     "Nintendo Switch",
//     "Nintendo 3DS",
//     "Nintendo DS",
//     "Nintendo DSi",
//     "iOS",
//     "Android",
//     "macOS",
//     "Linux",
//   ];

//   const [state, useState] = useState({
//     name: "",
//     description: "",
//     image: "",
//     released: "",
//     rating: 0,
//     platforms: [],
//     genres: [],
//   });

//   const expresiones = {
//     name: /^[\s\S]{2,10}$/,
//     rating: /^[0-9]+([,][0-9]+)?$/,
//     image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
//     description: /^[\s\S]{10,100}$/,
//   };
// }

// const controller = (value) => {
//   document.getElementById(value).selectedIndex = 0;
// };

// const input = (e) => {
//   if (e.target.id === "rating") {
//     useState({
//       ...state,
//       [e.target.id]: Number(e.target.value)
//         ? Number(e.target.value)
//         : e.target.value,
//     });
//   } else {
//     useState({
//       ...state,
//       [e.target.id]: e.target.value,
//     });
//   }
// };
// const inputSelect = (e) => {
//   if (e.target.id === "genres") {
//     useState({
//       ...state,
//       genres: state.genres.concat(e.target.value),
//     });
//     controller("genres");
//   } else {
//     useState({
//       ...state,
//       platforms: state.platforms.concat(e.target.value),
//     });
//     controller("platform");
//   }
// };

// const onChangeDelete = (e) => {
//   const filter =
//     e.target.id === "platforms"
//       ? state.platforms.filter((value) => value !== e.target.value)
//       : state.genres.filter((value) => value !== e.target.value);
//   if (filter.length === 0) {
//     setState({
//       ...state,
//       [e.target.id]: [],
//     });
//   } else {
//     setState({
//       ...state,
//       [e.target.id]: filter,
//     });
//   }
// };


// useEffect(() => {
//   dispatch(actions.createGame());
// }, [dispatch]);






// const handlerOnSubmit = (event) => {
//   event.preventDefault();
//   setWarnings(true);
//   dispatch(create(state));
// };
// const exit = () => {
//   setWarnings(false);
//   setState({
//     name: "",
//     description: "",
//     image: "",
//     released: "",
//     rating: "",
//     platforms: [],
//     genres: [],
//   });


// return (
//   <div className="conteinterCreate">
//     <Link to="/videogames" className="backCreate">
//       <button>{"<="}</button>
//     </Link>
//     <form className="conteinerForm" onSubmit={handlerOnSubmit}>
//       <div className="name">
//         <label>Name:</label>
//         <input
//           placeholder="Name"
//           id="name"
//           value={state.name}
//           onChange={input}
//         />
//       </div>
//       <div className="name">
//         <label>released: </label>
//         <input
//           placeholder="mm/dd/yyyy"
//           type="date"
//           id="released"
//           value={state.released}
//           onChange={input}
//         />
//       </div>
//       <div className="genres">
//         <label>Genres: </label>
//         <select id="genres" onChange={inputSelect}>
//           <option value={null}>Genres</option>
//           {genres?.map((value) => {
//             return <option value={value.name}>{value.name}</option>;
//           })}
//         </select>
//         <div className="delete1">
//           {state.genres.map((value) => (
//             <button value={value} id="genres" onClick={onChangeDelete}>
//               {value}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="genres">
//         <label>Platform: </label>
//         <select id="platform" onChange={inputSelect}>
//           <option value="true">Platforms</option>
//           {platformsApi.map((value) => {
//             return <option value={value}>{value}</option>;
//           })}
//         </select>
//         <div className="delete2">
//           {state.platforms.map((value) => (
//             <button value={value} id="platforms" onClick={onChangeDelete}>
//               {value}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="name">
//         <label>Rating:</label>
//         <input
//           placeholder="Rating"
//           id="rating"
//           value={state.rating}
//           onChange={input}
//         />
//       </div>
//       <div className="name">
//         <label>Image:</label>
//         <input
//           placeholder="Image"
//           id="image"
//           value={state.image}
//           onChange={input}
//         />
//       </div>
//       <div className="description">
//         <label>Description: </label>
//         <textarea id="description" value={state.description} onChange={input} />
//       </div>
//       10 to 50 characters
//     </form>{" "}
//   </div>
// );
// }
