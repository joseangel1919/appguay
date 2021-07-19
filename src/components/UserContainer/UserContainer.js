import { constant } from "lodash";
import React, {useEffect} from "react";
import{useSelector,useDispatch} from 'react-redux';
import { fetchUsers } from '../../redux'


const UserContainer = () => {
  const userData = useSelector(state => state.userR);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (load===true) dispatch(fetchUsers())
  }, [load,fetchUsers])
    
    return <div>
      <h1>Lista de Usuarios</h1>
      {load===false?<button onClick={()=>setLoad(true)}>Descargar</button>:""}
      {userData.loading?<p>Cargando...</p>
      :userData.error?(<h2>{userData.error}</h2>)
      :userData.users.map((user,i)=><p key={i}>{user.name}</p>)
    
    }



    </div>
   
};

export default UserContainer;
