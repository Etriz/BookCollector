import React from 'react';
// import { Router, Route } from 'react-router-dom';

import Layout from './components/Layout';
// import AddBookForm from './components/AddBookForm';
import Library from './components/Library';

function App() {
  return (
    <Layout>
      {/* <AddBookForm /> */}
      <Library />
    </Layout>
  );
}

export default App;
