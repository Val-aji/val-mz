import {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ComponentKosong from "./componentKosong";
import TableInfo from "./tableInfo";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: []    
    }
  }
  
  componentDidMount() {
    this.setState({dataList: this.props.dataList})
  }
  
  
  render() {
    const {dataList} = this.state
    return(
      <div className="p-2 ">
     
        <p className="font-bold text-center pt-4 text-3xl">
          List Film
        </p>
        
        
        <div className="my-2 p-2">
         {dataList.length === 0 && <ComponentKosong /> }
         
           {dataList.map((value, index) => {
             return (
           <>
            <button className="text-amber-900 text-xl"> {index+1}. {value.name} </button>
           
             <div id={index} className="p-2 mb-8 md:flex">
              <div className="w-full mb-2 md:w-7/12 mr-2">
               
                <img src={value.image.medium} className="p-2 w-7/12 md:w-6/12 float-right md:float-left" />
                 <span className="p-2 md:w-7/12" dangerouslySetInnerHTML={{__html: value.summary}} />
               </div>
              
              <TableInfo data={value} />
              
            </div>
            
          </>
             )
           })}
       </div>
      
      </div>
    )
  }
}


const stateList = state => {
  return {
     dataList: state.dataList
  }
}

export default connect(stateList)(List);

