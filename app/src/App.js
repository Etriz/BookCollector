import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import AddBookForm from './components/AddBookForm';
import LoginForm from './components/LoginForm';
import Glider from './components/Glider';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Switch>
          <Route exact path="/">
            <Glider isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/add">
            <AddBookForm />
          </Route>
          <Route path="/login">
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
