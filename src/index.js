import React from 'react';
import axios from "axios"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux"
import reducer from "./aset/reducer";


const storeRedux = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={storeRedux}>
    <App />
   </Provider>
  </React.StrictMode>
);



reportWebVitals();
