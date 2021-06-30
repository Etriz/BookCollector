import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Layout from './components/Layout';
import AddBookForm from './components/AddBookForm';
import Glider from './components/Glider';

const DEFAULTBOOKS = [
  { title: 'The Light Fantastic', author: 'Terry Pratchett' },
  { title: 'Good Omens', author: 'Neil Gaiman' },
  { title: 'What A Long Strange Trip Its Been', author: 'The Grateful Dead', year: '1978' },
  { title: 'Test Book', author: 'This Guy' },
];

function App() {
  const [books, setBooks] = useState(DEFAULTBOOKS);

  const asyncFetch = async () => {
    try {
      const books = await axios.get('http://localhost:8000/api/books');
      setBooks(books.data.data);
    } catch (error) {
      console.error(error);
      setBooks(DEFAULTBOOKS);
    }
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Glider books={books} />
          </Route>
          <Route path="/add">
            <AddBookForm setBooks={setBooks} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
