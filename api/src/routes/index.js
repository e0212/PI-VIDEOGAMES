
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {API_KEY} = process.env;
const { Videogame, Genre, Platform} = require('../db');
const { getDBinfo, getAllGames, getGamesByName, getAllGenres } = require('./controllers')
const router = Router();


router.get('/videogames/:id', async (req, res) => {
    const {id} = req.params;
    const  videogamesTotal = await getAllGames()// DENTRO DE TODOS ESTOS JUEGOS BUSCO EL QUE TENGA EL ID QUE ME PASARON POR PARAMETRO
    if (id){
      let videogameId = await videogamesTotal.filter(el => el.id == id)
      videogameId.length ? 
      res.status(200).json(videogameId) :
      res.status(404).send('Game not found')
    }
  })
  

router.get('/videogames', async (req, res)=>{ // get all games

    const {name} = req.query // get name from query
    let allGames = await getAllGames();// get all games from db
    if(name){ // if there is a name query
        const foundGamesAPI = await getGamesByName(name) // get games from API
        const gamesByNameDB = await getDBinfo() // get games from DB

        let foundGamesDB = gamesByNameDB.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        // filter games from DB by name
        let allResults = foundGamesAPI.concat(foundGamesDB)
        // concat games from API and DB
        if(allResults.length){ // if there are results
            res.status(200).send(allResults) // send all results
        } else {
            res.status(404).json(['Sorry, game not found']) // if there are no results
        }
    } else {
        res.status(200).send(allGames) // if there is no name query
    }
});

// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberían traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get ('/genres', async (req, res)=>{

   try {

   const genres = await getAllGenres()
   res.send(genres)
}

   catch(error){
   res.send (error)
   }
});

// //
// - [ ] Videojuego con las siguientes propiedades:
// - ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// - Nombre *
// - Descripción *
// - Fecha de lanzamiento
// - Rating
// - Plataformas *
// - [ ] Genero con las siguientes propiedades:
// - ID
// - Nombre

router.post ('/videogames', async (req, res)=>{

    const {name, description, platforms, released, image, rating, genres, createdAtDb  }= req.body
    if (! name || !description || !platforms || !released || !rating || !genres  ) {
    res.send ("missing data")

    }
    try{
    let newGame = await Videogame.create ({
    name, 
    description, 
    platforms, 
    released, 
    image: image || "https://images5.alphacoders.com/387/387503.jpg",
    rating, 
    genres, 
    createdAtDb})

    let genreDb = await Genre.findAll({
         
        where:
        {
            name: genres
        }
    })

    newGame.addGenre (genreDb);

    res.send (newGame)
}
catch(error){
   res.send (error)
   }
})

module.exports = router;

