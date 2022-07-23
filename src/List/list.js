import {Component} from "react";
import {connect} from "react-redux";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: []    
    }
  }

  
  componentDidMount() {
    
  }
  
  
  render() {
    return(
      <>
        
      
      </>
    )
  }
}


const stateList = state => {
  return {

  }
}

const actionList = action => {
  return {

  }
}

export default connect(stateList, actionList)(List);

