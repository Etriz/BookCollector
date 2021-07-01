import React from 'react';
import { useHistory } from 'react-router';
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

const Layout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  const classes = useStyles();
  const history = useHistory();
  const logout = () => {
    setIsLoggedIn(false);
    history.push('/');
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="sm">
          <Toolbar>
            <Link color="inherit" underline="none" href="/" className={classes.title}>
              <Typography variant="h6">Home</Typography>
            </Link>
            {isLoggedIn ? (
              <>
                <Button color="inherit" href="/add">
                  Add Book
                </Button>
                <Button color="inherit" onClick={() => logout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button color="inherit" href="/login">
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
