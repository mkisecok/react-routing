import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { SpinningCircles } from 'react-loading-icons'
import './Users.css'


function Users() {
    const [users,setUsers]=useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res=> setUsers(res.data))
        .finally(()=>setLoading(false))
        
    }, [])
    return (
        <div>
            <h1>Users Name</h1>
            {isLoading && <SpinningCircles className='spinning-icon'/>}
           <ul className='user-name'>
               {users.map((user)=>(
                   <li key={user.id}>
                       <Link to={`/user/${user.id}`}>{user.name}</Link>
                   </li>
               ))}
           </ul>
        </div>
    )
}

export default Users
