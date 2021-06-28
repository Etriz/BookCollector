import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BookCard from './BookCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const DEFAULTBOOKS = [
  { title: 'The Light Fantastic', author: 'Terry Pratchett' },
  { title: 'Good Omens', author: 'Neil Gaiman' },
  { title: 'What A Long Strange Trip Its Been', author: 'The Grateful Dead', year: '1978' },
];

export default function Library() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {DEFAULTBOOKS.map((book) => (
            <Grid item key={book.title} xs={12} sm={6} md={4}>
              <BookCard classes={classes} book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
