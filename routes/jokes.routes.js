const JokeController = require('../controllers/jokes.controllers');
console.log( JokeController);
//  const {findAllUsers, findOneSingleUser} = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get("/api/hello", (req, res) => {
        res.json({message: "hi"})
    })
    app.get('/api/jokes',JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingjoke);
}