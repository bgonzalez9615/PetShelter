const mongoose =  require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/ExamRetake', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('connected'))
    .catch(err => console.log('error occurred', err));