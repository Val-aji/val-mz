

function Middle() {
  
  return(
     <div className="containerMiddle">
      <div className="containerCardList">
        <div className="cardList">
          <img src="gambar1.jpg" className="gambarList" />
          
          
          <div style={{width: "80%"}}>
             <div className="infoCardList">
               <div style={{width: "45%", marginLeft: "5px"}}>
                 <b className="f-roboto">Kaos Polos </b>
                 <p>K.11223455 </p>
               </div>
               
          
               <div style={{display: "flex", marginLeft: "5px", width: "45%"}} >
                 <button className="btnJumlahBarang"> - </button>
                 <p style={{padding: "5px"}}> 1 </p>
                 <button className="btnJumlahBarang"> + </button>
               
               </div>
             </div>
             <div style={{display: "flex", justifyContent: "space-between", padding: "2px 5px"}}>
                 <div style={{display: "flex", justifyContent:"space-around", width: "50%"}}>
                   <button className="ukuran">
                   S </button>
                  <button className="ukuran">
                   M </button>
                  <button className="ukuran">
                   L </button>
                  <button className="ukuran">
                   XL </button>
                 </div>
                 
                 <b style={{fontSize: "1.25em", width:"45%"}}>RM 299.00</b>
               </div>
             
          </div>
          

         </div>
        <button className="tombolClose">
           – </button>
       </div>
    </div>
    )
    
}

export default Middle;