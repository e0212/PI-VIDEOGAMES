//ASI COMPILA OK
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/index";
import { useEffect } from "react";

export default function Detail(props){
  
  const dispatch = useDispatch();
  const detail = useSelector(state => state.detail);
  const id = props.match.params.id

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch , id]);
console.log(detail)
 
  return (
    <div className="detail">
      <div className="detail__container">
        <div className="detail__container__img">
          <img src={detail.image} alt="imagen" />
        </div>
        <div className="detail__container__info">
          <h1>{detail.name}</h1>
          <h3>Genres:</h3>
          <ul>
            {detail.genres?.map((genres) => (
              <li>{genres}</li>
            ))}
          </ul>
          <h3>Platforms:</h3>
          <ul>
            {detail.platforms?.map((platforms) => (
              <li key={platforms.id}>{platforms.name}</li>
            ))}
          </ul>
          <h3>Rating:</h3>
          <p>{detail.rating}</p>
          <h3>Released:</h3>
          <p>{detail.released}</p>
          <h3>Description:</h3>
          <p>{detail.description}</p>
        </div>
      </div>
      <div className="detail__container__gif">
        
      </div>
    </div>
  );
};



  




























                 


