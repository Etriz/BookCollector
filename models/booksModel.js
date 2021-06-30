const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
});

const BooksModel = mongoose.model('BooksModel', BooksSchema, 'books');

module.exports = BooksModel;
