import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import BookCard from './BookCard';

const DEFAULTBOOKS = [
  { title: 'The Light Fantastic', author: 'Terry Pratchett' },
  { title: 'Good Omens', author: 'Neil Gaiman' },
  { title: 'What A Long Strange Trip Its Been', author: 'The Grateful Dead', year: '1978' },
];

const useStyles = makeStyles(() => ({
  carousel: {
    marginTop: '2rem',
  },
}));

const BookCarousel = () => {
  const [books, setBooks] = useState(DEFAULTBOOKS);
  const classes = useStyles();

  useEffect(() => {
    setBooks(DEFAULTBOOKS);
  }, []);

  return (
    <CssBaseline>
      <Container maxWidth="md">
        <Carousel
          className={classes.carousel}
          plugins={[
            'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button
                    className="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft"
                    style={{ background: '#3f51b5', borderRadius: '.25rem' }}>
                    <span>prev</span>
                  </button>
                ),
                arrowRight: (
                  <button
                    className="BrainhubCarousel__arrows BrainhubCarousel__arrowRight"
                    style={{ background: '#3f51b5', borderRadius: '.25rem' }}>
                    <span>next</span>
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
          ]}
          breakpoints={{
            900: {
              plugins: [
                'infinite',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button
                        className="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft"
                        style={{ background: '#3f51b5', borderRadius: '.25rem' }}>
                        <span>prev</span>
                      </button>
                    ),
                    arrowRight: (
                      <button
                        className="BrainhubCarousel__arrows BrainhubCarousel__arrowRight"
                        style={{ background: '#3f51b5', borderRadius: '.25rem' }}>
                        <span>next</span>
                      </button>
                    ),
                    addArrowClickHandler: true,
                  },
                },
              ],
            },
          }}>
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </Carousel>
      </Container>
    </CssBaseline>
  );
};

export default BookCarousel;
