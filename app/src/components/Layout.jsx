import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
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
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
