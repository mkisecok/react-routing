import { useParams }from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

function User() {
    const { id } = useParams();

    const [user,setUser]= useState({});
    useEffect(() => {
       axios(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res)=>setUser(res.data))
        }
    , [])

    return (
        <div>
          <h1>User Details</h1>
          <code>{JSON.stringify(user)}</code>
        </div>
    )
}

export default User
