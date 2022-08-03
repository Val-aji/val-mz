import {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./nav";
import Home from "./home";
import List from "./List/list"

class App extends Component {
  
  render() {
    return (

    <BrowserRouter>
      <div id="container">
            <Nav />
            
            <Home />
            <List />
        </div>
    </BrowserRouter>



    )
  }
}

export default App;