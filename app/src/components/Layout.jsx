import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Container,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Toolbar>
            <Link color="inherit" underline="none" href="/" className={classes.title}>
              <Typography variant="h6">Home</Typography>
            </Link>
            <Button color="inherit" href="/add">
              Add Book
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
