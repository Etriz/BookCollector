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
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto .25rem',
    border: '1px solid lightgray',
  },
  cardMedia: {
    paddingTop: '100px', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
const BookCard = ({ book, removeItem }) => {
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
        {!book?.hideButton ? (
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={() => removeItem(book._id)}>
            Remove
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default BookCard;
