import React from 'react';
import styled from 'styled-components';

import Layout from './components/Layout';
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <Layout>
      <StyledApp>
        <AddBookForm />
      </StyledApp>
    </Layout>
  );
}

export default App;

const StyledApp = styled.div`
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
`;
