import React,{useState} from "react";
import { connect } from "react-redux";
import {writeMessage} from "../../redux";

const MessageContainer = ({message,writeMessage}) => {

const [text, setText] = useState("")

  return <div>
    <h2>Mensaje Recibido.</h2>
    <input type="text" name="" id="" onChange={e=>setText(e.target.value)}></input>
    <button onClick={()=>writeMessage(text)}>Enviar Mensaje</button>
  </div>;
};

const mapStateToProps = state => {
  return {message:state.message}
}

const mapDispatchToProps = dispatch => {
  // nombre de las props para ejecutar y llamar a una action
  return {
      writeMessage: (message) => dispatch(writeMessage(message)),
      
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(MessageContainer)