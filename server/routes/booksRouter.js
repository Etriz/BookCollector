const express = require('express');

const BookController = require('../controllers/booksController');

const router = express.Router();

router.get('/books', BookController.getAllBooks);

module.exports = router;
