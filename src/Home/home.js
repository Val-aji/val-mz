import {Component} from "react";
import axios from "axios";
import "../App.css";
import {connect} from "react-redux"


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      valueSearch: false,
      dataSearch: [],
      alertFilter: false,
      currentClass: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.componentFilter = this.componentFilter.bind(this)
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
    this.setState({data})
    
  }
  
  handleSearch(e) {
     this.setState({valueSearch: e.target.value}, () => {
          const {data, valueSearch} = this.state
          const dataFilter = data.filter(i => i.name.includes(valueSearch))
          this.setState({dataSearch: dataFilter})
        })
    
  }
  
 
  
  componentFilter() {
    return (
      <div className=" bg-slate-50 border-2 my-2 rounded-md drop-shadow px-3 pt-6 w-5/6 mx-auto">
      { /* Tombol Close */ }
      <button className="absolute right-0 top-0" onClick={() => this.setState({alertFilter: false})}>
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
           </svg>
      </button>
      
      { /* Akhir Close */ }
        <div className="p-2 mb-2 w-full md:w-1/5">
          <p className="text-lg"> Tipe Film : </p>
          <div className="mb-2 flex flex-wrap p-1 3/4">
            <button className="buttonFilter p-2 bg-cyan-200 rounded-full rounded w-4/5 " value="Scripted" onClick={this.handleFilter}> Scripted </button>
            <button className="buttonFilter  my-2 p-2 bg-cyan-200 rounded-full w-4/5" value="Animation" onClick={this.handleFilter}> Animation </button>
            <button className="buttonFilter p-2 bg-cyan-200 rounded-full w-4/5" value="Reality" onClick={this.handleFilter} > Reality </button>
            
         
          </div>
          
       
      
        </div>
        
           <div className="flex w-full justify-end my-1">
            <button className="p-2 rounded-md bg-cyan-600 " onClick={() => this.setState({data: this.props.dataApi})}> Reset Filter </button> 
            </div>
      </div>
      
      )
  }
  
  render() {
    const {state} = this
    const {dataList} = this.props
    const data = state.valueSearch === false ? state.data : state.dataSearch
    return(
      <div className="w-full">
        {state.alertFilter && <this.componentFilter /> }
        <div className="my-12 p-2 md:px-6 flex w-11/12 justify-between mx-auto">
            <input type="text" className=" w-5/6 md:w-4/6 focus:outline-none rounded border-2 border-cyan-600 py-1 px-3" placeholder="cari film disini... " onChange={this.handleSearch}/>
            <button className="w-1/6 hover:cursor-pointer" onClick={() => this.setState({alertFilter: true})} >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
            </div>
       
       
       <div className="flex flex-wrap justify-around px-2 md:justify-center">
       
          {data.map((value, index) => {
            return (
             <div key={index} className="w-2/5 md:mx-2 md:w-2/12">
              <div className="w-full md:mx-2 bg-cyan-600 my-4 rounded" key={index} id="cardFilm" >
                 <img src={value.image.medium} />
                 
                 
                 <button className="text-white text-start p-3 font-bold hover:underline">{value.name}</button>
                 
                 <div className="flex border-t p-2 items-center">
                 <button className={
                  (dataList.map(i => i.id).includes(value.id)) ? "mx-auto text-white  text-amber-900" : "mx-auto text-white"
                 } onClick={e => {
                  
                  this.props.addList(value.id)
                  this.setState({currentClass: true})
                  this.setState({currentClass: false})
                }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                   <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                      </svg>
                    </button>
                    <p className="mx-auto text-xl">★ {value.rating.average}</p>
                 </div>
              </div>
             </div>
            
            )
          })}
       </div>
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

const actionHome = dispatch => {
  return {
    getApi: data => dispatch({type: "getApi", data:data }),

    addList: e => dispatch({type: "addList", target: e})
  }
}

export default connect(stateHome, actionHome)(Home);