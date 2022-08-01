import {actionHome} from "./home";

function Card(props) {
  const {data, loveList, dataList } = props 
  
 return (
   
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
                 } onClick={ () => props.loveList(value.id) 
                 }>
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
   )
}


export default Card;

