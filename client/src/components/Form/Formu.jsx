import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../redux/actions/index";
import { getGenres } from "../../redux/actions/index";
import { Link, useHistory } from "react-router-dom";

// //validaciones

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere un nombre";
  } else if (!/^[A-Za-z0-9 ]+$/.test(input.name)) {
    errors.name = "El nombre debe contener solo letras y números";
  }
  if (!input.description) {
    errors.description = "Se requiere una descripción";
  } else if (!/^[A-Za-z0-9 ]+$/.test(input.description)) {
    errors.description = "La descripción debe contener solo letras y números";
  }
  return errors;
}

export default function Formulario() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
    } else {
      setInput({
        ...input,
        platforms: input.platforms.filter((p) => p !== e.target.value),
      });
    }
  }

  function handleCheckGenre(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
    } else {
      setInput({
        ...input,
        genres: input.genres.filter((g) => g !== e.target.value),
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createGame(input));
    alert("Juego creado con éxito");
    history.push("/videogames");
  }

  // aca se pinta el formulario
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/home">
            <button>VOLVER</button>
          </Link>
          <h1 className="text-center">Crear Juego</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={input.description}
                onChange={handleChange}
              />
              {errors.description && (
                <p className="text-danger">{errors.description}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="released">Fecha de lanzamiento</label>
              <input
                type="date"
                className="form-control"
                id="released"
                name="released"
                value={input.released}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                name="rating"
                value={input.rating}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="platforms">Plataformas</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="platforms"
                  name="platforms"
                  value="PC"
                  onChange={handleCheck}
                />
                <label className="form-check-label" htmlFor="platforms">
                  PC
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="platforms"
                  name="platforms"
                  value="PlayStation"
                  onChange={handleCheck}
                />
                <label className="form-check-label" htmlFor="platforms">
                  PlayStation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="platforms"
                  name="platforms"
                  value="Xbox"
                  onChange={handleCheck}
                />
                <label className="form-check-label" htmlFor="platforms">
                  Xbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="platforms"
                  name="platforms"
                  value="Nintendo"
                  onChange={handleCheck}
                />
                <label className="form-check-label" htmlFor="platforms">
                  Nintendo
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="genres">Géneros</label>
              {genres.map((g) => (
                <div className="form-check" key={g.id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="genres"
                    name="genres"
                    value={g.id}
                    onChange={handleCheckGenre}
                  />
                  <label className="form-check-label" htmlFor="genres">
                    {g.name}
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" onSubmit={(e) => handleSubmit(e)}>
              Crear Videojuego
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
