
// our controller is importing the Model
const Joke = require('../models/jokes.models');

module.exports = {
    // READ ALL
    findAllJokes : (req, res) => {
        // db.users.find()
        Joke.find()
        // IMPORTANT what we return here is what we receive in REACT!
            .then(allDbJokes => res.json(allDbJokes))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // READ ONE
    findOneSingleJoke : (req, res) => {
        // /api/users/:id
        // User.findOne({ _id: req.params.id })
        Joke.findById(req.params.id)
            .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // CREATE
    createNewJoke : (req, res) => {
        console.log(req.body);
        //const {setup,punchline} = req.body;
        // User.create({name: name, age: req.body.age})
        Joke.create(req.body)
            .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // UPDATE
    updateExistingJoke: (req, res) => {
        // /api/users/:id
        // User.findOneAndUpdate(
        //     { _id: req.params.id }, 
        //     req.body,
        //     { new: true, runValidators: true }
        // )
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedJoke => res.json({ joke: updatedJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // DELETE
    deleteAnExistingjoke : (req, res) => {
        // /api/users/:id
        const {id} = req.params
        // User.deleteOne({ _id: req.params.id })
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}