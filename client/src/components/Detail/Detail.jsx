//ASI COMPILA OK
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/index";
import { useEffect } from "react";
import "./detail.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  console.log(detail);

  return (
    <div className="detail">
      <div className="detail__container">
        <div className="container_detail_image">
          <img
            src={detail.image}
            alt="imagen"
            className="container_detail_image "
          />
        </div>
        <h1>{detail.name}</h1>
        <div className="detail__container__info">
          <div>
            <h3>Genres:</h3>
            <ul>
              {detail.genres?.map((genres) => (
                <li key={genres}>{genres}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Platforms:</h3>
            <ul>
              {detail.platforms?.map((platforms) => (
                <li key={platforms}>{platforms}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Rating:</h3>
            <p>{detail.rating}</p>
          </div>
          <div>
            <h3>Released:</h3>
            <p>{detail.released}</p>
          </div>
        </div>
        <h3>Description:</h3>
        <p>{detail.description}</p>
      </div>
      <div className="detail__container__gif"></div>
    </div>
  );
}
