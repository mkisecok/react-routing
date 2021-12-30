import { useParams, Link }from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { SpinningCircles } from 'react-loading-icons'
import './Users.css'


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
          <h2>User Details</h2>
          {isLoading && <SpinningCircles className='spinning-icon'/>}
          {!isLoading &&  <code>{JSON.stringify(user)}</code>}
         <br /> <br />
         <Link to={`/user/${parseInt(id) < 9 ? parseInt(id) + 1:parseInt(id) === 9 ? 10 : 1 }`} className='next-link'> Next User({parseInt(id) < 9 ? parseInt(id) + 1:parseInt(id) === 9 ? 10 : 1 })</Link>
        </div>
    )
}

export default User
