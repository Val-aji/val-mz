function Header(props) {
  return (
     <div className="mt-12 mb-8 p-2 md:px-6 flex w-11/12 justify-between mx-auto">
            <input type="text" className=" w-5/6 md:w-4/6 focus:outline-none rounded border-2 border-cyan-600 py-1 px-3" placeholder="cari film disini... " onChange={props.handleSearch}/>
            <button className="w-1/6 hover:cursor-pointer" onClick={props.alertFilter} >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>
      </div>
   )
}
export default Header;