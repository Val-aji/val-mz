import React from 'react';
import axios from "axios"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux"


const initialState = {
  dataApi: []
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    
    case "getApi":
      
      const {getApiToData} = action
      axios.get("https://api.tvmaze.com/shows").then(res => {
        const data = res.data.filter(i => i.id <= 100)
        getApiToData(data)
        
        
          
        })
      break;
      
      
  
     default:
         return {...state}
   }
}
const storeRedux = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={storeRedux}>
    <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
