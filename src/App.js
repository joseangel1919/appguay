import {BrowserRouter} from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ColorContext } from "./context/ColorContext";

function App() {

  const [colors, setColors] = useState({
    
      blue: "#03619c",
      yellow: "#8c8f03",
      red: "#9c0312"
    
});
  //usuario
const [user,setUser] = useState({
  name:"",
  "login":login,
  "logout":logout
})

function login(name){
  setUser({name});

}

function logout(){
    setUser({})
}




return (
    <div className="App">
      <BrowserRouter>
      <ColorContext.Provider value={{colors,user}}>
        <Header/>
        <Main/>
      </ColorContext.Provider>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;