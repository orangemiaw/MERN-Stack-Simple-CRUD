const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/mern_crud';

mongoose.Promise = require('bluebird');
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, promiseLibrary: require('bluebird') });

module.exports = mongoose;