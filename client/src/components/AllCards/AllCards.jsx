import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";

export default function AllCards (props) {

    const dispatch = useDispatch();
    const games = useSelector (state => state.games);
    
    

    useEffect(() => {

        dispatch(getGames());

      
    

    }, [dispatch]);
    console.log(games);
    
    return (<div>

        {games&&games.map((game) => {console.log(game) })}





</div>) 

}