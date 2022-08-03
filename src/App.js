import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Nav from "./Navigasi/nav";
import Home from "./Home/home";
import List from "./List/list";
import Tentang from "./Tentang/tentang";

class App extends Component {
  
  render() {
    return (


      
      <BrowserRouter>
       <Nav />
       
       <Routes>
         <Route path="/" element={<Home /> } />
         <Route path="/list" element={<List /> } />
         <Route path="/tentang" element={<Tentang /> } />
         
       </Routes>
      </BrowserRouter>
    
    )
  }
}

export default App;