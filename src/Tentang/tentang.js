import {Component} from "react";
import {connect} from "react-redux";

class Tentang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.setAllData = this.setAllData.bind(this)
  }
  
  setAllData(value) {
    this.setState({data: value})
  }
  componentDidMount() {
    this.props.getApi(this.setAllData)
    
  }
  
  
  render() {
    const {data} = this.state
    return(
      <div className="p-4 mb-20 md:mx-auto md:w-3/5 md:border-2 md:border-amber-900 md:rounded md:mt-20 ">
        <h1 className="mt-4 font-bold text-black text-3xl">Tentang </h1>
         
         
         <div class="p-4 border-b">
            <h2 className="text-xl font-semibold my-2"> Pendahuluan </h2>
           
           <p className="text-lg f-average text-justify indent-3">
              VALmz merupakan sebuah website hasil pembelajaran yang menampilkan data dari TVmaze menggunakan API
                 <a href="https://api.tvmaze.com/shows" target="_blank" className="underline text-blue-400 hover:text-blue-600"> https://api.tvmaze.com/shows</a>  .
           </p>
         </div>
         
         { /* END PENDAHULUAN START SUMBER DATA */ }
         
          <div class="p-4 border-b">
            <h2 className="text-xl font-semibold my-2"> Sumber Data </h2>
           
           <p className="text-lg f-average text-justify indent-3">
              Semua data di VALmz didapatkan dari website TVmaze 
               ( <a href="https://www.tvmaze.com" target="_blank" className="underline text-blue-400 hover:text-blue-600" >tvmaze.com</a> ). TVmaze adalah komunitas pecinta TV dan contributors berdedikasi yang mendiskusikan dan membantu memelihara dan infomasi TV di web.
           </p>
        
        
           <div className="my-10">
              <table className="px-2">
                 <tr className="border">
                    <td><p className="font-semibold p-2">No </p>
                    </td>
                    <td><p className="font-semibold p-2">Nama Film </p>
                    </td>
                    <td><p className="font-semibold p-2">Link Asli </p>
                    </td>
                  </tr>
                
                {data.map((value, index) => {
                   return (
                   <tr key={index} className="border">
                     <td><p className="mx-auto p-1">{index+1}</p></td>
                     <td><p className="mx-auto p-2">{value.name}</p></td>
                     <td><a href={value.url} className="text-cyan-600 hover:underline break-all">
                     {value.url}</a></td>
                     
                     
                   </tr>
                  
                  )
                })}
                    
                  
              
              
              </table>
           
         
             </div>
         
           
         </div>
         

      </div>
    )
  }
  
}

const stateTentang = state => {
  return {
    
  }
}

const actionTentang = action => {
  return {
    getApi: callback => action({type:"getApi" , getApiToData: callback })
  }
}

export default connect(stateTentang, actionTentang)(Tentang);