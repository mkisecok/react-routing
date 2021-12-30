import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { BallTriangle } from 'react-loading-icons'
import axios from 'axios'
import './Home.css'
function Home() {
const [photos, setPhotos] = useState([]);
const [isLoading,setLoading]=useState(true)
useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(res=>setPhotos(res.data))
    .finally(()=> setLoading(false))
    
},[])
    return (
        
        <div className='Home'>
            <div className='icon'>{ isLoading && <BallTriangle />}</div>
            
                <div className='photos'>
                {photos.map((photo)=>(
                    <div key={photo.id}>
                    <img  src={photo.url} alt={photo.title}/>
                    <br/>
                    <Link to={`/image/${photo.id}`} className='photo-link'> Go details of photo ({photo.id})</Link>
                    </div>
                       
                ))}
                </div>
            
        </div>
    )
}

export default Home
