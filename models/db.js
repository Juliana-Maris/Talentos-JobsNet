const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://ju:pepitamoreira@cluster0.7hl1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

module.exports = {mongoose: mongoose};