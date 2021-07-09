import React, {useContext}  from "react";
import {UserContext} from '../../context/UserContext';

const Login = () => {
  const ctx = useContext(UserContext);
  console.log(ctx.login);
  console.log(ctx.name)

  function handleSubmit(event){
    event.preventDefault();
    console.log(event.target.elements.name.value)
    ctx.login(event.target.elements.name.value)
  }
return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="submit" value="Login" />
    </form>
    </div>
};



export default Login;