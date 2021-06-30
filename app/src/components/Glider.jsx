import React from 'react';

import Glide from 'glidejs-react';
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.css';
import '../styles/gliderOverides.css';

import BookCard from './BookCard';

const options = { perView: 2, bound: true, type: 'carousel' };

const Glider = ({ books }) => {
  return (
    <Glide arrows bullets options={options}>
      {books.map((book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </Glide>
  );
};
export default Glider;
