import { useParams, Link }from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

function User() {
    const { id } = useParams();

    const [user,setUser]= useState({});
    const [isLoading,setLoading]=useState(true)
    useEffect(() => {
       axios(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res)=>setUser(res.data))
       .finally(()=>setLoading(false))
        }
    , [id])

    return (
        <div>
          <h1>User Details</h1>
          {isLoading && <div>...Loading</div>}
          {!isLoading &&  <code>{JSON.stringify(user)}</code>}
         <br /> <br />
         <Link to={`/user/${parseInt(id)+1}`}> Next User({parseInt(id)+1})</Link>
        </div>
    )
}

export default User
