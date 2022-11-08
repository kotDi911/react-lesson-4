import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {DataProvider} from './App';
import ContactsList from "./App2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<DataProvider>*/}
      {/*    <App/>*/}
          <ContactsList/>
      {/*</DataProvider>*/}
  </React.StrictMode>
);