const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_date: Number,
    publisher: String,
    updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);