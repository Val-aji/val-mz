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
      dataSearch: []
      
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.getApiToData = this.getApiToData.bind(this)
    
  }
  
  getApiToData(valueData) {
   this.setState({data: valueData})
  }
  
  componentDidMount() {
  // callback
   this.props.getApi(this.getApiToData)
    
  }
  
  
  handleSearch(e) {
     this.setState({valueSearch: e.target.value}, () => {
          const {data, valueSearch} = this.state
          const dataFilter = data.filter(i => i.name.includes(valueSearch))
          this.setState({dataSearch: dataFilter})
        })
    
  }
  
  render() {
    const {state, props} = this
    const data = state.valueSearch === false ? state.data : state.dataSearch
    return(
      <>
       
        <div className="my-12 grid grid-cols-12 ">
            <input type="text" className="col-start-2 col-end-12 focus:outline-none rounded border-2 border-cyan-600 py-1 px-3" placeholder="cari film disini... " onChange={this.handleSearch}/>
        </div>
       
       
       <div className="flex flex-wrap justify-around px-2 md:justify-center">
       
          {data.map((value, index) => {
            return (
             <div key={index} className="w-2/5 md:mx-2 md:w-2/12">
              <div className="w-full md:mx-2 bg-cyan-600 my-4 rounded" key={index} id="cardFilm" >
                 <img src={value.image.medium} />
                 
                 
                 <button className="text-white text-start p-3 font-bold hover:underline">{value.name}</button>
                 
                 <div className="flex border-t p-2 items-center">
                 <button className="mx-auto text-white" name="tes" id="tes" onClick={e => {
                  this.props.addList(value.id)
                  e.target.classList.toggle("text-amber-900")
                }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" id="yayay">
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
      </>
    )
  }
}

const stateHome = state => {
  return {
     
    
  }
}

const actionHome = dispatch => {
  return {
    getApi: callback => dispatch({type: "getApi", getApiToData:callback }),

    addList: e => dispatch({type: "addList", target: e})
  }
}

export default connect(stateHome, actionHome)(Home);