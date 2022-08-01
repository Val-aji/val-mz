import {GET_API, ADD_LIST} from "./fungsi"

const initialState = {
  dataApi: [],
  dataList: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_API:
       
       return {
         ...state,
         dataApi: action.data
        }
    break;
    
    case ADD_LIST:
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

export default reducer
