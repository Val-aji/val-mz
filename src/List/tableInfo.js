

function tableInfo(props) {
  const {url, name, type, language, genres, network , officialSite } = props.data
  
  return (
      <div className="w-full p-3 bg-slate-50 drop-shadow-md md:w-4/12">
              <div className="flex">
                <p className="w-2/5 text-lg">Judul </p>
                <p className="w-1/6"> = </p>
                <a href={url} className="w-2/5 text-base text-cyan-500 hover:underline" target="_blank" > {name} </a>
                </div>
                
                 <div className="flex">
                <p className="w-2/5 text-lg">Jenis </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {type}</p>
               </div>
               
                <div className="flex">
                <p className="w-2/5 text-lg">Bahasa </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {language}</p>
                </div>
                
                 <div className="flex">
                <p className="w-2/5 text-lg">Kategori </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {genres.join(", ")}</p>
               </div>
               
                <div className="flex">
                <p className="w-2/5 text-lg">Negara </p>
                 <p className="w-1/6"> = </p>
                <p className="w-2/5 text-base text-cyan-600"> {network.country.name}</p>
                </div>
                
                 <div className="flex">
                <p className="w-2/5 text-lg">situs web </p>
                 <p className="w-1/6"> = </p>
                <a href={officialSite} className="w-2/5 text-base text-cyan-500 underline break-all"> {officialSite}</a>
                </div>
        </div>
    )
}

export default tableInfo;