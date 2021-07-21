import {BrowserRouter} from 'react-router-dom';
import React, { useState } from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';
import { ColorContext } from "./context/ColorContext";
import { UserContext } from "./context/UserContext";

function App() {
  // Colores
  const [colors, setColors] = useState({
    blue: "#03619c",
    yellow: "#8c8f03",
    color:"blue",
    "changeColor":changeColor
  }); // estado de colores
  // Usuario
  const [user, setUser] = useState({
    name:"",
    "login":login,
    "logout":logout
  }) 
  // user --> {name:"alex",logout:logout()}

  function login(name){
    setUser({...user,name});
  }

  function logout(){
    setUser({...user,"name":""});
  }

  function changeColor(newColor){
    setColors({...colors,color:newColor});
  }

  return (
    <Provider store={store}>
     <div className="App">
       <BrowserRouter>
       <ColorContext.Provider value={colors}>
        <UserContext.Provider value={user}>
         <Header/>
         <Main/>
        </UserContext.Provider>
       </ColorContext.Provider>
       </BrowserRouter>
       <Footer/>
       
      </div>
    </Provider>
  );
}

export default App;