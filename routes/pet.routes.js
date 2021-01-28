// const mongoose = require('mongoose');
// const control = require('../controllers/pet.controller')();
// const path = require('path');
const routesCtl = require('../controllers/pet.controller');

//theses are the routes used by axios, the "numbers"
module.exports = app => {
    app.get('/api/pets', routesCtl.getAllPets);

    app.post('/api/pets', routesCtl.createPet);

    app.put('/api/pets/:petId', routesCtl.updatePet);
    //.updatePet needs to match controller function (.petName)
    //put updates info
    //2 arguments

    app.delete('/api/pets/:id', routesCtl.deletePet);

    app.get('/api/:petId', routesCtl.getOnePet);
};

// module.exports = function(app){
    // app.get('/api', pet.controller.index);
    // app.post('/api/pets', petController.createPet);
    
    // app.get('/pets', function(req, res){
    //     control.index(req, res);
    // });
    // app.get('/pet/:id', function(req,res){
    //     control.pet(req,res);
    // });
    // app.post('/pets', function(req,res){
    //     control.createPet(req,res);
    // });
    // app.put('/pets/edit/:id', function(req,res){
    //     control.updatePet(req,res);
    // });
    // app.delete('/pets/:id', function(req,res){
    //     control.deletePet(req,res);
    // }); 
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./client/dist/index.html"))
    // });    
// };