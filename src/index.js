import React from 'react';
import axios from "axios"
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux"

const initialState = {
  dataApi: [],
  dataList: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "getApi":
       
       return {
         ...state,
         dataApi: action.data
        }
    break;
    
    case "addList":
      const {dataApi, dataList} = state
      const dataListBaru = dataApi.filter(i => i.id === action.target)[0]
      
      let data = [...dataList, dataListBaru]
     if(dataList.includes(dataListBaru)) {
       data = dataList.filter(i => i !== dataListBaru)
       
     }
      return {
        ...state,
        dataList: data
      }
      
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



reportWebVitals();
