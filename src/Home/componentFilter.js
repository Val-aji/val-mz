function ComponentFilter(props) {
   return (
    
      <div className=" bg-slate-50 border-2 my-2 rounded-md drop-shadow px-3 pt-6 w-5/6 mx-auto" id="componentFilter">
      
      
      <button className="absolute right-0 top-0" onClick={props.alertFilter}>
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
       <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
           </svg>
      </button>
      
      
        <div className="p-2 mb-2 w-full md:w-1/5">
          <p className="text-lg"> Tipe Film : </p>
          <div className="mb-2 flex flex-wrap p-1 3/4">
            <button className="buttonFilter p-2 bg-cyan-200 rounded-full w-4/5 " value="Scripted" onClick={props.handleFilter}> Scripted </button>
            <button className="buttonFilter  my-2 p-2 bg-cyan-200 rounded-full w-4/5" value="Animation" onClick={props.handleFilter}> Animation </button>
            <button className="buttonFilter p-2 bg-cyan-200 rounded-full w-4/5" value="Reality" onClick={props.handleFilter} > Reality </button>
            
         
          </div>
          
       
      
        </div>
        
           <div className="flex w-full justify-end my-1">
            <button className="p-2 rounded-md bg-cyan-600 " onClick={props.handleReset}> Reset Filter </button> 
            </div>
      </div>
      
     
      
     )
  } 
  
export default ComponentFilter;
 