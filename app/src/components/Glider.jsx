import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Glide from 'glidejs-react';
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.css';
import '../styles/gliderOverides.css';

import BookCard from './BookCard';

const options = { perView: 2, bound: true, type: 'carousel' };
const DEFAULTBOOKS = [
  { title: 'The Light Fantastic', author: 'Terry Pratchett' },
  { title: 'Good Omens', author: 'Neil Gaiman' },
  { title: 'What A Long Strange Trip Its Been', author: 'The Grateful Dead', year: '1978' },
  { title: 'Test Book', author: 'This Guy' },
];

const Glider = () => {
  const [books, setBooks] = useState(DEFAULTBOOKS);

  const asyncFetch = async () => {
    try {
      const books = await axios.get('https://rpd-books-mongodb.herokuapp.com/api/books');
      setBooks(books.data.data);
    } catch (error) {
      console.error(error);
      setBooks(DEFAULTBOOKS);
    }
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const removeItem = async (id) => {
    try {
      await axios.delete(`https://rpd-books-mongodb.herokuapp.com/api/books/${id}`);
      asyncFetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Glide arrows bullets options={options}>
      {books.map((book) => (
        <BookCard key={book.title} book={book} removeItem={removeItem} />
      ))}
    </Glide>
  );
};
export default Glider;
