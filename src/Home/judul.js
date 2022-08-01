function Judul(props) {
    return (
       <div className="my-2 border-t flex justify-between">
         <p className="font-bold text-3xl p-2">Semua Film </p>
        <p className="mr-2 text-lg p-2"> ({props.filterTipe}) </p>
      </div>
    )
      
}

export default Judul;