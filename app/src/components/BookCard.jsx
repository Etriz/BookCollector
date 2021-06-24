import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    width: '11.5rem',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 2px',
  },
  cardMedia: {
    paddingTop: '100px', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const BookCard = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography>{book.author}</Typography>
        <Typography>{book?.year}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
