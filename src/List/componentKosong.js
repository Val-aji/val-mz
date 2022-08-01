import {Link} from "react-router-dom"

function componentKosong(props) {
  return(
      <>
         <p className="text-center"> Maaf tidak ada Film yang kamu suka.</p>
         <p className="text-center">Kembali ke 
            <Link to="/" className="text-cyan-600 underline">HOME </Link> 
          </p>
       </>
      
    )
    
}

export default componentKosong;