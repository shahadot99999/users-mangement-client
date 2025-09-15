
import { useEffect, useState } from 'react'
import './App.css'

function App() {
    
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data =>setUsers(data));
  },[])

  const handleAddUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email}
    console.log(user);

    //create user in the server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data=>{
      console.log('data after post', data);
      const newUsers = [...users, data];
      setUsers(newUsers);
      e.target.reset();
    })
  }
  return (
    <>
      
      <h1>Users Managements System</h1>
      <h3>Numbers of Users: {users.length}</h3>

      <form onSubmit={handleAddUser} >
        <input  type="text" name='name' id='' />
        <br />
        <input type="email" name="email" id="" />
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
