import {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
  
  Kosong() {
    return(
       <>
         <p className="text-center"> Maaf tidak ada Film yang kamu suka.</p>
         <p className="text-center">Kembali ke <Link to="/" className="text-cyan-600 underline">HOME </Link> </p>
       
       </>
      
     )
      
  }
  
  render() {
    const {dataList} = this.state
    return(
      <div className="p-2 ">
     
        <p className="font-bold text-center pt-4 text-3xl">
          List Film
        </p>
        
        
        <div className="my-2 p-2">
         {dataList.length === 0 && <this.Kosong /> }
           {dataList.map((value, index) => {
             return (
           <>
            <button className="text-amber-900 text-xl"> {index+1}. {value.name} </button>
           
             <div id={index} className="p-2 mb-8 md:flex">
              <div className="w-full mb-2 md:flex md:w-7/12 md:justify-between">
               
                <img src={value.image.medium} className="p-2 w-7/12 md:w-6/12 float-right md:order-1" />
                 <div className="p-2 md:w-7/12 md:order-2" dangerouslySetInnerHTML={{__html: value.summary}} />
               </div>
              
              
              <div className="w-full flex flex-wrap p-3 justify-start bg-slate-50 drop-shadow-md md:w-4/12">
                <p className="w-2/5 text-lg">Judul </p>
                <p className="w-1/6"> = </p>
                <a href={value.url} className="w-2/5 text-base text-cyan-500 hover:underline" target="_blank" > {value.name} </a>
                
                <p className="w-2/5 text-lg">Jenis </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {value.type}</p>
               
                <p className="w-2/5 text-lg">Bahasa </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {value.language}</p>
                
                
                <p className="w-2/5 text-lg">Kategori </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {value.genres.join(", ")}</p>
               
                <p className="w-2/5 text-lg">Negara </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {value.network.country.name}</p>
                
                <p className="w-2/5 text-lg">situs web </p>
                 <p className="w-1/6"> = </p>
                <a href={value.officialSite} className="w-2/5 text-base text-cyan-500 underline break-all"> {value.officialSite}</a>
                
              </div>
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

const actionList = action => {
  return {
   
  }
}

export default connect(stateList, actionList)(List);

