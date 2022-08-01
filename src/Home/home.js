import {Component} from "react";
import axios from "axios";
import "../App.css";
import {connect} from "react-redux"
import {GET_API, ADD_LIST} from "../aset/fungsi";
import ComponentFilter from "./componentFilter";
import Header from "./header";
import Judul from "./judul";
import Card from "./card";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      valueSearch: false,
      dataSearch: [],
      filterTipe: "All",
      alertFilter: false,
      currentClass: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    
  }
  
  componentDidMount() {
    
   const {dataApi, dataList} = this.props
   if(dataApi.length === 0) {
      axios.get("https://api.tvmaze.com/shows").then(res => {
     
       const data = res.data.filter(i => i.id <= 100)
       
       this.setState({data: data})
       this.props.getApi(data)
       }).catch(err => console.log(err))
     } else {
       this.setState({data: dataApi})
     }
     
  }  
   
  handleFilter(e) {
    const {target} = e

    // reset warna filter
    const classFilter = "buttonFilter my-2 p-2 bg-cyan-200 rounded-full w-4/5 "
    
    const buttonFilter = document.querySelectorAll(".buttonFilter")
    for(let i = 0; i < buttonFilter.length; i++) {
      buttonFilter[i].className = classFilter;
    }
    
    target.classList.toggle("bg-cyan-500")
    const {dataApi} = this.props
    const data = dataApi.filter(i => i.type === target.value)
    this.setState({data, filterTipe: target.value})
    
  }
  
  handleReset() {
    this.setState({data: this.props.dataApi , filterTipe: "All"})
  }
  
  
  handleSearch(e) {
     this.setState({valueSearch: e.target.value}, () => {
          const {data, valueSearch} = this.state
          const dataFilter = data.filter(i => i.name.includes(valueSearch))
          this.setState({dataSearch: dataFilter})
        })
    
  }
  
 
  render() {
    const {state} = this
    const {dataList} = this.props
    const data = state.valueSearch === false ? state.data : state.dataSearch
    return(
      <div className="w-full">
          {/* Component Filter */}
          {state.alertFilter && <ComponentFilter 
                                  handleFilter={this.handleFilter} handleReset={this.handleReset} alertFilter={() => this.setState({alertFilter: false })} /> }
          
          
          {/* HEADER */}
          <Header handleSearch={this.handleSearch} alertFilter={() => this.setState({alertFilter: true}) } />
          
        
          {/* JUDUL */ }
          <Judul filterTipe={this.state.filterTipe} /> 
        
          {/* CARD */ }
          <Card data={data} dataList={dataList} 
                loveList={ id => {
                    this.props.addList(id)
                    this.setState({currentClass: true})
                    this.setState({currentClass: false})}} />
                  
      </div>
    )
  }
}

const stateHome = state => {
  return {
     dataApi: state.dataApi,
     dataList: state.dataList
  }
}

export const actionHome = dispatch => {
  return {
    getApi: data => dispatch({type: GET_API, data:data }),

    addList: e => {
      dispatch({type: ADD_LIST, target: e})
      }
  }
}

export default connect(stateHome, actionHome)(Home);