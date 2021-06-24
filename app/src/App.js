import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import AddBookForm from './components/AddBookForm';
import BookCarousel from './components/BookCarousel';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <BookCarousel />
          </Route>
          <Route path="/add">
            <AddBookForm />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
