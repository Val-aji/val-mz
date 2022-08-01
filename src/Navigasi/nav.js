import {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
       menus: [ 
         {url: "/", name: "HOME"},
         {url: "/list", name: "LIST"},
         {url: "/tentang", name: "TENTANG"}
       ],
       classLink: "font-semibold text-xl text-amber-900 hover:transition-all hover:duration-300 hover:underline hover:pointer-cursor hover:text-amber-700 p-2 md:p-0 border md:border-none w-full text-center"
       
    }
  }
  
  handleToggle() {
    document.getElementById("openToggle").classList.toggle("hidden")
  }
  
  render() {
   const {menus, classLink} = this.state
    return(
      <div>
      
       <div className="bg-cyan-600 flex justify-between items-center p-4">
         <span className="w-1/2 f-average text-3xl text-green-800">VAL<span className="text-white f-average text-3xl">mz</span></span>
         
         {/* Layar Hp */ }
         <button className="hover:cursor-pointer md:hidden hover:outline-none hover:border-none" onClick={this.handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
           </svg>
         </button>
 
        
        {/* LAYAR LAPTOP */}
         <div className="hidden w-1/2 md:flex md:justify-around">
           {menus.map((value, index) => {
             return (
              <>
               <Link key={index} to={value.url} className={this.state.classLink}>{value.name} </Link>
              </>
             )
           })}
          
          </div>
         </div>
       
       
       {/* NAV LAYAR HP */}
        <div className="animation-pulse flex flex-col hidden " id="openToggle">
            {menus.map((value, index) => {
              return (
               <>
                 <Link to={value.url} className={this.state.classLink} key={index} onClick={this.handleToggle} >{value.name}</Link>
               </>
              )
            })}
           </div>
         
      </div>
     )
  }
}

export default Nav;