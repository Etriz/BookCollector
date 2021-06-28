const Book = require('../models/booksModel.js');

const createBook = (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).json({ success: false, error: 'Please provide book details' });

  const book = new Book(body);
  if (!book) return res.status(400).json({ success: false, error: 'Error adding this book' });

  book.save().then(() => {
    return res.status(201).json({
      success: true,
      id: book._id,
      message: 'Book saved successfully',
    });
  });
};

const getAllBooks = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) return res.status(400).json({ success: false, error: err });
    if (!books.length) return res.status(400).json({ success: false, error: 'No books added yet' });

    return res.status(200).json({ success: true, data: books });
  });
};

const updateBook = async (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).json({ success: false, error: 'No changes given' });

  try {
    let changeBook = await Book.findById(req.params.id);
    changeBook.title = body?.title;
    changeBook.author = body?.author;
    changeBook.year = body?.year;
    await changeBook.save();
    return res.status(200).json({ success: true, message: 'Book Updated', data: changeBook });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
};

const deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
    if (err) return res.status(400).json({ success: false, error: err });
    if (!book) return res.status(400).json({ success: false, error: 'Book not found' });

    return res.status(200).json({ success: true, data: book });
  });
};

module.exports = { createBook, getAllBooks, updateBook, deleteBook };
