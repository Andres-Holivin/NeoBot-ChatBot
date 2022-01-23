import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout';
import MyRoute from './Configs/MyRoute';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MyRoute/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
