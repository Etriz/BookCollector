import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import AddBookForm from './components/AddBookForm';
import Glider from './components/Glider';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Glider />
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
