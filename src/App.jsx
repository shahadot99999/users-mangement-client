
import { useEffect, useState } from 'react'
import './App.css'

function App() {
    
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  },[])
  return (
    <>
      
      <h1>Users Managements System</h1>
      <h3>Numbers of Users: {users.length}</h3>

      <form onSubmit={handleAddUser} >
        <input type="text" name='' id='' />
        <br />
        <input type="email" name="" id="" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} :  {user.name} : {user.email}</p>)
        }
      </div>
      
    </>
  )
}

export default App
