import {Component} from "react";

class Tentang extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  
  render() {
    return(
      <div className="p-4 mb-20 md:mx-auto md:w-3/5 md:border-2 md:border-amber-900 md:rounded md:mt-20">
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
           
         </div>
         
      </div>
    )
  }
}

export default Tentang;