const express = require('express');

const BookController = require('../controllers/booksController');

const router = express.Router();

router.get('/books', BookController.getAllBooks);
router.post('/books', BookController.createBook);
router.put('/books/:id', BookController.updateBook);
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
