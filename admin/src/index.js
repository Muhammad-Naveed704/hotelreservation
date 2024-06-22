// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
// import { DarkModeContextProvider } from "./context/darkModeContext";

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <DarkModeContextProvider>
//         <App />
//       </DarkModeContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
