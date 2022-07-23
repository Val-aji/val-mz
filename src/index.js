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
      
      const {getApiToData} = action
      axios.get("https://api.tvmaze.com/shows").then(res => {
        const data = res.data.filter(i => i.id <= 100)
        getApiToData(data)
            
        })
      break;
      
    case "addList":
      console.log(state.dataApi)
        const dataList = state.dataApi.filter(i => i.id === action.target)
        console.log(dataList)
        return {
          ...state,
          dataList: dataList
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
