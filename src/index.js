import {  ChakraProvider } from '@chakra-ui/react';
import { Provider } from "react-redux"
import { store } from './store/index'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider theme={theme} >
     <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ChakraProvider>

);

