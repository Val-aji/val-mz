

function Story() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const story = e => {
    e.target.style.border = "0px solid black";
  }
  return (
     <div style={{display: "flex", padding: "1.5rem 1rem 0 1rem"}}>
     
       {arr.map((value, index) => {
         return(
          <div className="storyOrg">
            <button onClick={story} key={index} className="storyCard">
              </button>
             <p>Vall </p>
            </div>
         )
       })}
    
     </div>
    
    )
}

export default Story;