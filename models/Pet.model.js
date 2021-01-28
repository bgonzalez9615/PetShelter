const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
        //keys : values
        petName:  {
                type: String,
                minlength: [
                        3,
                        'The pet name must be at least 3 characters.'
                ]
        },
        petType: {
                type: String,
                minlength: [
                        3,
                        'The pet type must be at least 3 characters.'
                ]
        },
        petDescription: {
                type: String,
                minlength: [
                        3,
                        'The pet description must be at least 3 characters.'
                ]
        },
        skill1: {
                type: String
        },
        skill2: {
                type: String
        },
        skill3: {
                type: String
        }
}, { timestamps: true });

const Pet = mongoose.model('Pets', PetSchema);

module.exports = Pet;