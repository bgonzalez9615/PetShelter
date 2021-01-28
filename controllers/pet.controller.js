const Pet = require('../models/Pet.model');
const { request } = require('express');

module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.json({ error: err}));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({ pet: newPet }))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: true }))
}

//this will connect to routes to update info about one specific pet
module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.petId, req.body, {runValidators: true, new: true})
        .then((updatedPetInfo) => { res.json(updatedPetInfo) })
        //params => steps
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.petId})
        .then((pet) => res.json(pet))
}